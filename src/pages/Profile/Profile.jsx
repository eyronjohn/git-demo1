import { Link } from "react-router";

function Profile() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-auto mt-8">
            <div className="flex flex-col items-center gap-8 p-8 w-[60%] bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-lg">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-bold text-[#A60530]">User Profile</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 w-[60%]">
                    <div className="w-36 h-36">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className=" w-full h-full rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>Full Name:</p>
                        <p>Username:</p>
                        <p>Email</p>
                        <p>Contact Number</p>
                        <p>Password</p>
                        <p>Total of Reported Lost Pets:</p>
                        <p>Total of Reported Found Pets:</p>
                    </div>
                    <div>
                        <button className="px-12 py-2 text-xl font-bold text-[#A60530] border border-white bg-[rgba(244,244,244,0.12)] rounded-full shadow-lg cursor-pointer hover:bg-[rgba(204,204,204,0.12)]">Edit Profile</button>
                    </div>
                </div>
            </div>
            <button className="px-10 py-4 text-xl font-bold text-[#A60530] uppercase border border-white bg-[rgba(244,244,244,0.12)] rounded-full shadow-lg cursor-pointer hover:bg-[rgba(204,204,204,0.12)]">Back</button>
        </div>
    )
}

export default Profile;