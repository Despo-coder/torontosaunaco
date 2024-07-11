"use client"
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/images/new_logo_1.jpg"
import defaultImage from "@/assets/images/profile.png"
import { Button } from './ui/button';
import { useState , useEffect} from 'react';
import { usePathname } from 'next/navigation';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { signIn, signOut , useSession, getProviders} from 'next-auth/react';
import { set } from 'mongoose';




const Navbar = () => {

  // const savedCart = JSON.parse(localStorage.getItem('cart')) || '[]';
  // const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

  const [showDropdown, setShowDropdown] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
 const { data: session } = useSession();
 const profileImage = session?.user?.image || defaultImage;

useEffect(() => {
  const setAuthProviders = async () => {
    const res = await getProviders();
    setProviders(res);
  }
  setAuthProviders();
}
, []);
 

    return (  
    <nav className=" bg-black py-12 ">

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
          className="flex mb-2 flex-1 items-center justify-center sm:items-stretch md:justify-start md:mt-1"
        >
       
          <Link className="flex flex-col items-center md:flex-row md:items-center flex-shrink-0" href="/">
           <Image src={logo} alt="Toronto Sauna Co" width={80} height={50}priority={true} className='rounded-full w-auto'/>
           
            <span className="md:block text-white text-2xl font-bold ml-2 mt-1 "
              >Toronto Sauna Co.</span
            >
          </Link>
          {/* <!-- Desktop Menu Hidden below md screens --> */}
          <div className="hidden md:ml-6 md:block">
            <div className="flex space-x-2 mt-9">
              <Link
                href="/"
                className={`${pathname === '/' ?'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-2 py-4"`}
                >Home</Link
              >
              <div className="relative w-max mx-auto" onClick={()=> setShowDropdown(!showDropdown)}>
              <Link href="/saunas"
         className={`${pathname === '/saunas' ?'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[px]"`}>
        Saunas
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd" data-original="#000000" />
        </svg>
      </Link>
           {/* <Link
            href="/saunas"
            className={`${pathname === '/saunas' ?'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[8px]"`}
          onMouseEnter={() => setShowDropdown(true)}
          onClick={() => setShowDropdown(false)}
          onMouseLeave={() => setShowDropdown(false)}
          >
            
            Saunas
          </Link> */}
          {/* <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        > */}
        <ul className= {`${showDropdown ? 'absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto':'hidden'}`} >
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'><Link
                href="/saunas/cube"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
             onClick={() => setShowDropdown(false)}
             >
                Cube Saunas
              </Link></li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'><Link
                href="/saunas/luna"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Luna Saunas
              </Link></li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'><Link
                href="/saunas/barell"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Barrell Saunas
              </Link></li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'><Link
                href="/saunas/canadian-timber"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Canadian Timber
              </Link></li>
        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'><Link
                 href="/saunas/indoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Indoor Saunas
              </Link></li>
      </ul>
          {/* {showDropdown && (
            <div className="absolute left-[-100px] mt-[25px] w-48 bg-white shadow-lg rounded-xl z-10">
              <Link
                href="/saunas/cube"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
             onClick={() => setShowDropdown(false)}
             >
                Cube Saunas
              </Link>
              <Link
                href="/saunas/luna"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Luna Saunas
              </Link>
              <Link
                href="/saunas/barell"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Barrell Saunas
              </Link>
              <Link
                href="/saunas/canadian-timber"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Canadian Timber
              </Link>
              <Link
                href="/saunas/indoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
             >
                Indoor Saunas
              </Link>
              
            </div>
          )} */}
        </div>
        <Link
                href="/accessories"
                className={`${pathname === '/accessories' ? 'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[8px]"`}
                onClick={() => setShowDropdown(false)}
             >
               Accessories
              </Link>
              <Link
                href="/cold-plunge"
                className={`${pathname === '/cold-plunge' ?'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px]"`}
                >Cold Plunge</Link
              >
              <Link
                href="/quote"
                className={`${pathname === '/quote' ?'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px]"`}
                >Get a Quote</Link
              >
              {session?.user.isAdmin && session &&( <Link
                href="/quote"
                className={`${pathname === '/quote' ?'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px]"`}
                >Admin</Link
              >)}
             
            </div>
          </div>

        </div>


        {/* <!-- Right Side Menu (Logged Out) -->  */}
        {!session && ( <div className="hidden md:block md:ml-6">
        <div className="flex items-center ">
        {providers && Object.values(providers).map((provider, index) => {
          if (provider.id === 'google') {
            return (
              <Button
                key={index}
                className="flex items-center text-white bg-gray-600 hover:bg-gray-900 hover:text-white rounded-xl px-3 py-2"
                onClick={() => signIn(provider.id)}
              >
                <span>Login with Google</span>
              </Button>
             
            );
          } else if (provider.id === 'credentials') {
            return (
              <Button
                key={index}
                className="flex items-center text-white bg-gray-600 hover:bg-gray-900 hover:text-white rounded-xl px-3 py-2  sm:hidden"
                onClick={() => signIn(provider.id)}
              >
                <span>Login with Credentials</span>
              </Button>
            );
          }
          return null; // If there are other providers you don't want to render
        })}
          
        </div>
      </div>
)}
       
        {/* <!-- Right Side Menu (Logged In) --> */}
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"
        >
          {/* <!-- Shopping Cart Button --> */}
          {!session?.user.isAdmin&& (<div className='mr-2'>
                    <HiOutlineShoppingBag className='font-bold text-white' size={38}/>
                    <span  className="absolute top-[46px] right-[80px] md:right-[70px] inline-flex items-center justify-center px-[1px] py-[2px]  font-semibold leading-none text-white text-md transform translate-x-1/2 -translate-y-1/2 ">{cartItems.length}</span>
                    {/*  */}
                    </div>)}
                  
          {session && session?.user.isAdmin && ( <Link href="/message" className="relative group">
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
                  src={profileImage}
                  alt=""
                  width={50}
                  height={50}
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
             onClick={()=> setIsProfileMenuOpen(false)}
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
              <button  className="block px-4 py-2 text-sm text-gray-700" 
              onClick={()=> {setIsProfileMenuOpen(false)
                signOut()
              }}
              
              >
                Sign Out
              </button>
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
                className={`${pathname === '/' ?'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                // className={`${pathname === '/' ?'bg-gray-900 text-white' : ''} " text-white  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Home</Link
              >
              <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link
            href="/saunas"
            className={`${pathname === '/saunas' ? 'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
            style={{ marginTop: '1px' }}
          >
            Saunas
          </Link>
          {showDropdown && (
            <div className="absolute left-0 mt-[-1px] w-48 bg-white shadow-lg rounded-xl z-10">
              <Link
                href="/saunas/cube"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
             onClick={() => setShowDropdown(false)}
             >
                Cube Saunas
              </Link>
              <Link
                href="/saunas/luna"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Luna Saunas
              </Link>
              <Link
                href="/saunas/barell"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Barrell Saunas
              </Link>
              <Link
                href="/saunas/canadian-timber"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                Canadian Timber
              </Link>
              <Link
                href="/saunas/indoor"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
             >
                Indoor Saunas
              </Link>
              <Link
                href="/accessories"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
             >
               Accessories
              </Link>
            </div>
          )}
        </div>
            
              <Link
                href="/cold-plunge"
                className={`${pathname === '/cold-plunge' ?'bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Cold Plunge</Link
              >
              <Link
                href="/quote"
                className={`${pathname === '/quote' ?'bg-white text-gray-900' : ''} " bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Get A Quote</Link
              >
              {session?.user.isAdmin && session &&( <Link
                href="/quote"
                className={`${pathname === '/quote' ?'bg-white text-gray-900' : ''} " bg-white text-gray-900' : 'text-white'} " text-black  hover:bg-gray-900 hover:text-white rounded-xl px-3 py-[6px] mt-1"`}
                >Admin</Link
              >)}
              {/* <span
                className="flex mx-auto text-white bg-gray-700 hover:bg-gray-500 hover:text-white rounded-xl px-3 py-2 my-4"
              >
                {!session && (
                 
                  <span>Login or Register</span>
                 
                )
              } */}
                 {
                  providers && Object.values(providers).map((provider, index) => 
                    {
                  if (provider.id === 'google') 
                    {
                    return (
                      <Button
                        key={index}
                        className="flex items-center text-white bg-gray-600 hover:bg-gray-900 hover:text-white rounded-xl px-3 py-2"
                        onClick={() => signIn(provider.id)}
                      >
                        <span>Login with Google</span>
                      </Button>
                    );
                  } else if (provider.id === 'credentials') {
                    return (
                     <span className='hidden' key={index}>
                      <Button
                        key={index}
                        className="flex items-center text-white bg-gray-600 hover:bg-gray-900 hover:text-white rounded-xl px-3 py-2  "
                        onClick={() => signIn(provider.id)}
                      >
                        <span>Login with Credentials</span>
                      </Button>
                      </span>
                    );
                  }
                  return null; // If there are other providers you don't want to render
                })}
              
            
                
              {/* </span> */}
            </div>
            </div>
          )}
  </nav>
  );
  }
  export default Navbar;