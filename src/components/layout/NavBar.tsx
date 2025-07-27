'use client';

import { usePathname } from "next/navigation"
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function NavBar(){
    const PathName = usePathname();
    const cleanedPath = PathName.replace(/^\/+/, "");

    return (
       <section className="max-w-[880px] mx-auto py-10 ">
          <div className="flex flex-row justify-center gap-5 sm:gap-20 px-2 overflow-hidden py-5">
              <Link href="/">
                <p className="flex hover:scale-90 hover:underline text-gray-400  text-2xl">
                  <BsArrowLeft className="text-3xl pt-1.5 pr-2 hover:underline"/>
                  back
                </p>
              </Link>

              <div className="overflow-hidden tracking-wide text-gray-400">
                <h2 className="text-xl lg:text-2xl">
                  <span className="text-red-400">
                   {cleanedPath} 
                  </span> side-project By 
                  <a href="http://gabrieleduria.com"
                    className="text-blue-800 hover:scale-90 hover:underline "
                  > Gabbyyyy </a>
                </h2>
              </div>
          </div>
       </section>
    )
}