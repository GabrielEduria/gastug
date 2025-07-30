'use client';

import { usePathname } from "next/navigation"
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export default function NavBar(){
   const PathName = usePathname();
   const cleanedPath = PathName.replace(/^\/+/, "");
   
    return (
       <section className="w-full h-[45px] mb-30">
          <div className="max-w-[880px] mx-auto flex flex-end justify-between  gap-5 sm:gap-20 px-2 overflow-hidden py-3">
              <Link href="/">
                <p className="flex hover:scale-90 hover:underline text-white text-xl">
                  <BsArrowLeft className="text-2xl pt-2 pr-2 hover:underline"/>
                  back
                </p>
              </Link>

              <div className="text-clip text-white">
                <h2 className="text-xl">
                  <span className="text-blue-800">
                   {cleanedPath} 
                  </span> side-project By 
                  <a href="http://gabrieleduria.com"
                    className="hover:scale-90 hover:underline "
                  > Gabbyyyy </a>
                </h2>
              </div>
          </div>
       </section>
    )
        
}  
