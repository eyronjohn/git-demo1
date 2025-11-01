import { Link } from "react-router";

function ReportedLostPets() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-auto mt-8">
            <div className="flex flex-col items-center gap-8 p-8 w-full bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-lg">
                <div className="w-full h-44 flex justify-between items-center bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                    <div className="flex flex-col px-4 py-2 gap-2 w-2/3">
                        <h1 className="text-6xl font-extrabold text-[#A60530]">Your Reported Lost Pets</h1>
                        <p>This page shows all the pets you’ve reported as lost. You can view their details, update information, or delete a report. It helps you keep track of all your reports in one place.</p>
                    </div>
                    <div className="w-1/5 h-44">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/070/053/012/small/dog-and-cat-in-studio-shot-gazing-at-the-camera-with-curiosity-png.png" alt="" className="w-full h-full" />
                    </div>
                </div>
                <div className="w-[80%] h-auto flex justify-center items-center ">
                    <div className="flex flex-wrap justify-center gap-6">

                        <div className="w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-24 h-24">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full"/>
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

                        <div className="w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-24 h-24">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full"/>
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

                        <div className="w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-24 h-24">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full"/>
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

                        <div className="w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-24 h-24">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full"/>
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

                        <div className="w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-24 h-24">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full"/>
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

                        <div className="w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-24 h-24">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full"/>
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

                        <div className="w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-24 h-24">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full"/>
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

                        <div className="w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="w-24 h-24">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full"/>
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

                    </div>
                </div>
            </div>
            <button className="px-10 py-4 text-xl font-bold text-[#A60530] border border-white bg-[rgba(244,244,244,0.12)] rounded-full shadow-lg cursor-pointer hover:bg-[rgba(204,204,204,0.12)]">Report a Lost Pet</button>
        </div>
    )
}

export default ReportedLostPets;