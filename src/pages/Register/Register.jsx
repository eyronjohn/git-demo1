import { Link } from "react-router";
import pawPrint from '../../assets/paw-print 4.png'

function Register() {
    return (
        <div className="flex justify-center items-center w-full h-auto mt-8">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] max-w-2xl flex flex-col items-center gap-8 p-8 bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-lg">
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
                        <p>Email</p>
                        <input type="email" placeholder="Enter your email" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base" />
                    </div>
                    <div>
                        <p>Full Name</p>
                        <input type="text" placeholder="Enter your full name" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base" />
                    </div>
                    <div>
                        <p>Username</p>
                        <input type="text" placeholder="Enter your username" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base" />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="text" placeholder="Enter your password" className="border rounded-full px-6 py-2 w-full text-sm sm:text-base" />
                    </div>
                    <button className="text-xl sm:text-2xl font-semibold bg-[#A60530] text-[#F2C879] py-2 mt-8 rounded-full uppercase cursor-pointer">Sign Up</button>
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