import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";



export default function Product({ product }) {
  //console.log(product)
  const dispatch = useDispatch();
const addItemsToCart = () => {
  dispatch(
    addToCart({
      id: product._id,
      title: product.name,
      price: product.square_feet,
      qty: 1,
    })
  )

}
;

  return (
    <div className="rounded-lg mr-3  bg-white dark:bg-slate-900 overflow-hidden border shadow">
      <Link href="#">
        <Image
          src={`${product.images[0]}`}alt={product.name}
          width={556}
          height={556}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="px-4">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-center dark:text-slate-200 text-slate-800 my-2 font-semibold ">
            {product.name}
          </h2>
        </Link>
        <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
          <p>$ {product.square_feet}</p>
          <button className="flex items-center space-x-2 bg-slate-700 px-4 py-2 rounded-xl text-white"
          onClick={()=>addItemsToCart()}
          >
            {/* <BaggageClaim /> */}
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}