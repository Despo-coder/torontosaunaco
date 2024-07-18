// Create Utility function to fetch all data
import { NextResponse } from "next/server"
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

const fetchProducts = async () => {

    try {
      if(!apiDomain){
        //console.log("Something went Wrong....")
        return []
      }
      const res = await fetch(`${apiDomain}/products`, { next: { revalidate: 10 } })
      if(!res.ok){
        throw new Error("Error fetching products")
      }
      
      const products = await res.json()
      // console.log("Fetching Products....")
      return products
    } catch (error) {
      console.error(error)
      return []
    }
   
  }

// Fetch Single Product
const fetchProduct = async (id) => {
  try {
      if(!apiDomain){
       // console.log("Something went Wrong....")
        return null
      }
      const res = await fetch(`${apiDomain}/products/${id}`)
      if(!res.ok){
        throw new Error("Error fetching Sauna!")
      }
      const product = await res.json()
   
      return product
    } catch (error) {
      console.error(error)
      return null
    }

  }


  // Fetch Accessories
  const fetchAccessories = async () => {
    try {
      if(!apiDomain){
       // console.log("Something went Wrong....")
        return []
      }
      const res = await fetch(`${apiDomain}/accessories`, { next: { revalidate: 10 } })
      if(!res.ok){
        throw new Error("Error fetching Accessories")
      }
      const accessories = await res.json()
      return accessories
    } catch (error) {
      console.error(error)
      return []
    }

  }

  // Fetch Orders
  const fetchOrders = async () => {
    try {
      if(!apiDomain){
       
        return []
      }
      const res = await fetch(`${apiDomain}/orders`, { next: { revalidate: 10 } })
      if(!res.ok){
         throw new Error("Error fetching Orders")

      }
      const orders = await res.json()
      // console.log('FetchOrders', orders)
      return orders
    } catch (error) {
      console.error(error)
      return []
    }

  }


  // Fetch Single Order
const fetchOrder = async (id) => {
  try {
      if(!apiDomain){
       // console.log("Something went Wrong....")
        return null
      }
      const res = await fetch(`${apiDomain}/orders/${id}`)
      if(!res.ok){
        throw new Error("Error fetching Sauna!")
      }
      const order = await res.json()
   
      return order
    } catch (error) {
      console.error(error)
      return null
    }

  }

  export  {fetchProduct, fetchProducts, fetchAccessories, fetchOrders,fetchOrder}