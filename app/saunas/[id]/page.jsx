'use client'
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { fetchProduct } from "@/assets/utils/request";
import SaunaHeaderImage from "@/components/SaunaHeaderImage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SaunaDetails from "@/components/SaunaDetails";
import Spinner from "@/components/Spinner";
import ShareButtons from "@/components/ShareButtons";


const SaunaPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

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
  
  }, [id, product])

  if(!product && !loading ){
    return(
      <p className="text-center">Product not found</p>
    )
  }


  return (
    <div>
     {loading && <Spinner loading={loading} /> }
    {!loading && product && (
      <>
      <SaunaHeaderImage images={product.images} />
      <section>
        {/* <div className="container m-auto py-6 px-6">
          <Link href="/saunas">
            <Button variant="secondary" className="bg-slate-700 text-white rounded-xl hover:bg-slate-800">
            Back to Saunas
            </Button>
           
            </Link>
        </div> */}
      </section>

      <section className="">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
         <SaunaDetails product={product} />

          {/* <!-- Sidebar --> */}
          <aside className="space-y-4">       
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
              <form>
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
