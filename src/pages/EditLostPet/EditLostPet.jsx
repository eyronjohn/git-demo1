import pawPrintLogo from '../../assets/paw-print 4.png'
import happyDogCat from '../../assets/—Pngtree—happy dog and cat with_15913340 2.png'
import EditLostPetForm from '../../components/EditLostPetForm/EditLostPetForm';

function EditLostPet() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-auto mt-8">
            <div className="flex flex-col items-center gap-8 p-8 w-full bg-[rgba(255,255,255,0.21)] rounded-3xl shadow-lg">
                <div className="w-full h-auto flex justify-between items-center bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
                    <div className="flex flex-col px-4 py-2 gap-2 w-2/3">
                        <div className="flex items-center tracking-tighter">
                            <p className="text-6xl font-extrabold text-[#A60530]">SafeP</p>
                            <div className="w-16 h-16 rotate-12 relative">
                                <img src={pawPrintLogo} alt="" className="w-full h-full absolute bottom-[-27px]" />
                            </div>
                            <p className="text-6xl font-extrabold text-[#A60530]">ws</p>
                        </div>
                        <p className='font-semibold'>Reuniting hearts, one paw at a time.</p>
                    </div>
                    <div className="w-1/5 h-34 flex justify-center items-center z-100">
                        <img src={happyDogCat} alt="Happy dog & cat" className="w-full h-full" />
                    </div>
                </div>
                <div className="w-full h-auto flex justify-center items-center">
                    <div className="flex flex-col justify-center gap-6 text-center">
                        <p className='text-3xl sm:text-4xl font-bold text-[#A60530] text-center'>Edit your Reported Lost Pet</p>
                        <div className='px-8 py-2 bg-[rgba(255,255,255,0.21)] p-4 rounded-full border-white border'>
                            <p className='text-md sm:text-lg text-[#80543D]'>Let’s help our fellow pet owners in our community. It would mean a lot to them!</p>
                        </div>
                    </div>
                </div>
                <EditLostPetForm />
            </div>
        </div>
    )
}

export default EditLostPet;