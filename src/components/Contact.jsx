export default function Contact(){
  return(
    <section className="p-8 w-full">
    <div className="flex-wrap items-center justify-between pb-8">
      <h1 className="text-center self-start sm:self-center text-6xl font-bold pb-8">
        Contame de tu proyecto.
      </h1>
      <form className="p-8 rounded-lg flex justify-center items-start w-full gap-x-8 flex-wrap max-w-3xl mx-auto flex-wrap">
        <div className="flex items-end gap-x-8 flex-1 flex-wrap">
          <label htmlFor="name" className="pb-3 w-full ">Tu nombre
            <input name="name" className="w-full border-b bg-transparent p-1 flex" type="text" />
          </label>
          <label htmlFor="project" className="pb-3 w-full">Nombre de tu proyecto
            <input name="project" className="w-full border-b bg-transparent p-1 flex"  type="text" />
          </label>
        </div>
        <div className="flex items-end justify-center gap-x-8 flex-1 flex-wrap">
          <label htmlFor="email" className="pb-3 w-full">Mail
            <input name="email" className="w-full border-b bg-transparent p-1 flex"  type="email" />
          </label>
          <label htmlFor="socialMedia" className="pb-3 w-full">Redes
            <input name="socialMedia" className="w-full border-b bg-transparent p-1 flex"  type="text" />
          </label>
        </div>
        <div className="w-full flex items-center justify-center gap-x-8 flex-wrap">
          <div className="w-full">
            <label htmlFor="proposal" className="w-full max-w-sm self-start">Mensaje <span className="opacity-50 text-xs">(500 carácteres max.)</span>
              <textarea name="proposal" maxLength={500} rows={4} className="mt-3 w-full border rounded-lg bg-transparent p-1 flex" type="text" />
            </label>
          </div>
          <div className="w-full mt-3">
            <div className="w-full">
              <label htmlFor="file">Compartir archivo <span className="opacity-50 text-xs">(Imagen, Video, Audio, máximo 25mb)</span>
                <input className="mt-3 border p-8 rounded-lg w-full" type="file" name="file" id="file" />
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full text-xl dark:bg-white rounded-full dark:text-black mt-8 px-4 py-2">Enviar</button>
      </form>
    </div>
  </section>
  )
}