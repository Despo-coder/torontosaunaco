'use client'
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/images/new_logo_1.jpg';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {toast  } from 'react-hot-toast';


const Register = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
      })
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}


const handleSubmit = async (e) => {
  e.preventDefault()
  if (formData.password !== formData.cpassword) {
    toast.error("Passwords don't match")
    return
  }

  try {
    const res = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     // body: formData,
        
     body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        cpassword: formData.cpassword,
      }),
    });

    if (res.ok) {
        toast.success("Registration Successful. Please Login to Continue")
     // const form = e.target;
      //form.reset();
      router.push('/signin')
    } else {
      const error = await res.json();
      setError(error.message);
    }
  } catch (error) {
      setError("Error registering new user: " + error);
  }
}



  return (
    <div className='mt-30'>
      <div className="flex flex-col justify-center font-[sans-serif] pt-12 ">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-2">
        <div className="text-center mb-8">  
       <Image src={logo} alt="logo"  width={250} height={250} className='w-40 inline-block rounded-xl' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <input
    name="username"
    type="text"
    required
    value={formData.username}
    onChange={handleChange}
    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter First Name"
  />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email"
  />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
    name="password"
    type="password"
    value={formData.password}
    onChange={handleChange}
    required
   className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Password"
  />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input
    name="cpassword"
    type="password"
    value={formData.cpassword}
    required
    onChange={handleChange}
   className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Confirm Password"
  />
            </div>

          </div>

          <div className="!mt-12">
            <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-black hover:bg-black/70 focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link href={'/signin'}><span className="text-blue-600 font-semibold hover:underline ml-1">Login here</span></Link> </p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register
