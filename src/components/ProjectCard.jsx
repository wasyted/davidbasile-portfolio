import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({coverImage, name, link, artist}){
  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
  return(
    <div className="flex flex-col justify-center h-full w-full items-center object-cover p-2 rounded-md bg-black">
      <p className="text-start mb-3">{name}<span className="opacity-75"> - {artist}</span></p>
      <div  className="flex items-center justify-center bg-white overflow-hidden rounded-md hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0 h-full w-full">
        <Link href={`?project=${encodeURIComponent(link)}`}>
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} 
            className="aspect-square object-cover" 
            height={1080}
            width={1920}
            src={coverImage} 
            alt={"image"}
            />
          </Link>
      </div>
    </div>
  )
}