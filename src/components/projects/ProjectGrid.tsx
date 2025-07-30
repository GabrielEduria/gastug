import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectGrid() {
    return (
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-3 auto-rows-auto rounded-lg relative px-4 pb-10">
            {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  slug={project.slug}
                />
            ))}
        </div>
    )
}