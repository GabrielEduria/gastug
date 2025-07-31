import ProjectGrid from "@/components/projects/ProjectGrid"
import Motion from "@/animation/Motion"

export default function home() {

  return (
    <section className="min-h-screen w-full bg-dark-bg">
      <Motion>
        <header className="w-full mb-30">
            <div className="overflow-hidden text-white text-center py-3 items-center">
                  <h1 className="text-xl">
                    <span className="text-blue-800">
                    </span> side-projects By 
                    <a href="http://gabrieleduria.com"
                      className="hover:scale-90 hover:underline text-blue-500"
                    > Gabbyyyy </a>
                  </h1>
              </div>
        </header>
          <div className="relative px-4">
            <ProjectGrid />
          </div>
      </Motion>
    </section>
  )
}