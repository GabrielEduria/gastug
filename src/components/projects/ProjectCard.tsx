import Link from "next/link";

export default function ProjectCard({ title, description, slug }: {title: string, description: string, slug: string}) {
    return (
      <Link href={`/${slug}`  }>
          <div className="h-[300px] border border-gray-100 rounded-lg shadow-sm bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-0.5s">
     
            <div className="p-3">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">{title}</h2>
                <p className="mb-3 font-normal text-gray-400">{description}</p>
            </div>
        </div>
      </Link>
    )
}