import { IoCloseOutline } from "react-icons/io5";
import { scroller } from 'react-scroll';
interface AsideProps {
  setCloseMenu: React.Dispatch<React.SetStateAction<boolean>>;
  closeMenu:boolean
}

const Aside= ({ setCloseMenu,closeMenu}:AsideProps) => {
  const handleScrollTo = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 500,
      smooth: true,
      offset: -50, // Ajusta el offset según tus necesidades
    });
  };
  return (
    <aside 
      className={`fixed top-0 -left-40 
      ${closeMenu ? 'translate-x-40 transition-transform duration-150 ease-out':'-translate-x-40 transition-transform duration-150 ease-out'} 
      bottom-0 py-4 shadow-2xl flex flex-col bg-slate-50 rounded-r-xl px-4 z-50`}
    >
      <div className="flex justify-end ">
        <button className="w-10 border-b-stone-300" onClick={() => setCloseMenu(false)}>
          <IoCloseOutline size={20} />
        </button>
      </div>
      <nav className="flex-grow flex items-center px-4">
        <ul className="flex flex-col gap-16">
          <li>
            <a onClick={() => handleScrollTo('home')} className="cursor-pointer">Home</a>
          </li>
          <li>
            <a onClick={() => handleScrollTo('skills')} className="cursor-pointer">Skills</a>
          </li>
          <li>
            <a onClick={() => handleScrollTo('projects')} className="cursor-pointer">My projects</a>
          </li>
          <li>
            <a onClick={() => handleScrollTo('education')} className="cursor-pointer">Education</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
