import Image from "next/image";
import YoutubeContainer from "./YoutubeContainer";

export default function OlgaGallery() {
  return (
    <section className="p-8 max-w-6xl w-full mx-auto bg-black text-white">
      <div className="flex items-start justify-between pb-8 xl:flex-row flex-col">
        <h1 className="flex-1 text-3xl sm:text-6xl font-bold max-w-max">
          OLGA.
        </h1>
        <p className="max-w-prose text-sm pt-4 xl:pt-0">
          Filmación de promos para la nueva programación de OLGA 2024, con personajes como Yayo, Fer Dente, La Negra Vernacci, Tortonese y más. El rodaje de los 3 cortos promocionales se llevó a cabo durante 10 días, 12 horas por día. La direccion estuvo a cargo de Mafe Davila y David Basile como Asistente de Direccion y Edicion de 2 de las 3 promos.
        </p>
      </div>
      <div className="max-h-96 flex items-center justify-center overflow-hidden overflow-hidden rounded-lg mb-8">
        <Image height={1080} width={1920} alt={'image'} src={'https://ipfs.filebase.io/ipfs/QmZNB3dR1UxWoEfc9ZmuSUnuGXh7Aw9wGPpK2tx23rzbvm/QmYLCFf8PGhwdWwqguiuuLuTZUSbk9Uh48tzKru9NPk2Cb'}/>
      </div>
      <YoutubeContainer />
      <div className="flex items-start text-center justify-between pt-8 pb-8">
        <h1 className="flex-1 text-3xl sm:text-6xl font-bold max-w-max">
          Backstage.
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-auto place-items-center">
        <div className="col-span-2 overflow-hidden rounded-sm">
          <Image className="w-auto max-h-full" height={1080} width={1920} alt={'image'} src={'https://ipfs.filebase.io/ipfs/QmZNB3dR1UxWoEfc9ZmuSUnuGXh7Aw9wGPpK2tx23rzbvm/QmdqTUWQsci8tDbEQ6hLPtWKcEVCfajWi6NMx7H7R44RDx'}></Image>
          <p className="opacity-75 pt-3">Mafe y David</p>
        </div>
        <div className="overflow-hidden rounded-sm">
          <Image className="w-auto max-h-full" height={1920} width={1080} alt={'image'} src={'https://ipfs.filebase.io/ipfs/QmZNB3dR1UxWoEfc9ZmuSUnuGXh7Aw9wGPpK2tx23rzbvm/QmZBHu3MhYFKk4992yGbqgtEr1JRjoDYg3sBFtZkhmGz1H'}></Image>
        </div>
        <div className="overflow-hidden rounded-sm">
          <Image className="w-auto max-h-full" height={1920} width={1080} alt={'image'} src={'https://ipfs.filebase.io/ipfs/QmZNB3dR1UxWoEfc9ZmuSUnuGXh7Aw9wGPpK2tx23rzbvm/QmZyJkLyr5eFa6tvt72d66fXWkYjSTGD2apCUAgpzBThy3'}></Image>
        </div>
        <div className="col-span-2 overflow-hidden rounded-sm">
          <Image className="w-auto max-h-full" height={1080} width={1920} alt={'image'} src={'https://ipfs.filebase.io/ipfs/QmZNB3dR1UxWoEfc9ZmuSUnuGXh7Aw9wGPpK2tx23rzbvm/QmeWuBKpW1pvjjLjqh2XLXWrNQRHLfsYkv4BLcTRMqNQgB'}></Image>
          <p className="text-end opacity-75 pt-3">Equipo de OLGA y producción</p>
        </div>
      </div>
    </section>
  )
}