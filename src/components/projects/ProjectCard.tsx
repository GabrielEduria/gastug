import Link from "next/link";

export default function ProjectCard({ title, description, slug }: {title: string, description: string, slug: string}) {
    return (
      <Link href={`/${slug}`  }>
          <div 
            className="h-[300px] w-[300px] border-2 border-gray-700 rounded-lg shadow-sm
                       bg-navy-blue hover:scale-103 
                       transition duration-0.1s">
            <div className="p-2 text-center">
                <h2 className="mb-1 text-xl font-bold tracking-tight text-gray-900 text-white">{title}</h2>
                <p className="mb-1 font-sm text-gray-400">{description}</p>
            </div>
          </div>
      </Link>
    )
}