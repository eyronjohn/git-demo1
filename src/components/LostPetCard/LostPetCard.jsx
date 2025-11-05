import { Link } from "react-router";
function LostPetCard() {
    return (
        <div className="w-full sm:w-56 md:w-60 h-60 flex justify-center py-2 bg-[rgba(255,255,255,0.21)] border border-white rounded-xl shadow-md z-100">
            <div className="flex flex-col gap-2 justify-between items-center">
                <div className="w-24 h-24">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col mt-2">
                    <p className="font-semibold">Pet Name</p>
                    <p className="font-semibold">Species</p>
                    <p className="font-semibold">Breed</p>
                </div>
                <div className="flex items-center gap-2">
                    <Link className="text-sm cursor-pointer hover:text-[#A60530]">Futher details <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default LostPetCard;