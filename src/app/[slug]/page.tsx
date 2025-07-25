

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
    <section className="h-screen w-full bg-[#222831]">
      <Motion>
        <NavBar />
        <ProjectComponent />
      </Motion>
    </section>


  );
}
