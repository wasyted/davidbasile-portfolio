import Image from "next/image";
import Link from "next/link";

export default function ProjectsThumbnails() {
  return (
    <section className="p-8 max-w-6xl w-full mx-auto bg-black text-white">
      <div className="flex items-center justify-between pb-8">
        <h1 className="flex-1 text-3xl sm:text-6xl font-bold">
          Mi trabajo.
        </h1>
        <Link href={'/trabajos'} className="text-end min-w-max pl-4 hover:font-bold hover:px-6 transition-all hover:border-b">Ver todo ▶</Link>
      </div>
      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 ">
        <div className='pb-8'>
          <div className='pb-3'>
            <Link href={'/'} className='underline pb-3'>001 Historial ▶</Link>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-sm object-cover max-h-64 relative">
            <Image src={"https://ipfs.filebase.io/ipfs/QmTZfcMp4PDB2dEoVwn1jYvGHPPTzKZNKBfRiDey9qts2R/QmbnmHC3dehsjqDsuqGWqswqsuxJhKTs5GXbJ8sr3H1t48"} height={1080} width={1920} loop autoPlay muted className='overflow-hidden hover:scale-150 scale-110 transition-all duration-500 z-20 hover:opacity-0 absolute' />
            <video height={1080} width={1920} loop autoPlay muted className='overflow-hidden hover:scale-110 transition-all duration-500'>
              <source src="https://ipfs.filebase.io/ipfs/QmSFzRb1ysaxcjsJRbqWNpyUAkbY62huAAJmz8ztx9og6H/QmQgEjX75aS448iyGLWQraPkuzVjciaaygoN6PF1kDbUJt" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className='pb-8'>
          <div className='pb-3'>
            <Link href={'/'} className='underline pb-3'>002 CAFÉ CON MEDIALUNAS ▶</Link>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-sm object-cover max-h-64 relative ">
            <Image src={"https://ipfs.filebase.io/ipfs/QmVcCW1oBwh5KQtJQpsyNX1FQEKdt4mzANL4HyZdWZB2Cc"} height={1080} width={1920} loop autoPlay muted className='overflow-hidden hover:scale-150 scale-[120%] transition-all duration-500 hover:opacity-0 z-20 absolute' />
            <video height={1080} width={1920} loop autoPlay muted className='hover:scale-150 scale-110 transition-all duration-500 z-10'>
              <source src="https://ipfs.filebase.io/ipfs/QmSFzRb1ysaxcjsJRbqWNpyUAkbY62huAAJmz8ztx9og6H/QmQZvBh8qmwvEWeUY9VFHaNsEnTdhnXrJZQMiPMwxHfdqx" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className='pb-8'>
          <div className='pb-3'>
            <Link href={'/'} className='underline pb-3'>003 COLORES FRIOS ▶</Link>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-sm object-cover max-h-64 relative">
            <Image src={"https://ipfs.filebase.io/ipfs/QmYqBcYLYKZxjnGYp3khoqJwZ6eZSFBKkto63oqDuTG5GU"} height={1080} width={1920} loop autoPlay muted className='overflow-hidden hover:scale-150 scale-110 transition-all duration-500 hover:opacity-0 absolute z-20' />
            <video height={1080} width={1920} loop autoPlay muted className='hover:scale-110 transition-all duration-500'>
              <source src="https://ipfs.filebase.io/ipfs/QmSFzRb1ysaxcjsJRbqWNpyUAkbY62huAAJmz8ztx9og6H/QmboNfCb8RUNinkVWVLiTjvLzPjZEsQhk7x1VzXf7is13x" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className='pb-8'>
          <div className='pb-3'>
            <Link href={'/'} className='underline '>004 MALA MÍA ▶</Link>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-sm object-cover max-h-64 relative">
            <Image src={"https://ipfs.filebase.io/ipfs/QmWkB9R14pPmk9gARLzQQJccTMZCZjCXRdk67vDJjpiZZS"} height={1080} width={1920} loop autoPlay muted className='overflow-hidden hover:scale-150 scale-110 transition-all duration-500 hover:opacity-0 z-20 absolute' />
            <video height={1080} width={1920} loop autoPlay muted className='hover:scale-110 transition-all duration-500'>
              <source src="https://ipfs.filebase.io/ipfs/QmSFzRb1ysaxcjsJRbqWNpyUAkbY62huAAJmz8ztx9og6H/Qmf54XtkwCy1cLMH3TGBLGoknsbGuBeRtY6QGNBeA4YhA3" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full pt-4">
        <Link href={'/trabajos'} className="text-xl text-center min-w-max px-4 hover:font-bold hover:px-6 transition-all hover:border-b">Ver todo</Link>
      </div>
    </section>
  )
}