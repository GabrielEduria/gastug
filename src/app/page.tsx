import ProjectGrid from "@/components/projects/ProjectGrid"
import Motion from "@/animation/Motion"

export default function home() {

  return (

    <section className="h-screen w-full bg-[#222831] flex items-center justify-center">
      <Motion>
        <div className="h-screen w-full max-w-[990px]">
          <h1 className="text-center text-2xl text-white p-4 py-20">Side Projects by
              <a href="http://gabrieleduria.com"
                className="text-blue-700 underline"
              > Gabbyyyy </a>
          </h1>
          <ProjectGrid />
        </div>
      </Motion>
    </section>

  )
}