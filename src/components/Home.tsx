import img from '../images/coding.png'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
const LINKCV='https://firebasestorage.googleapis.com/v0/b/portafolio-5f5dc.appspot.com/o/files%2FCV_2023_JEANPAULZURITAPALOMINO.pdf?alt=media&token=319e67d6-ce1d-490e-b8b6-dd11e533f104'
const Home = () => {

  return (
    <section className="flex justify-center items-center gap-4 flex-col  md:flex-row" id="home">
      <div className=' w-3/4 md:w-3/5'>
        <h1 className="text-violet-600 text-4xl font-bold antialiased tracking-2 text-center md:text-left">Jean Paul</h1>
        <h3 className="font-bold text-lg antialiased tracking-2 text-center md:text-left">FullStack Developer</h3>
        <p className='mt-2 text-center md:text-left'>Apasionado del desarrollo web, transformo ideas en experiencias digitales cautivadoras. 
          Mi enfoque innovador y amor por la programación definen mi viaje creativo.
          </p>
        <div className="flex mt-4 justify-between items-center ">
          <ul className="flex gap-4">
            <li><a href="#" className='hover:text-violet-700'><CiLinkedin size={25}/></a></li>
            <li><a href="https://github.com/PurpleSavage?tab=repositories" target="_blank" className='hover:text-violet-700'><FaGithub size={25} /></a></li>
            <li><a href="https://www.instagram.com/1_game123/" target="_blank"  className='hover:text-violet-700'><CiInstagram size={25}/></a></li>
          </ul>
          <a 
            className='bg-violet-600 hover:bg-violet-700 hover:shadow-2xl p-2 rounded-lg text-center '
            href={LINKCV}
            download="CV_2023_JEANPAULZURITAPALOMINO.pdf"
            target="_blank"
            >Descargar Cv
          </a>
        </div>
      </div>
      <div className='w-2/5 bg-violet-200 flex items-center justify-center rounded-full'>
        <img src={img} alt="Programmer coding image" className='w-64'/>
      </div>
    </section>
  )
}

export default Home