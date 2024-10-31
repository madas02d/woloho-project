import { useState, useRef } from "react";
import './Header.css';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from "@heroicons/react/16/solid";// Optional: Heroicons for burger and close icons

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false); // New state for burger menu

    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
    };

    const handleDropdownMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <nav className="bg-black p-8">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white hover:text-yellow-200 text-4xl font-bold">WOLOHO</a>

                {/* Burger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleBurgerMenu} className="bg-black text-white focus:outline-none">
                        {isBurgerOpen ? (
                            <XIcon className="w-6 h-6" /> // Close icon (optional)
                        ) : (
                            <MenuIcon className="w-6 h-6" /> // Burger icon (optional)
                        )}
                    </button>
                </div>

                {/* Desktop Menu and Mobile Dropdown Menu */}
                <ul className={`md:flex md:space-x-4 items-center ${isBurgerOpen ? 'block' : 'hidden'} md:block`} id="navMenu">
                    {/* Dropdown Menu */}
                    <li
                        className="relative underline-hover"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="#" className="text-white hover:text-yellow-200 relative underline-hover text-xl">Create an ad</a>
                        {isDropdownOpen && (
                            <div
                                className="absolute left-0 mt-8 w-40 bg-white rounded shadow-lg"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <div className="flex">
                                    <img className="w-6 h-6 m-2 rotate-180" src="/triangle.png" alt="" />
                                    <a href="#" className="block px-4 py-2 text-black hover:text-black ">Wordler</a>
                                </div>
                                <div className="flex">
                                    <img className="w-6 h-6 m-2" src="/round.png" alt="" />
                                    <a href="#" className="block px-4 py-2 text-black hover:text-black">love letter</a>
                                </div>
                                <div className="flex">
                                    <img className="w-6 h-6 m-2" src="/stop.png" alt="" />
                                    <a href="#" className="block px-4 py-2 text-black hover:text-black ">home letter</a>
                                </div>
                            </div>
                        )}
                    </li>
                    <li><a href="#" className="text-white hover:text-yellow-200 relative underline-hover text-xl">letter received</a></li>
                    <li><a href="#" className="text-white hover:text-yellow-200 relative underline-hover text-xl">Our team</a></li>
                    <li><a href="#" className="text-white hover:text-yellow-200 relative underline-hover text-xl">FAQ</a></li>
                </ul>
            </div>
        </nav>
    );
}
import { FolderMinusIcon } from "@heroicons/react/24/outline";

export default Header;
