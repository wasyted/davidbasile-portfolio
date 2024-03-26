import Image from "next/image";
import Link from "next/link";

export default function Olga() {
  return (
    <section className="p-8 max-w-6xl w-full mx-auto bg-black text-white">
      <div className="flex items-center justify-between pb-4">
        <Link href={'/trabajos/olga'} className="flex-1 text-6xl font-bold max-w-max">
          OLGA.
        </Link>
        <Link href={'/trabajos/olga'} className="text-end min-w-max pl-4 hover:font-bold hover:px-6 transition-all hover:border-b">Rodaje y backstage ▶</Link>
      </div>
      <p className="max-w-prose text-sm pb-8">
        Filmación de promos para la nueva programación de OLGA 2024, con personajes como Yayo, Fer Dente, La Negra Vernacci, Tortonese y más. Dirección a cargo de Mafe Davila y David Basile como Asistente de Dirección y Edición.
      </p>
      <Link href={'/trabajos/olga'} className="max-h-96 flex items-center justify-center overflow-hidden overflow-hidden rounded-lg mb-8">
        <Image height={1080} width={1920} alt={'image'} src={'https://ipfs.filebase.io/ipfs/QmZNB3dR1UxWoEfc9ZmuSUnuGXh7Aw9wGPpK2tx23rzbvm/QmYLCFf8PGhwdWwqguiuuLuTZUSbk9Uh48tzKru9NPk2Cb'}/>
      </Link>
    </section>
  )
}