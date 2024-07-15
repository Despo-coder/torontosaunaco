// Create Utility function to fetch all data
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
    
      return products
    } catch (error) {
      console.error(error)
      return []
    }
   
  }

// Fetch Single Property
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

  export  {fetchProduct, fetchProducts, fetchAccessories}