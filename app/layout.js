import logo from "@/assets/images/tsc_logo_black.jpg"
import Navbar from "@/components/Navbar"
import '../assets/styles/globals.css'
import 'photoswipe/dist/photoswipe.css';
import StoreProvider from "@/redux/provider/StoreProvider"
import AuthProvider from "@/components/AuthProvider"
import toast, { Toaster } from 'react-hot-toast';
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
      <html lang="en">
        <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        </head>
        <body>
          <StoreProvider>
          <Navbar />
          </StoreProvider>
          <Toaster position="top-center" />
          <main>{children}</main>
          <Footer />
        </body>
       
      </html>
    
      </AuthProvider>
   
       )
}

export default MainLayout
