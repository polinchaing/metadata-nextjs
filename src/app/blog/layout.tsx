
import { Suspense } from "react"
import "../globals.css"

import StyledComponentsRegistry from "@/lib/registry"
import BlogListSkeleton from "@/components/Skeleton/BlogSkeleton"
import { Metadata } from "next";
export const metadata: Metadata = {
 
   title:{
      template:'%s | This is Blog page',
      default: "Blog Page"
   },
  openGraph:{
    title:'Blog page',
    description:'Blog page',
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
export default function BlogLayout(
    {children}:{children: React.ReactNode}
){
    return(
        <div className="flex justify-center items-center">
              <StyledComponentsRegistry>
                <Suspense fallback={<BlogListSkeleton/>}>
                    {children}
                </Suspense>
        </StyledComponentsRegistry>
        </div>
    )
}