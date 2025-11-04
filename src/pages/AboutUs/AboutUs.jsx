import pawPrint from '../../assets/paw-print 4.png'

function AboutUs() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-auto mt-8">
            <div className="flex flex-col items-center gap-6 p-8 w-[60%] border border-[#F5F5F5] bg-[rgba(255,255,255,0.21)] rounded-3xl">
                <h1 className="text-5xl font-extrabold text-[#A60530]">About Us</h1>
                <div className="flex flex-col justify-center items-center gap-6 text-center">
                    <div className="flex">
                        <p className="text-xl">At SafePaws, we believe that every pet deserves a safe return home. Our system was created to help pet owners and rescuers work together in finding lost and found pets across the Philippines.</p>
                    </div>
                    <p className="text-xl">Through a simple, community-driven platform, users can report missing or found animals, share details, and communicate directly to reunite pets with their rightful families.</p>
                    <p className="text-xl">SafePaws aims to promote compassion, responsibility, and unity among pet lovers, making sure that no paw is ever left behind.</p>
                    <div className="flex gap-1 font-bold text-2xl">
                        <p>“Reuniting</p>
                        <div className="flex">
                            <p className="text-[#A60530]">hearts</p>
                            <span>,</span>
                        </div>
                        <p>one paw at a time."</p>
                    </div>
                    <img src={pawPrint} alt="Paw print logo" className="w-16 h-16" />
                </div>
            </div>
            <button className="px-10 py-4 text-xl font-bold text-[#A60530] uppercase border border-white bg-[rgba(244,244,244,0.12)] rounded-full shadow-lg cursor-pointer hover:bg-[rgba(204,204,204,0.12)]">Back</button>
        </div>
    )
}

export default AboutUs;