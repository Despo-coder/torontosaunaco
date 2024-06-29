import logo from "@/assets/images/tsc_logo_black.jpg"
import Navbar from "@/components/Navbar"
import '../assets/styles/globals.css'
import StoreProvider from "@/redux/provider/StoreProvider"


// Create Meta Data
export const metadata = {
    title: "Toronto Sauna Co.",
    description: "Toronto Sauna Co. is a sauna company based in Toronto, Ontario, Canada.",
    image: logo,
    keywords: "sauna, toronto, ontario, canada",
    url: "https://torontosaunaco.com",
    twitterHandle: "@torontosaunaco",
    twitterCardType: "summary_large_image",
}

const MainLayout = ({children}) => {
    return (
         <html lang="en" >
           <StoreProvider>
           <body>
            <Navbar />
           <main>{children}</main>
           </body>
           </StoreProvider>
         </html>
       )
}

export default MainLayout
