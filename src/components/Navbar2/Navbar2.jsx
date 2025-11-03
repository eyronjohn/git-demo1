import { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Navbar2() {
    const [openDropdown, setOpenDropdown] = useState(false)
    return (
        <>
            <div className="w-full h-12 py-6 flex items-center border border-[#F4F4F4] rounded-full shadow-lg bg-[rgba(244,244,244,0.12)]">
                <div className="w-[90%] mx-auto flex justify-between items-center">
                    <p className="text-lg font-bold text-[#A60530]">SafePaws</p>
                    {/* <p className="text-lg font-semibold">Pets</p> */}
                    <button className="text-lg font-semibold cursor-pointer" onClick={()=>setOpenDropdown((prev) => !prev)}>Pet <i class="fa-solid fa-caret-down"></i></button>
                    {openDropdown && (
                        <DropdownMenu />
                    )}
                    <p className="text-lg font-semibold">About</p>
                    <p className="text-lg font-semibold">Contact</p>
                    <p className="text-lg font-semibold text-[#A60530]">Sign-In</p>
                </div>
            </div>
        </>
    )
}

export default Navbar2;