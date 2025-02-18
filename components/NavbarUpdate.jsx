// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@/assets/images/1.png"
// import {  FaBars, FaTimes, FaUser, FaChevronDown, FaShoppingBag, FaHome } from "react-icons/fa";



// export default function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const shopping_count = 2;

//     const handleDesktopHover = (open) => {
//         setDropdownOpen(open);
//     };
// // Close dropdown when item is selected
// const closeDropdown = () => {
//     setDropdownOpen(false);
//     setMenuOpen(false); // Also close mobile menu if open
// };

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const closeDropdown = (e) => {
//             if (!e.target.closest(".dropdown")) {
//                 setDropdownOpen(false);
//             }
//         };
//         document.addEventListener("click", closeDropdown);
//         return () => document.removeEventListener("click", closeDropdown);
//     }, []);

//     return (
//         <header className=" relative py-6 lg:pt-8 lg:pb-14 shadow-lg min-h-[100px] lg:min-h-[300px]">
//         {/* Background Image with Overlay */}

//         <div className="absolute inset-0 z-0 ">
//                 <div className="absolute inset-0 bg-[url('/images/Print_Hudson-44.png')] bg-cover bg-center"></div>
//                 <div className="absolute inset-0 bg-black/65"></div>
//             </div>

//             <div className=" container mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-0 relative z-10">
//                 {/* Logo */}
//                 <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 lg:static lg:translate-x-0 z-20">
//                     <Link href="/" className="block w-48 h-48 lg:w-64 lg:h-64">
//                         <Image 
//                             src={logo} 
//                             alt="Toronto Sauna Co" 
//                             width={400}
//                             height={400}
//                             priority={true}
//                             className="object-contain w-full h-full "
//                         />
//                     </Link>
//                 </div>

//                 {/* Website Name */}
//                 <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-5 text-white text-xl font-bold">
//   <div className="flex items-center gap-x-2">
//     <h1 className="font-atkinson text-2xl md:text-6xl text-white border-4 border-white p-3 md:p-5 rounded-none">
//       The Toronto Sauna Co.
//     </h1>
//   </div>
// </div>
//             {/* Navigation */}
//                 <div className="btn btn-outline flex items-center gap-4 px-6 py-2 border border-white rounded-xl  transition-colors">
//                     <div className="relative flex items-center gap-8 text-white">
//                         <div className="relative">
//                         <FaShoppingBag className="text-xl w-7 h-7"  />
//                         <span className="absolute -top-[4px] -right-2 z-10 bg-green-500 text-white font-semibold rounded-xl w-5 h-5 flex items-center justify-center text-sm border border-white">
//                             {shopping_count}
//                         </span>
//                         </div>
//                         <FaUser className="text-xl w-7 h-7" />
//                     </div>
//                 </div>
                


//                 {/* Mobile Menu Button */}
//                 <button className="lg:hidden text-gray-800 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//                 <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
//                     {menuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//             </div>
           

//             {/* Mobile Navigation */}
//             <nav className={`z-20 fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-6 transition-all duration-300 ${
//                 menuOpen ? "translate-x-0" : "-translate-x-full"
//             } lg:hidden`}>
//                 {/*  */}
                
//             <ul className="flex flex-col gap-4 text-gray-800 text-lg">
//                     <div className="flex justify-center items-center ">
//                     {/* Close Hamburger Icon */}
                   
//                     <button className="text-gray-800 text-2xl" onClick={() => setMenuOpen(!menuOpen)}> <FaHome className="text-2xl" /></button>
//                     </div>
//                     <NavItem href="/" label="Home" />
                   
                    
//                     {/* Mobile Dropdown */}
//                     <li className="dropdown">
//                         <button 
//                             className="flex justify-between items-center gap-24 text-gray-800 hover:text-blue-600 transition"
//                             onClick={() => setDropdownOpen(!dropdownOpen)}
//                         >
//                            <Link href='/saunas'>Saunas</Link> 
//                              <FaChevronDown className="w-4 h-4"/>
//                         </button>
//                         {dropdownOpen && (
//                             <ul className="pl-6 mt-2 space-y-2">
//                                 <DropdownItem href="/saunas/cube" label="Cube Saunas" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
//                                 <DropdownItem href="/saunas/luna" label="Luna Saunas" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
//                                 <DropdownItem href="/saunas/barell" label="Barrell Saunas" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
//                                 <DropdownItem href="/saunas/canadian-timber" label="Canadian Timber" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
//                                 <DropdownItem href="/saunas/indoor" label="Indoor Saunas" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                
//                             </ul>
//                         )}
//                     </li>
//                     <NavItem href="#team" label="About Us" />
//                     <NavItem href="#appointment" label="Appointments" />
//                     <NavItem href="#contact" label="Contact Us" />
//                     <NavItem href="#blog" label="Blog" />
//                 </ul>
//             </nav>

//             {/* Desktop Navigation */}
//             <nav className="font-atkinson hidden lg:flex absolute left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-md shadow-black rounded-2xl px-10 py-4 mt-64 w-auto backdrop-blur-sm">
//                 <ul className="flex gap-x-6 text-gray-800 text-base ">
//                 {/* <ul className={`absolute left-0 mt-2 w-48 bg-white/95 shadow-md rounded-2xl px-4 py-2 transition-opacity duration-300 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}> */}
//                     <NavItem href="/" label="Home" />
                   
//                     {/* Desktop Dropdown */}
//                     <li 
//                         className="relative dropdown"
//                         onMouseEnter={() => handleDesktopHover(true)}
//                        onMouseLeave={() => handleDesktopHover(false)}
//                     >
//                         <button 
//                             className="flex items-center gap-2 font-atkinson text-md hover:text-blue-600 transition"
//                         >
//                              <Link href='/saunas'>Saunas</Link> 
//                             {/* <FaChevronDown /> */}
//                         </button>
//                         {dropdownOpen && (
//          <ul className="font-atkinson absolute z-[-10] left-0 mt-[-2] w-48 
//                    bg-white/95 shadow-md shadow-black 
//                    rounded-2xl px-4 py-2 backdrop-blur-sm">
//         <DropdownItem href="/saunas/cube" label="Cube Saunas" onClick={closeDropdown} />
//         <DropdownItem href="/saunas/luna" label="Luna Saunas" onClick={closeDropdown} />
//         <DropdownItem href="/saunas/barell" label="Barrell Saunas" onClick={closeDropdown} />
//         <DropdownItem href="/saunas/canadian-timber" label="Canadian Timber" onClick={closeDropdown} />
//         <DropdownItem href="/saunas/indoor" label="Indoor Saunas" onClick={closeDropdown} />
//         </ul>
// )}
//                     </li>
//                     <NavItem href="/accessories" label="Accessories" className="font-atkinson" />
//                     <NavItem href="/cold-plunge" label="Cold Plunge" className="font-atkinson" />
//                     <NavItem href="/quote" label="Get a Quote" className="font-atkinson" />
                    
//                 </ul>
//             </nav>
//         </header>
//     );
// }


// // Reusable Navigation Item Component
// function NavItem({ href, label }) {
//     return (
//         <li>
//             <Link href={href} className="hover:text-blue-600 transition">
//                 {label}
//             </Link>
//         </li>
//     );
// }

// // Reusable Dropdown Item Component
// function DropdownItem({ href, label, onClick }) {
//     return (
//         <li className="border-b last:border-none">
//             <Link 
//                 href={href} 
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={onClick}
//             >
//                 {label}
//             </Link>
//         </li>
//     );
// }





"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/1.png";
import { FaBars, FaTimes, FaUser, FaChevronDown, FaShoppingBag, FaHome } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const shopping_count = 2;

    const handleDesktopHover = (open) => {
        setDropdownOpen(open);
    };

    // Close dropdown when item is selected
    const closeDropdown = () => {
        setDropdownOpen(false);
        setMenuOpen(false); // Also close mobile menu if open
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest(".dropdown")) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", closeDropdown);
        return () => document.removeEventListener("click", closeDropdown);
    }, []);

    return (
        <header className="sticky top-0 py-4 lg:py-6 shadow-md shadow-black/85 min-h-[80px] lg:min-h-[200px] bg-white z-50">
            {/* Background Image with Overlay */}
            {/* <div className="absolute inset-0 z-0 bg-black/50"> */}
                {/* <div className="absolute inset-0 bg-[url('/images/Print_Hudson-44.png')] bg-cover bg-center"></div> */}
                {/* <div className="absolute inset-0 bg-black"></div> */}
            {/* </div> */}

            <div className="absolute inset-0 z-0 ">  
                               <div className="absolute inset-0 bg-[url('/images/Print_Hudson-44.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/70"></div>
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
                    <div className="flex items-center gap-x-2">
                        <h1 className="font-atkinson text-2xl md:text-4xl text-white border-4 border-white p-2 md:p-4 rounded-none">
                            The Toronto Sauna Co.
                        </h1>
                    </div>
                </div>

                {/* Navigation */}
                <div className="btn btn-outline flex items-center gap-4 px-6 py-2  border border-white rounded-xl transition-colors">
                    <div className="relative flex items-center gap-8 text-white">
                        <div className="relative">
                            <FaShoppingBag className="text-xl w-7 h-7" />
                            <span className="absolute -top-[4px] -right-2 z-10 bg-green-500 text-white font-semibold rounded-xl w-5 h-5 flex items-center justify-center text-sm border border-white">
                                {shopping_count}
                            </span>
                        </div>
                        <FaUser className="text-xl w-7 h-7" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden text-gray-800 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
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
                    <NavItem href="/" label="Home" />

                    {/* Mobile Dropdown */}
                    <li className="dropdown">
                        <button 
                            className="flex justify-between items-center gap-24 text-gray-800 hover:text-blue-600 transition"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <Link href='/saunas'>Saunas</Link> 
                            <FaChevronDown className="w-4 h-4" />
                        </button>
                        {dropdownOpen && (
                            <ul className="pl-6 mt-2 space-y-2">
                                <DropdownItem href="/saunas/cube" label="Cube Saunas" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/saunas/luna" label="Luna Saunas" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/saunas/barell" label="Barrell Saunas" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/saunas/canadian-timber" label="Canadian Timber" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                                <DropdownItem href="/saunas/indoor" label="Indoor Saunas" onClick={() => { setDropdownOpen(false); setMenuOpen(!menuOpen); }} />
                            </ul>
                        )}
                    </li>
                    <NavItem href="/cold-plunge" label="Cold Plunge" className="font-atkinson" />
                    <NavItem href="/quote" label="Get a Quote" className="font-atkinson" />
                    <NavItem href="/accessories" label="Accessories" className="font-atkinson" />
                </ul>
                <span>copyright @ 2024</span>
            </nav>

            {/* Desktop Navigation */}
            <nav className="font-atkinson hidden lg:flex  absolute lg:left-[51.25%] transform -translate-x-1/2 top-16  bg-white shadow-md shadow-black rounded-2xl px-10 py-4 mt-36  backdrop-blur-sm">
            {/* <nav className="font-atkinson hidden lg:flex justify-center items-center bg-white shadow-md shadow-black rounded-2xl px-10 py-4 w-auto backdrop-blur-sm mx-auto">  */}
                <ul className="flex gap-x-6 text-gray-800 text-base md:mx-auto">
                    <NavItem href="/" label="Home" />

                    {/* Desktop Dropdown */}
                    <li 
                        className="relative dropdown"
                        onMouseEnter={() => handleDesktopHover(true)}
                        onMouseLeave={() => handleDesktopHover(false)}
                    >
                        <button 
                            className="flex items-center gap-2 font-atkinson text-md hover:text-blue-600 transition"
                        >
                            <Link href='/saunas'>Saunas</Link> 
                        </button>
                        {dropdownOpen && (
                            <ul className="font-atkinson absolute z-[-10] left-0 mt-[-2] w-48 bg-white/95 shadow-md shadow-black rounded-2xl px-4 py-2 backdrop-blur-sm">
                                <DropdownItem href="/saunas/cube" label="Cube Saunas" onClick={closeDropdown} />
                                <DropdownItem href="/saunas/luna" label="Luna Saunas" onClick={closeDropdown} />
                                <DropdownItem href="/saunas/barell" label="Barrell Saunas" onClick={closeDropdown} />
                                <DropdownItem href="/saunas/canadian-timber" label="Canadian Timber" onClick={closeDropdown} />
                                <DropdownItem href="/saunas/indoor" label="Indoor Saunas" onClick={closeDropdown} />
                            </ul>
                        )}
                    </li>
                    
                    <NavItem href="/cold-plunge" label="Cold Plunge" className="font-atkinson" />
                    <NavItem href="/quote" label="Get a Quote" className="font-atkinson" />
                    <NavItem href="/accessories" label="Accessories" className="font-atkinson" />
                  
                </ul>
            </nav>
        </header>
    );
}

// Reusable Navigation Item Component
function NavItem({ href, label }) {
    return (
        <li>
            <Link href={href} className="hover:text-blue-600 transition">
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