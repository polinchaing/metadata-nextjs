import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
 
   title:{
      template:'%s | This is About page',
      default: "About Page"
   },
  openGraph:{
    title:'About page',
    description:'About page',
    images:[
     {
      url:'https://i.pinimg.com/736x/f7/85/10/f785106b028099dc87518c9cc3c555bc.jpg',
      width: 800,
      height: 650,
      alt: "Car",
      type: 'image/png'
     }
    ]
  }
};
function page() {
  return (
    <div>About Page</div>
  )
}

export default page