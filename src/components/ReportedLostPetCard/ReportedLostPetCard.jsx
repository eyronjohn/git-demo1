function ReportedLostPetCard() {
    return (
        <div className="w-60 h-auto flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
            <div className="flex flex-col gap-6 items-center">
                <div className="w-24 h-24">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold">Pet Name</p>
                    <p className="font-semibold">Species</p>
                    <p className="font-semibold">Breed</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-8 py-2 text-[#A60530] bg-[#FFCC6D] rounded-full">Edit</button>
                    <button className="px-8 py-2 text-[#F2C879] bg-[#A60530] rounded-full">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ReportedLostPetCard;