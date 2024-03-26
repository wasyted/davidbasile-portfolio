import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/Youtube'
import WhatsAppIcon from '@mui/icons-material/Whatsapp'
import Image from "next/image";


export default function About(){
  return(
    <section id={'about'} className="p-8 max-w-6xl w-full mx-auto">
      <h1 className="flex-1 text-6xl font-bold pb-8">Sobre mí.</h1>
      <p className="flex-1 pb-6 max-w-prose opacity-75">Parte del mundo audiovisual hace más de 8 años. Fuí asistente, camarografo, editor, productor y actualmente Director Audiovisual. Mí objetivo es lograr un ambiente comodo, contar una historia de calidad en cada video adaptandose a la esencia de cada artista. .</p>
      <h2 className="text-2xl pb-4">&quot;Llevar tu musica un nivel mas arriba con videoclips de calidad&quot;</h2>
      <div className="flex justify-end items-center gap-x-8 pb-8">
        <p className='text-xl font-bold'>Redes:</p>
        <a className="underline" href={'/'}><WhatsAppIcon /></a>
        <a className="underline" href={'https://www.instagram.com/dav1dbasile/'}><InstagramIcon /></a>
        <a className="underline" href={'https://www.youtube.com/@davidbasile7941'}><YouTubeIcon /></a>
      </div>
      <div className='flex gap-x-8 pb-8'>
        <div className="overflow-hidden rounded-sm">
          <Image className='object-cover h-full' src={"https://ipfs.filebase.io/ipfs/QmfMHiPkhLqc5WRRx4pBru5GeoSaBywkm6tv6uUjM8s7S7/QmTDLGZzuiB3Y8uYAWu7LAY1rhcoMEUinLCw68TnUgruLt"} width={1440} height={1800} alt={'hero image'}></Image>
        </div>
        <div className="overflow-hidden rounded-sm">
          <Image className='object-cover h-full' src={"https://ipfs.filebase.io/ipfs/QmdmqKg36dL5UgsAxEymTTiaPHNnA7n4gxG9syM2W2w3WP/QmfR3GLNhMeTxWun1i5CgFqpG86T2NTNnVNUa3B5HxWAgA"} width={1440} height={1800} alt={'hero image'}></Image>
        </div>
        <div className="hidden lg:block overflow-hidden rounded-sm">
          <Image className='object-cover h-full' src={"https://ipfs.filebase.io/ipfs/QmPrVGkoeA7q89Z7zQsGPvXH5GiZ5WYyvSpBSYDit3HsrV/QmPvFXx8HtL87LaX9TcV9Wwd915dyfvrrsQvbDQeZ3bymb"} width={1440} height={1800} alt={'hero image'}></Image>
        </div>
      </div>
    </section>
  )
}