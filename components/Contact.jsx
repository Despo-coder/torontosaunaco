'use client'
import { useState } from "react";
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Contact = () => {
    const router = useRouter();
    const [emailresult, setEmailResult] = useState({})
    const [loading, setLoading] = useState(true)
  
  
    const sendEmails = async (e) =>{
        e.preventDefault(); // Prevent form from submitting the traditional way
        setLoading(true);
      
        const formData = {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
          subject: e.target.subject.value
        };
      
        try {
          const res = await fetch('/api/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          const dataResponse = await res.json();
          if (dataResponse.message='Email sent successfully!') {
            toast.success('Email sent successfully!', { duration: 2700 });
            // setTimeout(() => {
            //   router.push('/saunas');
            // }, 2000);
            router.push('/saunas');
          } else {
            toast.error('Error sending email. Please try again later.');
          }
          setEmailResult(data);
          setLoading(false);
        } catch (error) {
          console.error('Error sending emails:', error);
          setLoading(false);
        }
      }
   return (
      <div className="mb-12">
         
        <div className="mt-6">
              <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                  <div>
                      <h1 className="text-gray-800 text-3xl font-extrabold">Toronto Sauna Co</h1>
                      <p className="text-sm text-gray-500 mt-4">Hey there! Thinking about stepping into a world of pure relaxation and rejuvenation? We get it. Saunas are amazing! If you have any questions about our saunas, or just want to say hi, drop us a line below. We're always happy to chat.</p>
  
                      <div className="mt-12">
                          <h2 className="text-gray-800 text-base font-bold">Socials</h2>
  
                          <ul className="flex mt-4 space-x-4">
                              {/* <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                
                                
                             <FaFacebook />
                             
                              </li> */}
                              {/* <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                 
                                
                                  <FaTwitter />
  
                              </li> */}
                              <Link href="https://www.instagram.com/thetorontosaunaco/">
                              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                
                                 
                                    <FaInstagram />
                                    </li>
                              </Link>
                          </ul>
                      </div>
                  </div>
  
                  <form className="ml-auo space-y-4" onSubmit={sendEmails}>
                      <input type='text' placeholder='Name' id='name' required
                          className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500" />
                      <input type='email' placeholder='Email' id='email' required
                          className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500" />
                      <input type='phone' placeholder='Phone' id='phone' 
                          className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500" />
                      <input type='text' placeholder='Subject' id='subject' required
                          className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500" />
                      <textarea placeholder='Message' rows="6" id='message' required
                          className="w-full text-gray-800 rounded-lg px-4 border text-sm pt-2.5 outline-blue-500"></textarea>
                      <button type='submit'
                          className="text-white bg-blue-500 hover:bg-blue-600 rounded-xl text-sm px-4 py-3 w-full !mt-6">Send</button>
                  </form>
              </div>
          </div>
  
      
     
    
      </div>
   )
}

export default Contact
