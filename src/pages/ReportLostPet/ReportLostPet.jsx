import Header2 from '../../components/Header2/Header2';
import ReportLostPetForm from '../../components/ReportLostPetForm/ReportLostPetForm';

function ReportLostPet() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-auto mt-8">
            <div className="flex flex-col items-center gap-8 p-8 w-full bg-[rgba(255,255,255,0.21)] border border-white rounded-3xl shadow-lg z-100">
                <Header2/>
                <div className="w-full h-auto flex justify-center items-center">
                    <div className="flex flex-col justify-center gap-6 text-center">
                        <p className='text-4xl font-bold text-[#A60530] text-center'>Report a Lost Pet</p>
                        <div className='px-8 py-2 bg-[rgba(255,255,255,0.21)] p-4 rounded-full border-white border'>
                            <p className='text-md sm:text-lg text-[#80543D]'>Let’s help our fellow pet owners in our community. It would mean a lot to them!</p>
                        </div>
                    </div>
                </div>
                <ReportLostPetForm />
            </div>
        </div>
    )
}

export default ReportLostPet;