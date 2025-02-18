import logo from "@/assets/images/tsc_logo_black.jpg"
import Navbar from "@/components/Navbar"
import NavbarUpdate from "@/components/NavbarUpdate"
import '../assets/styles/globals.css'
import 'photoswipe/dist/photoswipe.css';
import StoreProvider from "@/redux/provider/StoreProvider"
import AuthProvider from "@/components/AuthProvider"
import toast, { Toaster } from 'react-hot-toast';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from "@/components/Footer"


// Create Meta Data
export const metadata = {
    title: "Toronto Sauna Co.",
    description: "Toronto Sauna Co. is a sauna company based in Toronto, Ontario, Canada.",
    image: logo,
    keywords: "sauna, toronto, ontario, canada",
    url: "https://torontosaunaco.com",
    twitterHandle: "@torontosaunaco",
    twitterCardType: "summary_large_image",
   
};

const MainLayout = ({children}) => {
    return (
      <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        </head>
        <body>
          <StoreProvider>
          <NavbarUpdate />
          {/* <Navbar /> */}
        
          <Toaster position="top-center" />
          <ScrollToTop />
          <main>{children}</main>
          </StoreProvider>
          <Footer />
        </body>
       
      </html>
    
      </AuthProvider>
   
       )
}

export default MainLayout
