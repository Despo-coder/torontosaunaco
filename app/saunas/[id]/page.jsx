'use client'
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { fetchProduct } from "@/assets/utils/request";
import CarouselDynamic from "@/components/CarouselID";
import SaunaDetails from "@/components/SaunaDetails";
import Spinner from "@/components/Spinner";
import ShareButtons from "@/components/ShareButtons";
import toast from "react-hot-toast";



// const dataFile = {
//   ids: ['668f1df5662a799cce869d64','668f1df5662a799cce869d63','668f1df5662a799cce869d62','668f1df5662a799cce869d61','668f1df5662a799cce869d60'],
// }


const SaunaPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [emailresult, setEmailResult] = useState({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if(!id) return

      try {
        const data = await fetchProduct(id)
        setProduct(data)
        //setLoading(false)
       
      } catch (error) {
        console.error(error)
      } finally{
        setLoading(false)
      }
    }
    if(product === null){
      fetchData()
  }
  setMounted(true)

 
  
  }, [id, product])
  

  

  if(!product && !loading ){
    return(
      <p className="text-center">Product not found</p>
    )
  }


  const images = product?.images.map(image => ({
    id: product._id, // Assuming each image should have the same product ID
    image
  })) || [];



  const sendEmails = async (e) =>{
    e.preventDefault(); // Prevent form from submitting the traditional way
    setLoading(true);
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      subject: product.name
    };

    try {
      const res = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
      });

      const data = await res.json();
      console.log(data)
      if (data.message='Email sent successfully!') {
        //const { toast } = await import('react-hot-toast');
        toast.success('Email sent successfully!', { duration: 2700 });
      } else {
        toast.error('Error sending email. Please try again later.', { duration: 2700 });
      }
      setEmailResult(data);
      setLoading(false);
    } catch (error) {
      console.error('Error sending emails:', error);
      setLoading(false);
    }
  
  }
  // 
  return mounted && (
    <div>
     {loading && <Spinner loading={loading} /> }
    {!loading && product && (
      <>
      {/* <ProductImages images={product.images} /> */}
      <CarouselDynamic images={images} />
      <section>
        
      </section>

      <section className="">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
         <SaunaDetails product={product} />

          {/* <!-- Sidebar --> */}
          <aside className="space-y-4">    
           
            {loading && <Spinner loading={loading} /> }  
            <button
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold w-3/4 mx-auto py-2 px-4 rounded-xl flex items-center justify-center"
            >
              <i className="fas fa-bookmark mr-2"></i> Bookmark This Sauna
            </button>
           <ShareButtons product={product} />

            {/* <!-- Contact Form --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Need More Information ?</h3>
              <p className="mb-4">Get in touch with us, send us an email.</p>
              <form onSubmit={sendEmails}>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='name'
                >
                  Name:
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Enter your name'             
                  required
                />
              </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='phone'
                  >
                    Phone:
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='phone'
                    type='text'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                    type="submit"
                    
                  >
                    <i className="fas fa-paper-plane mr-2"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
      </>
    )}
    </div>
  )
}

export default SaunaPage
