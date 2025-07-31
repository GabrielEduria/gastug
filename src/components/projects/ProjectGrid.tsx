import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectGrid() {
    return (
<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 justify-items-center ">
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