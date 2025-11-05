import happyDogCat from '../../assets/—Pngtree—happy dog and cat with_15913340 2.png'

function Header({title, subtitle}) {
    return (
        <div className="w-full h-auto flex justify-between items-center bg-[rgba(255,255,255,0.21)] rounded-xl shadow-md relative">
            <div className="flex flex-col px-4 py-2 gap-2 w-2/3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#A60530]">{title}</h1>
                <p className='text-md sm:text-lg'>{subtitle}</p>
            </div>
            <div className="w-1/4 md:w-1/5 h-44 md:h-32 flex justify-center items-center z-100 absolute right-0 bottom-0">
                <img src={happyDogCat} alt="Happy dog & cat" className="w-full h-full " />
            </div>
        </div>
    )
}

export default Header;