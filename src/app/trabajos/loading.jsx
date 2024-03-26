import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";

export default function Loading() {
  return(
    <section className="p-8 max-w-6xl w-full mx-auto bg-black text-white">
      <div className="flex items-center justify-between pb-8">
        <h1 className="flex-1 text-6xl font-bold">
          Mi trabajo.
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 place-items-center sm:grid-cols-3 xl:grid-cols-4 overflow-hidden">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </section>
    )
}