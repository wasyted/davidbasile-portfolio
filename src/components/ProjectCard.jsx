import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({coverImage, name, link}){
  return(
    <Link href={`?project=${encodeURIComponent(link)}`} className="bg-black aspect-square flex flex-col items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
      <p className="font-bold text-start mb-3">{name}</p>
      <Image className="object-cover w-full h-full scale-110" width={1920} height={1080} src={coverImage} alt={"image"}></Image>
    </Link> 
  )
}