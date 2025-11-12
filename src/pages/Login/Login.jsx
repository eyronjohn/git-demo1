import { Link, useNavigate } from "react-router";
import pawPrint from '../../assets/paw-print 4.png'
import { useState } from "react";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [responseMessage, setResponseMessage] = useState("");

    function loginUser() {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            setTimeout(() => {
                navigate("/homepage")
            }, 3000);
        }).catch((error) => {
            switch (error.code) {
                case "auth/invalid-email":
                    setResponseMessage("Invalid email address format.");
                    break;

                case "auth/user-disabled":
                    setResponseMessage(
                        "This account has been disabled. Please contact support."
                    );
                    break;

                case "auth/user-not-found":
                    setResponseMessage("No account found with this email.");
                    break;

                case "auth/wrong-password":
                    setResponseMessage("Invalid user credentials.");
                    break;

                case "auth/too-many-requests":
                    setResponseMessage(
                        "Too many failed login attempts. Please try again later."
                    );
                    break;

                default:
                    setResponseMessage("Invalid user credentials.");
                    break;
            }

            //alert(error.message);
            console.error("Oops:", error.message);
            //setEmail("");
            setPassword("");
        })
    }

    return (
        <div className="flex justify-center items-center w-full h-auto mt-8">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] max-w-2xl flex flex-col items-center gap-8 p-8 bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-2xl">
                <div className="flex flex-col items-center">
                    <img src={pawPrint} alt="Paw print logo" className="w-16 h-16 z-100" />
                    <p className="text-4xl sm:text-5xl text-black font-semibold">Welcome back to</p>
                    <p className="text-4xl sm:text-5xl font-bold text-[#A60530]">SafePaws!</p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-[80%] md:w-[70%]">
                    <p className="text-base sm:text-lg text-center">To help all our pet owners in this community, even you, by joining us.</p>
                    <div>
                        {responseMessage && (
                            <div className="mb-4 px-4 py-2 text-center font-semibold rounded-sm bg-[rgba(255,255,255,0.21)] text-[#A60530]">
                                {responseMessage}
                            </div>
                        )}
                        <p>Email</p>
                        <input type="text" placeholder="Enter your email" value={email} className="border rounded-full px-6 py-2 w-full text-sm sm:text-base"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" placeholder="Enter your password" value={password} className="border rounded-full px-6 py-2 w-full text-sm sm:text-base"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button onClick={loginUser}
                        className="block w-full text-center text-xl sm:text-2xl font-semibold bg-[#A60530] text-[#F2C879] py-2 rounded-full uppercase cursor-pointer">
                        Sign In
                    </button>

                    <div className="flex justify-center">
                        <Link to="/forgotpassword" className="cursor-pointer hover:text-[#A60530]">Forgot Password</Link>
                    </div>
                    <div className="flex justify-center gap-1">
                        <p>Don't have an account yet?</p>
                        <Link to="/register" className="cursor-pointer hover:text-[#A60530]">Sign-up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;