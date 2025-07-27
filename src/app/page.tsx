import ProjectGrid from "@/components/projects/ProjectGrid"
import Motion from "@/animation/Motion"

export default function home() {

  return (

    <section className="h-screen w-full bg-[#222831] flex justify-center">
      <div className="w-full max-w-[980px]">
        <Motion>
          <h1 className="text-center text-2xl text-gray-400 p-4 py-20">Side Projects by
              <a href="http://gabrieleduria.com"
                className="text-blue-800 hover:scale-90 hover:underline "
              > Gabbyyyy </a>
          </h1>
          <ProjectGrid />
        </Motion>
      </div>
 
    </section>

  )
}