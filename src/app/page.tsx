import ProjectGrid from "@/components/projects/ProjectGrid"
import Motion from "@/animation/Motion"

export default function home() {

  return (

    <section className="h-screen w-full bg-black">
     <header className="w-full h-[45px] bg-yellow-light mb-30">
         <div className="overflow-hidden text-black text-center py-2 items-center">
              <h1 className="text-xl">
                <span className="text-blue-800">
                </span> side-projects By 
                <a href="http://gabrieleduria.com"
                  className="hover:scale-90 hover:underline text-blue-500"
                > Gabbyyyy </a>
              </h1>
          </div>
     </header>
      <div className="w-full max-w-[980px] mx-auto">
        <Motion>
          <ProjectGrid />
        </Motion>
      </div>
 
    </section>

  )
}