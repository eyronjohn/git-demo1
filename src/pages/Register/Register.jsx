import { Link, useNavigate } from "react-router";
import pawPrint from '../../assets/paw-print 4.png'
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { ref, set } from "firebase/database";

function Register() {

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

        function verifyEmail(evt){
            let tempEmail = evt.target.value;
            let errEmail = document.querySelector("#errEmail");
            errEmail.innerHTML = "";
            setEmail(null);

            if(tempEmail.trim().length <= 0){
                errEmail.innerHTML = "Blank spaces are not allowed!";
            }else if(!tempEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
                errEmail.innerHTML = "Invalid email address!";
            }
            else{
                setEmail(tempEmail);
            }
        }

        function verifyName(evt){
            let tempName = evt.target.value;
            let errName = document.querySelector("#errName");
            errName.innerHTML = "";
            setName(null);

            if (tempName.trim().length === 0) {
                errName.innerHTML = "Blank spaces are not allowed!";
             }
            else if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(tempName)) {
                errName.innerHTML = "Name must contain only letters!";
            }
            else if(tempName.trim().length < 2){
                errName.innerHTML = "Name must be at least 2 letters!";
            }
            else{
                setName(tempName);
            }
        }

        function verifyUsername(evt) {
            let tempUser = evt.target.value.trim();
            let errUser = document.querySelector("#errUsername");
            errUser.innerHTML = "";
            setUsername(null); 

            if (tempUser.length <= 0) {
                errUser.innerHTML = "Username cannot be blank!";
            } 
            else if (tempUser.length < 5) {
                errUser.innerHTML = "Username must be at least 5 characters!";
            } 
            else if (!tempUser.match(/^[A-Za-z]/)) {
                errUser.innerHTML = "Username must start with a letter!";
            } 
            else if (!tempUser.match(/^[A-Za-z][A-Za-z0-9._]{4,19}$/)) {
                errUser.innerHTML = "Username can only contain letters, numbers, dots, or underscores!";
            } 
            else if (tempUser.endsWith(".") || tempUser.endsWith("_")) {
                errUser.innerHTML = "Username cannot end with a dot or underscore!";
            } 
            else {
                setUsername(tempUser);
            }
        }

        function verifyPassword(evt){
            let tempPass = evt.target.value;
            let errPass = document.querySelector("#errPassword");
            errPass.innerHTML = "";
            setPassword(null);

            if(tempPass.length <= 0){
                errPass.innerHTML = "Blank spaces are not allowed!";
            }
            else if(tempPass.length < 8){
                errPass.innerHTML = "Password must be at least 8 characters!";
            }
            else if(!tempPass.match(/[A-Z]/)){
                errPass.innerHTML = "Password must contain at least 1 uppercase letter!";
            }
            else if(!tempPass.match(/[a-z]/)){
                errPass.innerHTML = "Password must contain at least 1 lowercase letter!";
            }
            else if(!tempPass.match(/[0-9]/)){
                errPass.innerHTML = "Password must contain at least 1 number!";
            }
            else if(!tempPass.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/)){
                errPass.innerHTML = "Password must contain at least 1 special character!";
            }
            else{
                setPassword(tempPass);
            }
        }

        function verifyContactNumber(evt){
            let tempNumber = evt.target.value;
            let errNumber = document.querySelector("#errContactNumber");
            errNumber.innerHTML = "";
            setContactNumber(null);
            
            if (!tempNumber.startsWith("09")){
                errNumber.innerHTML = "Valid number must start with (09)";
            }
            else if (!/^[0-9]+$/.test(tempNumber)) {
                errNumber.innerHTML = "Valid number cannot contain letters or symbols!";
            }
            else if (tempNumber.trim().length !== 11) {
                errNumber.innerHTML = "Valid number must be exactly 11 digits!";
            }
            else{
                setContactNumber(tempNumber);
            }
        }

        function registerUser() {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;

            const storeUserInformation = {
            fullname: name,
            username: username,
            contactNumber: contactNumber,
            email: email
        };
            set(ref(db, `/user/${user.uid}`), storeUserInformation)
            // .then(() => auth.signOut()) // Sign out after saving data
            // .then(() => navigate("/login")); // Redirect to login
        })
            .catch((error) => {
            alert(error.message);
            setEmail("");
            setPassword("");
            setName("");
            setUsername("");
        });
    }

        
    return (
        <div className="flex justify-center items-center w-full h-auto mt-8">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] max-w-2xl flex flex-col items-center gap-8 p-8 bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-2xl">
                <div className="flex flex-col items-center">
                    <img src={pawPrint} alt="Paw print logo" className="w-16 h-16 z-100" />
                    <div className="flex flex-col gap-1 items-center">
                        <p className="text-4xl sm:text-5xl font-semibold">Welcome to</p>
                        <p className="text-4xl sm:text-5xl font-bold text-[#A60530]">SafePaws</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-[80%] md:w-[70%]">
                    <p className="text-base sm:text-lg text-center">To help all our pet owners in this community, even you, by joining us. </p>
                    <div>
                        <p>Full Name</p>
                        <input type="text" placeholder="Full Name" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base"
                        onInput={(evt)=>verifyName(evt)} value={name}/>
                        <p className="text-[13px] text-red-600 mt-[5px] h-[10px]" id="errName"></p>
                    </div>
                    <div>
                        <p>Username</p>
                        <input type="text" placeholder="Username" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base"
                        onInput={(evt)=>verifyUsername(evt)} value={username}/>
                        <p className="text-[13px] text-red-600 mt-[5px] h-[10px]" id="errUsername"></p>
                    </div>
                    <div>
                        <p>Contact Number</p>
                        <input type="email" placeholder="Contact Number" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base"
                        onInput={(evt)=>verifyContactNumber(evt)} value={contactNumber}/>
                        <p className="text-[13px] text-red-600 mt-[5px] h-[10px]" id="errContactNumber"></p>
                    </div>

                    <div>
                        <p>Email</p>
                        <input type="email" placeholder="Email" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base"
                        onInput={(evt)=>verifyEmail(evt)} value={email}/>
                        <p className="text-[13px] text-red-600 mt-[5px] h-[10px]" id="errEmail"></p>
                    </div>

                    <div>
                        <p>Password</p>
                        <input type="password" placeholder="Password" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base"
                        onInput={(evt)=>verifyPassword(evt)} value={password}/>
                        <p className="text-[13px] text-red-600 mt-[5px] h-[10px]" id="errPassword"></p>
                    </div>
                    
                    <div className="block w-full mt-2">
                    {email && name && username && password ? (
                    <button
                    onClick={registerUser}
                    className="block w-full text-center text-xl sm:text-2xl font-semibold bg-[#A60530] text-[#F2C879] py-2 rounded-full uppercase cursor-pointer"> 
                    Sign Up
                    </button>
                    ) : (
                    <button onClick={registerUser}
                    disabled
                    className="block w-full text-xl sm:text-2xl font-semibold bg-[#7a0424] text-[#F2C879] py-2 rounded-full uppercase cursor-not-allowed"
                    >
                    Sign Up
                    </button>
                    )}
                    </div>

                    <div className="flex justify-center gap-1">
                        <p>Already have an account?</p>
                        <Link to="/login" className="cursor-pointer hover:text-[#A60530]">Sign-in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;