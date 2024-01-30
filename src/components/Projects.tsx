import { useState } from "react"
type IDENTIFICADOR = `${string}-${string}-${string}-${string}-${string}`
type ObjProjects={
    title:string
    url:string
    urlProject:string
    id:IDENTIFICADOR
}
const objProjects:ObjProjects[]=[
    {
        title:"CRM",
        url:"https://firebasestorage.googleapis.com/v0/b/portafolio-5f5dc.appspot.com/o/images%2Fcrm-mockup.png?alt=media&token=6d29e5d1-bd89-4f28-92e0-3815b009a887",
        id:crypto.randomUUID(),
        urlProject:"https://crm-frontend-react.vercel.app/",
    },
    {
        title:"Route 66",
        url:"https://firebasestorage.googleapis.com/v0/b/admintask-f0dcc.appspot.com/o/media%2FTreeRoute66.png?alt=media&token=ffe6d870-c4c5-4fa5-9e9a-a08fc7cc20b4",
        id:crypto.randomUUID(),
        urlProject:"https://adm-task-frontend-h3rv.vercel.app/",

    },
    {
      title:"Control de gastos",
      url:"https://firebasestorage.googleapis.com/v0/b/admintask-f0dcc.appspot.com/o/media%2FcontrolGastos.png?alt=media&token=014ad8f9-01f2-459b-b16a-fa4ea3673ff7",
      id:crypto.randomUUID(),
      urlProject:"https://sunny-cat-691a2f.netlify.app/",
    },
    {
      title:"Clima",
      url:"https://firebasestorage.googleapis.com/v0/b/admintask-f0dcc.appspot.com/o/media%2FclimaReact.png?alt=media&token=87951bad-296f-41e8-a8fa-cc9f517c8e99",
      id:crypto.randomUUID(),
      urlProject:"https://clima-purplesavge.netlify.app/",
    },
    {
      title:"Cotizador-criptos",
      url:"https://firebasestorage.googleapis.com/v0/b/portafolio-5f5dc.appspot.com/o/images%2Fcotizador-criptos.png?alt=media&token=fe1ce2a2-f5b2-4d4d-b2f3-769b3f1478ec",
      id:crypto.randomUUID(),
      urlProject:"https://cotizador-criptos-budkurvrj-pauls-projects-5734a1cd.vercel.app/"
    },
    {
      title:"Juego del gato",
      url:"https://firebasestorage.googleapis.com/v0/b/admintask-f0dcc.appspot.com/o/media%2FjuegoGato.png?alt=media&token=be7571b4-21bf-4286-8cb8-695237c9ecdd",
      id:crypto.randomUUID(),
      urlProject:"https://tictactoe-pruplesavage.netlify.app/",
    } 
]

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleMouseEnter = (id: IDENTIFICADOR) => {
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };
  return (
    <section className="mt-20 flex flex-col" id="projects">
      <div className="w-3/5">
        <h2 className="font-bold text-2xl antialiased tracking-2 text-violet-600">Projects</h2>
      </div>
      <section className="flex flex-wrap gap-4 mt-4 border-2 rounded-lg px-2 py-4 justify-center shadow-2xl">
      {
        objProjects.map((project)=>(
          <div key={project.id}>
            <h3 className="text-center mb-2 font-bold">{project.title}</h3>
            <div className="w-52 md:w-72  overflow-hidden rounded-lg ">
              <a href={project.urlProject} target="_blank">
                <img 
                  src={project.url} 
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                  alt="image project" 
                  className={`w-52 md:w-72 rounded-lg hover:cursor-pointer 
                  ${hoveredProject === project.id ?"scale-110 transition-transform duration-150 ease-in":" transition-transform duration-150 ease-in"}`} 
                />
              </a>
            </div>
          </div>
        ))
      }
      </section>
    </section>
  )
}

export default Projects