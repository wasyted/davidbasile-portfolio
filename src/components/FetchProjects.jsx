import ViewProject from "./ViewProject";
import ProjectCard from "./ProjectCard";

async function getData() {
  const res = await fetch('https://raw.githubusercontent.com/wasyted/davidbasile-portfolio/main/projects.json', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Projects() {
  const data = await getData();
  const projects = data.projects;
  return (
    <section className="p-8 max-w-6xl w-full mx-auto bg-black text-white">
      <div className="flex items-center justify-between pb-8">
        <h1 className="flex-1 text-3xl sm:text-6xl font-bold">
          Mi trabajo.
        </h1>
      </div>
      <ViewProject projects={projects} />
      <div className="grid grid-cols-2 gap-8 place-items-center sm:grid-cols-3 xl:grid-cols-4 overflow-hidden">
        {projects && projects.map((project) => {
          return (
            <ProjectCard key={project.id} link={project.name} name={project.name} coverImage={project.coverImage} artist={project.artist}/>
          )
        })}
      </div>
    </section>
  )
}