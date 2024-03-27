import Image from "next/image";
import Link from "next/link";

export default function Projects(){
  return(
    <section className="p-8 max-w-6xl w-full mx-auto bg-black text-white">
      <div className="flex items-center justify-between pb-8">
        <h1 className="flex-1 text-3xl sm:text-6xl font-bold">
          Mi trabajo.
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4 overflow-hidden">
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-110" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmSrDUUyRewQ1b6Nwgvnj1QpMAEFctHrW2ZTeGwkfxUHWH"} alt={"image"}></Image>
        </div> 
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-110" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmSzroBWNMncWF8bwWHMJnRQo1Lz84DHeFryhpTSPAFcUK"} alt={"image"}></Image>
        </div> 
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmT76QRin4YNFmAR2bxQn21bVAcoYh9TVYVnJqHSVuso3G"} alt={"image"}></Image>
        </div> 
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmTYWVUKWndjBEygEK5aCi9jo9tykQGbmVBSJxeZ161KKW"} alt={"image"}></Image>
        </div> 
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmU6XDAwVXJk7Xc84hK54ZdgxfA4WzHWfUCu8G9Poyh1jG"} alt={"image"}></Image>
        </div> 
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmVRKZkDGLyT4M16xwveCg64R8f4k8ZFd31w4DdvgDc3G5"} alt={"image"}></Image>
        </div>
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmWa1rJg8uqUtMoNMoUjb18cf924fF2NHmzBQ6gdds12R4"} alt={"image"}></Image>
        </div>
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmWh6ebpib7ooyEtomouvFWL9LLXyJHXoN8AtNvsLALsyE"} alt={"image"}></Image>
        </div>
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmXSr2xa5PC5KatgKNTaLHCh3j5BiohEQEDGHbeRFwRGqu"} alt={"image"}></Image>
        </div>
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmXiFb68iNvs5i3spY6bxBBD2n5GYHEM6KHxey1Q2G5HiC"} alt={"image"}></Image>
        </div>
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmZMVDriUwYSPUFQRbt8dGEY6xZBP3ajwvtJqpoxB23CoY"} alt={"image"}></Image>
        </div>
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmZQTBDCP6qciWoARoTKGajQV2XmqR22beYbMrsSy3APwz"} alt={"image"}></Image>
        </div>
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/Qma459ttTdhcvo4wvPycZf98X8PVfuPfrusgxvzNGtAqjC"} alt={"image"}></Image>
        </div>
        <div className="bg-black aspect-square flex items-center justify-center overflow-hidden rounded-sm hover:rounded-none grayscale hover:grayscale-0 transition-all sm:grayscale-0">
          <Image className="object-cover w-full h-full scale-150" width={1920} height={1080} src={"https://ipfs.filebase.io/ipfs/QmQmZycw1VNbtz5XDi1iKehKN2UhboMLf27DhRTk9nrYwy/QmcyC9edy2hry7UvP7Hmo3VZLn7QJ5vtGNuX7313xmnLh5"} alt={"image"}></Image>
        </div>
      </div>
    </section>
  )
}