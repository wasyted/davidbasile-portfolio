import Image from "next/image";
import Link from "next/link";

export default function Hero(){
  return(
    <section className="p-8 max-w-6xl w-full mx-auto">
      <div className="flex flex-wrap items-center justify-between pb-8">
        <h1 className="flex-1 self-start text-3xl sm:text-6xl font-bold pb-8 sm:pb-0">
          DAVID BASILE.
        </h1>
        <div className="sm:flex-1 self-end">
          <h2 className="text-end text-lg sm:text-2xl">Director Audiovisual.</h2>
          <p className="opacity-75 max-w-96 ml-auto text-end">Mí objetivo es lograr un ambiente comodo, contar una historia de calidad en cada video adaptandose a la esencia de cada artista.</p>
        </div>
      </div>
      <div className="flex items-center justify-between pb-8">
        <h2 className="text-lg sm:text-2xl">&quot;Lograr un producto audiovisual de calidad que transmita la esencia de cada cliente&quot;</h2>
        <Link className="text-end min-w-max pl-4 hover:font-bold hover:px-6 transition-all hover:border-b" href={'/#about'}>Acerca de mí↴</Link>
      </div>
      <div className="flex items-center max-h-[700px] overflow-hidden rounded-sm">
        <Image src={"https://ipfs.filebase.io/ipfs/QmNowW3ud7qkJA3UPAsGBDmDYyTuacZeFTXzUwK6ck9nX3/QmPEqfitYVsK1aAPQqYAjhQp1ouAJRxZqDrmhPYR755Hvq"} width={1440} height={1440} alt={'hero image'}></Image>
      </div>
    </section>
  )
}