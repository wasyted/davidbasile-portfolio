import Link from "next/link"
import Breadcrumb from "./Breadcrumb"

export default function Header(){
  return(
    <header className="bg-white dark:bg-black/75 backdrop-blur-xl flex items-center justify-between py-4 px-2 sm:p-4 z-50 sticky w-full top-0 left-0 right-0">
      <div className="flex">
        <Link href={'/'} className="ml-4 hover:font-bold hover:ml-4 hover:px-0 transition-all border-b dark:border-b-transparent hover:dark:border-b-white hover:border-b">David Basile.</Link>
        <Breadcrumb />
      </div>
      <div className="flex-1 flex-end text-end">
        <Link className="border bg-black text-white border-black dark:border-zinc-200 dark:bg-white dark:text-black rounded-full px-4 py-2 hover:font-bold hover:px-6 hover:dark:bg-black dark:hover:text-white transition-all" href={'/contacto'}>Contacto</Link>
        <span className="hidden md:inline">
          <Link className="ml-4 py-2 hover:font-bold hover:ml-4 hover:px-0 transition-all hover:border-b" href={'/trabajos'}>Mi trabajo↴</Link>
        </span>
      </div>
    </header>
  )
}