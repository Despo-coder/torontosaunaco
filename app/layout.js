import logo from "@/assets/images/tsc_logo_black.jpg"
import Navbar from "@/components/Navbar"
import '../assets/styles/globals.css'
import StoreProvider from "@/redux/provider/StoreProvider"
import AuthProvider from "@/components/AuthProvider"
import Providers from "@/components/Providers"
import { getCldOgImageUrl } from 'next-cloudinary';


// Create Meta Data
export const metadata = {
    title: "Toronto Sauna Co.",
    description: "Toronto Sauna Co. is a sauna company based in Toronto, Ontario, Canada.",
    image: logo,
    keywords: "sauna, toronto, ontario, canada",
    url: "https://torontosaunaco.com",
    twitterHandle: "@torontosaunaco",
    twitterCardType: "summary_large_image",
    // openGraph: {
    //   images: getCldOgImageUrl({
    //     src: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    //   })
    // }
};

const MainLayout = ({children}) => {
    return (
      <AuthProvider>
      <html lang="en">
        <body>
          <StoreProvider>
          <Navbar />
          </StoreProvider>
          <main>{children}</main>
        </body>
      </html>
      </AuthProvider>
   
       )
}

export default MainLayout
