import pawPrintLogo from '../../assets/paw-print 4.png'
import happyDogCat from '../../assets/—Pngtree—happy dog and cat with_15913340 2.png'

function Header2() {
    return (
        <div className="w-full h-auto flex justify-between items-center bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md">
            <div className="flex flex-col px-4 w-2/3">
                <div className="flex items-center tracking-tighter">
                    <p className="text-5xl sm:text-6xl font-extrabold text-[#A60530]">SafeP</p>
                    <img src={pawPrintLogo} alt="Paw print logo" className="w-10 h-10 sm:w-12 sm:h-12 rotate-12 translate-y-2 sm:translate-y-3" />
                    <p className="text-5xl sm:text-6xl font-extrabold text-[#A60530]">ws</p>
                </div>
                <p className='text-md sm:text-lg font-semibold'>Reuniting hearts, one paw at a time.</p>
            </div>
            <div className="w-1/4 sm:w-1/5 h-32 flex justify-center items-center z-100">
                <img src={happyDogCat} alt="Happy dog & cat" className="w-full h-full" />
            </div>
        </div>
    )
}

export default Header2;