import { Link, useLocation } from "react-router";
import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Navbar2() {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [user, setUser] = useState(null);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        setOpenDropdown(false);
    }, [location]);

    // close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <div className="w-full h-12 py-6 flex items-center border border-[#F4F4F4] rounded-full shadow-lg bg-[rgba(244,244,244,0.12)]">
            <div className="w-[90%] mx-auto flex justify-between items-center">
                <Link to="/" className="text-lg font-bold text-[#A60530] hover:underline">
                    SafePaws
                </Link>

                <div ref={dropdownRef} style={{ position: "relative" }}>
                    <button
                        className="text-lg font-semibold cursor-pointer"
                        onClick={() => setOpenDropdown((prev) => !prev)}
                    >
                        Pet <i className="fa-solid fa-caret-down"></i>
                    </button>
                    {openDropdown && <DropdownMenu />}
                </div>

                <Link to="/about" className="text-lg font-semibold hover:underline">
                    About
                </Link>
                <Link to="/contactus" className="text-lg font-semibold hover:underline">
                    Contact
                </Link>

                {user ? (
                    <div className="flex gap-2">
                        <Link to="/profile">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s"
                                alt="Profile"
                                className="w-9 h-9 rounded-full border-2 border-[#A60530] object-cover cursor-pointer"
                            />
                        </Link>
                        {/* <button
                            onClick={handleLogout}
                            className="text-lg text-[#A60530] font-semibold cursor-pointer hover:underline "
                        >
                            Logout
                        </button> */}
                    </div>
                ) : (
                    <Link to="/login" className="text-lg font-semibold text-[#A60530]">
                        Sign-In
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Navbar2;