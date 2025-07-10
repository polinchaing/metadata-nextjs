
import DisplayProductComponent from '@/components/products/DisplayProductComponent'
import FetchCar from '@/lib/api'
import { CarData } from '@/lib/car-type'
import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
 
   title:{
      template:'%s | This is Product page',
      default: "Product Page"
   },
  openGraph:{
    title:'Products page',
    description:'Product page',
    images:[
     {
      url:'https://i.pinimg.com/736x/3f/1d/f7/3f1df704b622db4f4cd458c4bc3e6a3c.jpg',
      width: 800,
      height: 650,
      alt: "Car",
      type: 'image/png'
     }
    ]
  }
};
const ProductPage = async () => {
  const  data:CarData[] = await FetchCar(0,5)
  console.log(data)
  return (
    <div>
      {/* <SWRComponent/> */}
      <DisplayProductComponent tagline={'Latest Updates'} heading={'New Comming'} description={'Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.'} buttonText={'View all cars'} buttonUrl={''} posts={data}/>
    </div>
  )
}

export default ProductPage
