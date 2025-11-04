import { Link } from "react-router";
import { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Navbar2() {
    const [openDropdown, setOpenDropdown] = useState(false)
    return (
        <>
            <div className="w-full h-12 py-6 flex items-center border border-[#F4F4F4] rounded-full shadow-lg bg-[rgba(244,244,244,0.12)]">
                <div className="w-[90%] mx-auto flex justify-between items-center">
                    <Link to="/" className="text-lg font-bold text-[#A60530]">SafePaws</Link>
                    {/* <p className="text-lg font-semibold">Pets</p> */}
                    <button className="text-lg font-semibold cursor-pointer" onClick={()=>setOpenDropdown((prev) => !prev)}>Pet <i className="fa-solid fa-caret-down"></i></button>
                    {openDropdown && (
                        <DropdownMenu />
                    )}
                    <Link to="/about" className="text-lg font-semibold">About</Link>
                    <Link to="/contactus" className="text-lg font-semibold">Contact</Link>
                    <Link to="/login" className="text-lg font-semibold text-[#A60530]">Sign-In</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar2;