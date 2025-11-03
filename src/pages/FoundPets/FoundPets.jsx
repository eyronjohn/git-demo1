import happyDogCat from '../../assets/—Pngtree—happy dog and cat with_15913340 2.png'
import FoundPetCard from "../../components/FoundPetCard/FoundPetCard";

function FoundPets() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-auto mt-8">
            <div className="flex flex-col items-center gap-8 p-8 w-full bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-lg">
                <div className="w-full h-44 flex justify-between items-center bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                    <div className="flex flex-col px-4 py-2 gap-2 w-2/3">
                        <h1 className="text-6xl font-extrabold text-[#A60530]">Found Pets</h1>
                        <p>Here you can see all the pets that have been reported missing. Check the list to see if you’ve spotted any of them, or learn more about each pet by tapping on their details. </p>
                    </div>
                    <div className="w-1/5 h-44 flex justify-center items-center">
                        <img src={happyDogCat} alt="Happy dog & cat" className="w-full h-full" />
                    </div>
                </div>
                <div className="w-[80%] h-auto flex justify-center items-center ">
                    <div className="flex flex-wrap justify-center gap-6">

                        <FoundPetCard/>
                        <FoundPetCard/>
                        <FoundPetCard/>
                        <FoundPetCard/>

                        <FoundPetCard/>
                        <FoundPetCard/>
                        <FoundPetCard/>
                        <FoundPetCard/>
                        
                    </div>
                </div>
            </div>
            <button className="px-10 py-4 text-xl font-bold text-[#A60530] border border-white bg-[rgba(244,244,244,0.12)] rounded-full shadow-lg cursor-pointer hover:bg-[rgba(204,204,204,0.12)]">Report a Lost Pet</button>
        </div>
    )
}

export default FoundPets;