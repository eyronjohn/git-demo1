import ProfileCard from "../../components/ProfileCard/ProfileCard";

function Profile() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-auto mt-8">
            <ProfileCard/>
            <button className="px-10 py-4 text-xl font-bold text-[#A60530] uppercase border border-white bg-[rgba(244,244,244,0.12)] rounded-full shadow-lg cursor-pointer hover:bg-[rgba(204,204,204,0.12)] z-100">Back</button>
        </div>
    )
}

export default Profile;