'use client';

import { usePathname } from "next/navigation"
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function NavBar(){
    const PathName = usePathname();
    const cleanedPath = PathName.replace(/^\/+/, "");

    return (
       <section className="max-w-[990px] mx-auto py-20 ">
          <div className="flex flex-row justify-center sm:gap-50 px-10 py-5">
              <Link href="/">
                <p className="flex text-xl hover:scale-90 text-white hover:underline leading-relaxed">
                  <BsArrowLeft className="text-2xl pt-2 pr-2"/>
                  Go Back
                </p>
              </Link>

              <div className="overflow-hidden tracking-wide text-white">
                <h2 className="text-center text-xl">
                  <span className="text-red-400">
                   {cleanedPath} 
                  </span> side-project By 
                  <a href="http://gabrieleduria.com"
                    className="text-blue-700 underline"
                  > Gabbyyyy </a>
                </h2>
              </div>
          </div>
       </section>
    )
}