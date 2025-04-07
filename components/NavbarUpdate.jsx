"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/1.png";
import { FaBars, FaTimes, FaUser, FaChevronDown, FaShoppingBag, FaHome } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { signOut, useSession } from 'next-auth/react';
import defaultImage from "@/assets/images/profile.png";

export const metadata = {
    title: "Toronto Sauna Co.",
    description: "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
    keywords: "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [saunasDropdownOpen, setSaunasDropdownOpen] = useState(false);
    const [tubsDropdownOpen, setTubsDropdownOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);
    const { data: session } = useSession();
    const profileImage = session?.user?.image || defaultImage;

    const handleDesktopHover = (dropdown, open) => {
        if (dropdown === 'saunas') {
            setSaunasDropdownOpen(open);
            setTubsDropdownOpen(false);
        } else if (dropdown === 'tubs') {
            setTubsDropdownOpen(open);
            setSaunasDropdownOpen(false);
        }
    };

    // Close dropdown when item is selected
    const closeDropdown = () => {
        setSaunasDropdownOpen(false);
        setTubsDropdownOpen(false);
        setMenuOpen(false); // Also close mobile menu if open
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest(".dropdown")) {
                setSaunasDropdownOpen(false);
                setTubsDropdownOpen(false);
            }
        };
        document.addEventListener("click", closeDropdown);
        return () => document.removeEventListener("click", closeDropdown);
    }, []);

    return (
        <header className="sticky top-0 py-4 lg:py-6 shadow-md shadow-black/85 min-h-[80px] lg:min-h-[200px] bg-white z-50">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/Print_Hudson-44.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-0 relative z-10">
                {/* Logo */}
                <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 lg:static lg:translate-x-0 z-20">
                    <Link href="/" className="block w-36 h-36 lg:w-48 lg:h-48">
                        <Image 
                            src={logo} 
                            alt="Toronto Sauna Co" 
                            width={400}
                            height={400}
                            priority={true}
                            className="object-contain w-full h-full"
                        />
                    </Link>
                </div>

                {/* Website Name */}
                <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-5 text-white text-xl font-bold">
                    <Link href="/" className="flex items-center gap-x-2">
                        <div className="flex items-center gap-x-2">
                            <h1 className="font-atkinson text-2xl md:text-4xl text-white border-4 border-white p-2 md:p-4 rounded-none">
                                The Toronto Sauna Co.
                            </h1>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="btn btn-outline flex items-center gap-4 px-6 py-2 border border-white rounded-xl transition-colors">
                    <div className="relative flex items-center gap-8 text-white">
                        <div className="relative">
                            <FaShoppingBag className="text-xl w-7 h-7" />
                            <span className="absolute -top-[4px] -right-2 z-10 bg-green-500 text-white font-semibold rounded-xl w-5 h-5 flex items-center justify-center text-sm border border-white">
                                {!cartItems ? '0' : cartItems.length}
                            </span>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    className="h-8 w-8 rounded-full"
                                    src={profileImage}
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                        {isProfileMenuOpen && (
                            <div
                                id="user-menu"
                                className="absolute left-12 top-10 z-10 mt-2 w-36 md:right-10 md:top-10 md:w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ease-in duration-500"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabIndex="-1"
                                onClick={() => setIsProfileMenuOpen(false)}
                            >
                                <Link
                                    href="/signin"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="user-menu-item-0"
                                >
                                    <span className='font-bold'>Sign In</span>
                                </Link>
                                <Link
                                    href="/orders"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="user-menu-item-2"
                                >
                                    View Orders
                                </Link>
                                <button
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    onClick={() => {
                                        setIsProfileMenuOpen(false);
                                        signOut();
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="hidden md:hidden text-gray-800 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`z-20 fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-6 transition-all duration-300 ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden`}>
                <ul className="flex flex-col gap-4 text-gray-800 text-lg mb-32">
                    <div className="flex justify-center items-center">
                        {/* Close Hamburger Icon */}
                        <button className="text-gray-800 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                            <FaHome className="text-2xl" />
                        </button>
                    </div>
                    <NavItem href="/" label="Home" onClick={() => setMenuOpen(false)} />

                    {/* Mobile Dropdown */}
                    <li className="dropdown">
                        <button 
                            className="flex justify-between items-center gap-24 text-gray-800 hover:text-blue-600 transition"
                            onClick={() => setSaunasDropdownOpen(!saunasDropdownOpen)}
                        >
                            <span>Saunas</span>
                            <FaChevronDown className="w-4 h-4" />
                        </button>
                        {saunasDropdownOpen && (
                            <ul className="pl-6 mt-2 space-y-2">
                                <DropdownItem href="/saunas/cube" label="Cube Saunas" onClick={() => { setSaunasDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/saunas/luna" label="Luna Saunas" onClick={() => { setSaunasDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/saunas/barell" label="Barrel Saunas" onClick={() => { setSaunasDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/saunas/canadian-timber" label="Canadian Timber" onClick={() => { setSaunasDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/saunas/indoor" label="Indoor Saunas" onClick={() => { setSaunasDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/showers/" label="Outdoor Showers" onClick={() => { setSaunasDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                            </ul>
                        )}
                    </li>
                    <li className="dropdown">
                        <button 
                            className="flex justify-between items-center gap-24 text-gray-800 hover:text-blue-600 transition"
                            onClick={() => setTubsDropdownOpen(!tubsDropdownOpen)}
                        >
                            <span>Hot & Cold Tubs</span>
                            <FaChevronDown className="w-4 h-4" />
                        </button>
                        {tubsDropdownOpen && (
                            <ul className="pl-6 mt-2 space-y-2">
                                <DropdownItem href="/cold-plunge/" label="Cold Tubs" onClick={() => { setTubsDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/hot-tub/" label="Hot Tubs" onClick={() => { setTubsDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                               
                            </ul>
                        )}
                    </li>
                    <NavItem href="/quote" label="Get a Quote" onClick={() => setMenuOpen(false)} />
                    <NavItem href="/accessories" label="Accessories" onClick={() => setMenuOpen(false)} />
                </ul>
                <span>copyright @ 2024</span>
            </nav>

            {/* Desktop Navigation */}
            <nav className="font-nunito hidden lg:flex absolute lg:left-[51.25%] transform -translate-x-1/2 top-16 bg-white shadow-md shadow-black rounded-2xl px-10 py-4 mt-36 backdrop-blur-sm">
                <ul className="flex gap-x-6 text-gray-800 text-base md:mx-auto">
                    <NavItem href="/" label="Home" />

                    {/* Desktop Dropdown */}
                    <li 
                        className="relative dropdown"
                        onMouseEnter={() => handleDesktopHover('saunas', true)}
                        onMouseLeave={() => handleDesktopHover('saunas', false)}
                    >
                        <button 
                            className="flex items-center gap-2 font-nunito text-md hover:text-blue-600 transition"
                        >
                            <span>Saunas</span>
                        </button>
                        {saunasDropdownOpen && (
                            <ul className="font-atkinson absolute z-[-10] left-0 mt-[-2] w-48 bg-white/95 shadow-md shadow-black rounded-2xl px-4 py-2 backdrop-blur-sm">
                                <DropdownItem href="/saunas/cube" label="Cube Saunas" onClick={closeDropdown} />
                                <DropdownItem href="/saunas/luna" label="Luna Saunas" onClick={closeDropdown} />
                                <DropdownItem href="/saunas/barell" label="Barrel Saunas" onClick={closeDropdown} />
                                <DropdownItem href="/saunas/canadian-timber" label="Canadian Timber" onClick={closeDropdown} />
                                <DropdownItem href="/saunas/indoor" label="Indoor Saunas" onClick={closeDropdown} />
                                <DropdownItem href="/showers" label="Outdoor Showers" onClick={closeDropdown} />
                               
                            </ul>
                        )}
                    </li>
                    <li 
                        className="relative dropdown"
                        onMouseEnter={() => handleDesktopHover('tubs', true)}
                        onMouseLeave={() => handleDesktopHover('tubs', false)}
                    >
                        <button 
                            className="flex items-center gap-2 font-nunito text-md hover:text-blue-600 transition"
                        >
                            <span>Hot & Cold Tubs</span>
                        </button>
                        {tubsDropdownOpen && (
                            <ul className="font-atkinson absolute z-[-10] left-0 mt-[-2] w-48 bg-white/95 shadow-md shadow-black rounded-2xl px-4 py-2 backdrop-blur-sm">
                                <DropdownItem href="/cold-plunge/" label="Cold Tubs" onClick={closeDropdown} />
                                <DropdownItem href="/hot-tub/" label="Hot Tubs" onClick={closeDropdown} />
                                {/* <DropdownItem href="/showers/" label="Outdoor Showers" onClick={closeDropdown} /> */}
                            </ul>
                        )}
                    </li>
                    <NavItem href="/quote" label="Get a Quote" className="font-atkinson" />
                    <NavItem href="/accessories" label="Accessories" className="font-atkinson" />
                </ul>
            </nav>
        </header>
    );
}

// Reusable Navigation Item Component
function NavItem({ href, label, onClick }) {
    return (
        <li>
            <Link 
                href={href} 
                className="hover:text-blue-600 transition"
                onClick={onClick}
            >
                {label}
            </Link>
        </li>
    );
}

// Reusable Dropdown Item Component
function DropdownItem({ href, label, onClick }) {
    return (
        <li className="border-b last:border-none">
            <Link 
                href={href} 
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={onClick}
            >
                {label}
            </Link>
        </li>
    );
}