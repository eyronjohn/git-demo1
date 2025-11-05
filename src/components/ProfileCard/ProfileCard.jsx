import { Link } from "react-router";

function ProfileCard() {
    return (
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] flex flex-col items-center gap-2 p-8 bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-lg z-100">
            <div className="flex flex-col items-center">
                <p className="text-4xl sm:text-5xl font-bold text-[#A60530]">User Profile</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="w-32 sm:w-36 h-32 sm:h-36">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className=" w-full h-full rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center text-lg">
                    <p>Full Name:</p>
                    <p>Username:</p>
                    <p>Email</p>
                    <p>Contact Number</p>
                    <p>Password</p>
                    <p>Total of Reported Lost Pets:</p>
                    <p>Total of Reported Found Pets:</p>
                </div>
                <div>
                    <Link to="/editprofile" className="px-12 py-2 text-xl font-bold text-[#A60530] border border-white bg-[rgba(244,244,244,0.12)] rounded-full shadow-lg cursor-pointer hover:bg-[rgba(204,204,204,0.12)]">Edit Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;