// 'use client'
// import React ,{useEffect}from 'react'
// import { fetchProduct } from "@/assets/utils/request";
// import CarouselDynamicID from '@/components/CarouselDynamicID'

// const page = ({id}) => {


//   useEffect(() => {
//     const [product, setProduct] = useState(null)
//     const fetchData = async () => {
//       if(!id) return

//       try {
//         const data = await fetchProduct(id)
//         setProduct(data)
//       } catch (error) {
//         console.error(error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchData()
//   }, [id])
//   return (
//     <div>
//       <CarouselDynamicID id={1}/>
//     </div>
//   )
// }

// export default page
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
