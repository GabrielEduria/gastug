

import NavBar from '@/components/layout/NavBar';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Motion from '@/animation/Motion';
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const project = projects.find(p => p.slug === slug);
  if (!project) return notFound();

  const ProjectComponent = (await project.component()).default;

  return (
  
    <section className="h-screen w-full bg-black">
      <NavBar />
        <Motion>
        <div className="h-full max-w-[880px] mx-auto border border-gray-300 rounded px-2">
           <ProjectComponent />
        </div>  
      </Motion>
    </section>


  );
}
