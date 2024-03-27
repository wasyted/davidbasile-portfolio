import Link from "next/link";

export default function VisualWaves(){
  return(
    <section className="max-w-6xl w-full mx-auto pb-8">
      <div className="flex flex-col gap-y-2 items-center justify-between">
        <h1 className="text-3xl sm:text-6xl font-bold text-start sm:text-center p-4 sm:p-8">
          ENCONTRAR, AYUDAR Y POTENCIAR.
        </h1>
        <div className="p-8 text-justify dark:text-neutral-200">
          <p>Eso es Visual Waves y junto con <a href="">@flowciano↗</a> estamos muy contentos de poder dar a conocer este proyecto que venimos laburando en silencio   hace tiempo. Nuestra idea es encontrar, ayudar y potenciar a nuevos artistas, dándoles un espacio no solo para grabar su música, sino tambien sus videos y registrar todo ese proceso creativo que muy pocas veces se ve.</p>
        </div>
      </div>
      <div className="flex items-center justify-center overflow-hidden object-cover max-h-96">
        <video width={1080} loop autoPlay muted>
          <source src="https://ipfs.filebase.io/ipfs/QmYm5LLWR7eaXVR6DDpFkLiY9eWXeoxw9stet5BTzTFWkY/QmegJTEKskZpqx4rGkxGnhrR8YREqT5bSGPfa8477JWLP2" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex items-center justify-between p-8 dark:text-neutral-200">
        <p className="sm:flex-1 max-w-prose">Solo nos interesa tu creatividad y las ganas de crear libremente. Esperamos poder conocery concretar con más personas. Sabemos que allí afuera hay muchísimo arte por ser descubierto.</p>
        <Link className="text-end self-start min-w-max ml-4 hover:font-bold hover:mx-6 hover:px-0 transition-all hover:border-b" href={'/visualwaves'}>Ser parte →</Link>
      </div>
    </section>
  )
}