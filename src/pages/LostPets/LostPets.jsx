import happyDogCat from '../../assets/—Pngtree—happy dog and cat with_15913340 2.png'
import LostPetCard from "../../components/LostPetCard/LostPetCard";

function LostPets() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-auto mt-8">
            <div className="flex flex-col items-center gap-8 p-8 w-full bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-lg z-100">
                <div className="w-full h-auto flex justify-between items-center bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md relative">
                    <div className="flex flex-col px-4 py-2 gap-2 w-2/3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#A60530]">Lost Pets</h1>
                        <p className='text-md sm:text-lg'>Here you can see all the pets that have been reported missing. Check the list to see if you’ve spotted any of them, or learn more about each pet by tapping on their details. </p>
                    </div>
                    <div className="w-1/4 md:w-1/5 h-44 md:h-32 flex justify-center items-center z-100 absolute right-0 bottom-0">
                        <img src={happyDogCat} alt="Happy dog & cat" className="w-full h-full " />
                    </div>
                </div>
                <div className="w-full sm:w-[90%] h-auto flex justify-center items-center ">
                    <div className="flex flex-wrap justify-center gap-6">
                        <LostPetCard />
                        <LostPetCard />
                        <LostPetCard />
                        <LostPetCard />

                        <LostPetCard />
                        <LostPetCard />
                        <LostPetCard />
                        <LostPetCard />

                    </div>
                </div>
            </div>
            <button className="px-10 py-4 text-xl font-bold text-[#A60530] border border-white bg-[rgba(244,244,244,0.12)] rounded-full shadow-lg cursor-pointer hover:bg-[rgba(204,204,204,0.12)] z-100">Report a Lost Pet</button>
        </div>
    )
}

export default LostPets;