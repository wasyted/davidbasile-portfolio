import { Suspense } from "react"
import ProjectCard from "./ProjectCard"
import ProjectCardSkeleton from "./ProjectCardSkeleton"

export default function Project({project}){
  return(
    <Suspense fallback={<ProjectCardSkeleton />}>
      
    </Suspense>
  )
}