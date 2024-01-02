import sobreMi from '../images/sobreMi.png'
const Educacion= () => {
  return (
    <div className="mt-20 flex flex-col  " id="education">
        <div className="w-3/5">
            <h2 className="font-bold text-xl antialiased tracking-2 text-violet-600">Sobre Mí</h2>
        </div>
        <div className="flex items-center">
          <p className='md:w-3/5'>
            Estoy actualmente en el 7mo semestre de Ingeniería de Sistemas e Informática en la 
            Universidad Tecnológica del Perú, desde agosto de 2020.PArticipé en la hackathon de
            El Comercio, donde contribuí a un proyecto para ubicar hospitales despues de un sismo,
            también participé en un taller de JavaScript auspiciado por{" "} 
            <span className="text-red-600 font-bold">Google</span>{" "} 
            <span className="text-sky-600 font-bold">Developer</span>{" "}  
            <span className="text-green-600 font-bold">Student</span>{" "}  
            <span className="text-yellow-600 font-bold">Clubs</span>.
          </p>
          <div className='w-1/3 bg-violet-100 hidden md:flex items-center justify-center rounded-full'>
            <img src={sobreMi} alt="image about me"  />
          </div>
        </div>
        
    </div>
  )
}

export default Educacion