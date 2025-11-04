import { Link } from "react-router";
import pawPrint from '../../assets/paw-print 4.png'

function Register() {
    return (
        <div className="flex justify-center items-center w-full h-auto mt-8">
            <div className="flex flex-col items-center gap-8 p-8 w-[50%] bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-lg">
                <div className="flex flex-col items-center">
                    <img src={pawPrint} alt="Paw print logo" className="w-16 h-16" />
                    <div className="flex gap-2">
                        <p className="text-5xl font-semibold">Welcome to</p>
                        <h1 className="text-5xl font-bold text-[#A60530]">SafePaws</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[60%]">
                    <p className="text-lg text-center">To help all our pet owners in this community, even you, by joining us. </p>
                    <div>
                        <p>Email</p>
                        <input type="email" placeholder="Enter your email" className="border rounded-full px-6 py-2 w-full" />
                    </div>
                    <div>
                        <p>Full Name</p>
                        <input type="text" placeholder="Enter your full name" className="border rounded-full px-6 py-2 w-full" />
                    </div>
                    <div>
                        <p>Username</p>
                        <input type="text" placeholder="Enter your username" className="border rounded-full px-6 py-2 w-full" />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="text" placeholder="Enter your password" className="border rounded-full px-6 py-2 w-full" />
                    </div>
                    <button className="text-2xl font-semibold bg-[#A60530] text-[#F2C879] py-2 mt-8 rounded-full uppercase cursor-pointer">Sign Up</button>
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