import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectGrid() {
    return (
<div className="w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl justify-items-center w-full">
    {projects.map((project) => (
        <ProjectCard
        key={project.slug}
        title={project.title}
        description={project.description}
        slug={project.slug}
        />
    ))}
  </div>
</div>

    )
}