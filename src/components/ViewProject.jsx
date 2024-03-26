'use client'

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ViewProject({ projects }) {

  const urlQuery = useSearchParams();
  const projectName = urlQuery.get("project");
  const [project, setProject] = useState();

  useEffect(() => {
    const filteredProject = projects.find(project => project.name === projectName);
    setProject(filteredProject); // Assuming the project data is in the format { data: projectData }
  }, [urlQuery]);

  return (
    <div className="flex flex-col justify-center items-center pb-12 w-full">
      {project && console.log(project.youtubeUrl)}
      {projectName !== undefined ? <></> : urlQuery && 
        <>
          <h1 className="flex-1 text-3xl font-bold w-1/4 bg-zinc-200/75 mb-3 animate-pulse text-transparent">loading...</h1>
          <div className="relative aspect-video max-w-full sm:max-w-4xl w-full h-full bg-zinc-200/75 animate-pulse mb-3">
            <div className="aspect-w-16 aspect-h-9"> {/* Maintain aspect ratio of 16:9 */}
              <div className="bg-zinc-200/75"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <div className="flex flex-col items-center justify-center overflow-hidden rounded-md hover:rounded-none transition-all max-h-[768px]">
              <div className="object-cover w-96 bg-zinc-200/75 animate-pulse h-auto aspect-video scale-110" width={1920} height={1080}></div>
            </div>
          </div>
        </>
      }
      {project &&
        <>
          <h1 className="flex-1 text-3xl font-bold mb-3">{project.name}<span className="opacity-75"> - {project.artist}</span></h1>
          <div className="relative aspect-video max-w-full sm:max-w-4xl w-full h-full bg-zinc-200/75 mb-3">
            <div className="aspect-w-16 aspect-h-9"> {/* Maintain aspect ratio of 16:9 */}
              <iframe src={project.youtubeUrl} className="absolute inset-0 w-full h-full" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <div className="flex flex-col items-center justify-center overflow-hidden rounded-md hover:rounded-none transition-all max-h-[768px]">
              <Image className="object-cover w-full h-full scale-110" width={1920} height={1080} src={project.coverImage} alt={"image"}></Image>
            </div>
          </div>
        </>
      }
    </div>
  )
}