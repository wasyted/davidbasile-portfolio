import './WavesProject.scss'

export default function WavesProject(){
  return(
    <div style={{backgroundColor: 'var(--black)', padding: '10px'}}>
      <div className='waves-project'>
        <div>
          <h2>ENCONTRAR, AYUDAR Y POTENCIAR</h2>
          <div>
            <p>
              1. Eso es Visual Waves y junto con <a href="">@flowciano</a> estamos muy contentos de poder dar a conocer este proyecto que venimos laburando en silencio   hace tiempo.
            </p>
            <p>
              2. Espero que nos den su apoyo compartiendo y comentando, sabemos que lo mejor está por venir, tanto para nosotros como para vos también.
            </p>
          </div>
        </div>
        <div className="video-container">
          <video autoPlay style={{maxWidth: '100%'}} muted loop src="src/assets/Snapinsta.app_video_F94EBBDB259980AAF2752595E986BF81_video_dashinit.mp4"></video>
        </div>
        <div className='waves-text-container'>
            <p style={{alignSelf: 'start'}}>
              3. Y aquí estamos nuevamente en la grandiosa Ciudad de Buenos Aires.
              La ciudad para nosotros es inspiración, caos, desorden, rebeldía, pero tambien es arte
              música, cine, teatro y mucho más.
              <br /> <br />
              4. Cuna de grandes artistas de tango, rock, trap, etcétera
              Una ciudad con miles y miles de historias por contar, de sueños por cumplir.
              <br /> <br />
              5. Pero que entre todos nosotros tenemos un denominador común, un genuino amor por la música.
              Y como buen entusiastas y amantes de crear y producir junto a Ciano, un gran amigo y productor musical
              decidimos llevar a cabo este proyecto. 
            </p>
            <p style={{alignSelf: 'start'}}>
              6. Nuestra idea es encontrar, ayudar y potenciar
              a nuevos artistas, dándoles un espacio no solo para grabar su música, sino tambien
              sus videos y registrar todo ese proceso creativo que muy pocas veces se ve.
              Solo nos interesa tu creatividad y las ganas de crear libremente. 
              <br /> <br />
              7.Esperamos poder conocer
              y concretar con más personas. Sabemos que allí afuera hay muchísimo arte por ser descubierto.
              <br /> <br />
              <span style={{alignSelf: 'self-end', fontFamily: 'bull', fontWeight: '600'}}>8. Visual Waves by David Basile - good waves by FlowCiano</span>
            </p>
        </div>
      </div>
    </div>
  )
}