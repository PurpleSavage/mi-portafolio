
type IDENTIFICADORSKILLS = `${string}-${string}-${string}-${string}-${string}`
type skill={
  name:string,
  idSkill:IDENTIFICADORSKILLS
}
type ObjSkill={
  title:string,
  element:skill[]
  id:IDENTIFICADORSKILLS
  
}

const objSkills:ObjSkill[]=[
  {
    title:"Backend",
    element:[
      {
        name:"Python",
        idSkill:crypto.randomUUID()
      },
      {
        name:"Express",
        idSkill:crypto.randomUUID()
      }, 
      {
        name:"Flask",
        idSkill:crypto.randomUUID()
      }, 
      {
        name:"Node.js",
        idSkill:crypto.randomUUID()
      }
    ],
    id:crypto.randomUUID(),

  },
  {
    title:"Frontend",
    element:[
      {
        name:"React",
        idSkill:crypto.randomUUID()
      },
      {
        name:"Tailwindcss",
        idSkill:crypto.randomUUID()
      },
      {
        name:"CSS",
        idSkill:crypto.randomUUID()
      },
      {
        name:"HTML",
        idSkill:crypto.randomUUID()
      }
    ],
    id:crypto.randomUUID(),
    
  },
  {
    title:"Bases de datos",
    element:[
      {
        name:"Mysql",
        idSkill:crypto.randomUUID()
      },
      {
        name:"Mongodb",
        idSkill:crypto.randomUUID()
      }
    ],
    id:crypto.randomUUID(),
   
  },
  {
    title:"Otros",
    element:[
      {
        name:"Git",
        idSkill:crypto.randomUUID()
      }
    ],
    id:crypto.randomUUID(),
    
  }
]

const Skills = () => {
  return (
    <section className="mt-20 flex flex-col  " id="skills" >
        <div className="w-3/5" id="skills">
            <h2 className="font-bold text-2xl antialiased tracking-2 text-violet-600">Skills</h2>
        </div>
        <section className="flex justify-around mt-4 flex-wrap gap-5 ">
          {
            objSkills.map((stack)=>(
               <div key={stack.id} >
                  <h3 className="font-bold text-lg">{stack.title}</h3>
                  <ul>
                    {
                      stack.element.map((el)=>(
                        <li key={el.idSkill}>{el.name}</li>
                      ))
                    }
                  </ul>
               </div>
            ))
          }
        </section>
    </section>
  )
}

export default Skills