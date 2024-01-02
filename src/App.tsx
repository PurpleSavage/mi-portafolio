import Aside from "./components/Aside";
import Home from "./components/Home";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Educacion from "./components/Eduacacion";
import { DiMozilla } from "react-icons/di";
function App() {
  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center pb-5">
      <header 
        className="flex justify-between p-4 items-center 
        w-full fixed top-0 left-0 right-0 border-b-2 z-40"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <button 
          onClick={() => setCloseMenu(true)} 
        >
          <CiMenuBurger />
        </button>
        <div className="flex gap-2 items-center">
          <DiMozilla size={25} />
          <p className="text-violet-600 font-bold">Paul</p>
        </div>
      </header>
      <Aside setCloseMenu={setCloseMenu} closeMenu={closeMenu} />
      <section className="flex-grow  flex flex-col md:w-1/2 py-2  px-2 mt-20 gap-15">
        <Home />
        <Skills />
        <Projects/>
        <Educacion/>
      </section>
    </div>
  );
}

export default App;
