"use client"
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/images/tsc_logo_black.jpg"
import defaultImage from "@/assets/images/profile.png"
import { Button } from './ui/button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from 'react-redux';



const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
    return (  
    <nav className="bg-slate-700  py-8"
    
    // style={{
    //   backgroundImage: "url('/images/Sauna_Image_1-unsplash.jpg')",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}>
    >

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-20 items-center justify-between">
     
      
       {/* <!-- Mobile menu button--> */}
        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
        
          <button
            type="button"
            id="mobile-dropdown-button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

      

        {/* <!-- Logo + Regular Menu --> */}
        <div
          className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
       
          <Link className="flex flex-col items-center md:flex-row md:items-center flex-shrink-0" href="/">
           <Image src={logo} alt="Toronto Sauna Co" width={80} height={50}priority={true} className='rounded-full w-auto'/>
           
            <span className="md:block text-white text-2xl font-bold ml-2 mt-1"
              >Toronto Sauna Co.</span
            >
          </Link>
          {/* <!-- Desktop Menu Hidden below md screens --> */}
          <div className="hidden md:ml-6 md:block">
            <div className="flex space-x-2 mt-6">
              <Link
                href="/"
                className={`${pathname === '/' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Home</Link
              >
              
                
              <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link
            href="/saunas"
            className={`${pathname === '/saunas' ? 'bg-gray-900 text-white' : ''} text-white hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1 inline-flex items-center`}
            style={{ marginTop: '1px' }}
          >
            Saunas
          </Link>
          {showDropdown && (
            <div className="absolute left-0 mt-[-1px] w-48 bg-white shadow-lg rounded-xl z-10">
              <Link
                href="/saunas/barrel"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
             onClick={() => setShowDropdown(false)}
             >
                Cedar Barrel Saunas
              </Link>
              <Link
                href="/saunas/cube"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Cedar Luna Saunas
              </Link>
              <Link
                href="/saunas/outdoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Outdoor Cedar Cube Saunas
              </Link>
              <Link
                href="/saunas/outdoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Indoor Cedar Cube Saunas
              </Link>
              <Link
                href="/saunas/outdoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
             >
                Outdoor Showers
              </Link>
            </div>
          )}
        </div>
              <Link
                href="/cold-plunge"
                className={`${pathname === '/cold-plunge' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Cold Plunge</Link
              >
              <Link
                href="/quote"
                className={`${pathname === '/quote' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Get a Quote</Link
              >
              {isAdmin && isloggedIn &&( <Link
                href="/quote"
                className={`${pathname === '/quote' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Admin</Link
              >)}
             
            </div>
          </div>

        </div>


        {/* <!-- Right Side Menu (Logged Out) -->  */}
        {!isloggedIn && ( <div className="hidden md:block md:ml-6">
        <div className="flex items-center">
          <Button
            className="flex items-center  text-white bg-gray-600 hover:bg-gray-900 hover:text-white rounded-xl px-3 py-2"
          >
            {/* <FaGoogle  className='mr-2 font-extralight'/> */}
            <span>Login/Sign Up</span>
          </Button>
        </div>
      </div>
)}
       
        {/* <!-- Right Side Menu (Logged In) --> */}
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"
        >
          {/* <!-- Shopping Cart Button --> */}
          {!isAdmin && (<div className='mr-2'>
                    <HiOutlineShoppingBag className='font-bold text-black' size={38}/>
                    <span  className="absolute top-[46px] right-[80px] md:right-[70px] inline-flex items-center justify-center px-[1px] py-[2px]  font-semibold leading-none text-white text-md transform translate-x-1/2 -translate-y-1/2 ">{cartItems.length}</span>
                    </div>)}
                  
          {isloggedIn && isAdmin && ( <Link href="/message" className="relative group">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <span
              className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
            >
              2
              {/* <!-- Replace with the actual number of notifications --> */}
            </span> 
           </Link>)}
         




          {/* <!-- Profile dropdown button --> */}
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={()=> setIsProfileMenuOpen((prev) => !prev)}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  src={defaultImage}
                  alt=""
                />
              </button>
            </div>

            {/* <!-- Profile dropdown --> */}
            {isProfileMenuOpen && (<div
              id="user-menu"
              className= " absolute right-0 z-10 mt-14 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ease-in duration-500"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
             tabIndex="-1"
             
            >
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
               tabIndex="-1"
                id="user-menu-item-0"
                >Your Profile</Link
              >
              <Link
                href="/orders"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
               tabIndex="-1"
                id="user-menu-item-2"
                >Orders</Link
              >
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
               tabIndex="-1"
                id="user-menu-item-2"
                >Sign Out</Link
              >
            </div>
            )}
            
          </div>
        </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
         
            </div>
    </div>  
           
           {/* {isMobileMenuOpen && (       */}
          {isMobileMenuOpen && ( <div id="mobile-menu" >
          <div className=" mt-6 flex flex-col space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className={`${pathname === '/' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Home</Link
              >
              <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link
            href="/saunas"
            className={`${pathname === '/saunas' ? 'bg-gray-900 text-white' : ''} text-white hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1 inline-flex items-center`}
            style={{ marginTop: '1px' }}
          >
            Saunas
          </Link>
          {showDropdown && (
            <div className="absolute left-0 mt-[-1px] w-48 bg-white shadow-lg rounded-xl z-10">
              <Link
                href="/saunas/barrel"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
             onClick={() => setShowDropdown(false)}
             >
                Cedar Barrel Saunas
              </Link>
              <Link
                href="/saunas/cube"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Cedar Luna Saunas
              </Link>
              <Link
                href="/saunas/outdoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Outdoor Cedar Cube Saunas
              </Link>
              <Link
                href="/saunas/outdoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Indoor Cedar Cube Saunas
              </Link>
              <Link
                href="/saunas/outdoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Outdoor Showers
              </Link>
            </div>
          )}
        </div>
            
              <Link
                href="/cold-plunge"
                className={`${pathname === '/cold-plunge' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Cold Plunge</Link
              >
              <Link
                href="/quote"
                className={`${pathname === '/quote' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Get A Quote</Link
              >
              {isAdmin && isloggedIn &&( <Link
                href="/quote"
                className={`${pathname === '/quote' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Admin</Link
              >)}
              <button
                className="flex mx-auto text-white bg-gray-700 hover:bg-gray-500 hover:text-white rounded-xl px-3 py-2 my-4"
              >
                {!isloggedIn && (<span>Login or Register</span>)}
                
              </button>
            </div>
            </div>
          )}
  </nav>
  );
  }
  export default Navbar;