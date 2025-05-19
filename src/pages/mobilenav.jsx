import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import me from '../artifact/IMG_5358.jpg';
import linkedLogo from '../artifact/icons8-linkedin-50.png';
import githubLogo from '../artifact/icons8-github-50-black.png';
import resumeLogo from '../artifact/icons8-resume-100.png';
import myresume from '../artifact/intern_sde_05202.pdf';
import linkedLogoDarkMode from '../artifact/icons8-linkedin-80.png';
import githubLogoDarkMode from '../artifact/icons8-github-100.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const navItems = [
  { name: "Overview" },
  { name: "Educations" },
  { name: "Skills" },
  { name: "Experiences" },
  { name: "Projects" },
  { name: "Courses" },
  { name: "Footers", label: "Contact" },
];

const MobileNav = ({isDarkMode, toggleDarkMode, toggleEnableChatbot, isChatbotEnable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);
  const mainStyle = {
    backgroundColor: isDarkMode ? "#030712" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#111827",
    transition: "all 0.3s ease",
  };

  return (
    <div className='w-full relative top-2 flex justify-end'>
      {/* Toggle Button */}
      <div className="w-full sticky flex justify-between items-center z-[9999] md:hidden">
        <TryMe isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleEnableChatbot={toggleEnableChatbot} isChatbotEnable={isChatbotEnable}/>
        <Hamburger isOpen={isOpen} toggle={toggleNav} isDarkMode={isDarkMode}/>
      </div>

      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed z-[9998] top-0 left-0 w-full h-full flex flex-col gap-2 text-gray-900 text-md md:hidden" style={mainStyle}>
          <div className="w-full h-[220px] flex justify-center items-center">
            <div className="w-[94%] h-full bg-gray-900 rounded-b-2xl" style={{backgroundImage: `url(${me})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold mt-2"> Hey, I'm Bunpheng </h1>
            <p className="text-xs"> I'm a Software Engineer </p>
            <p className="text-xs"> Welcome to my portfolio site </p>
          </div>
          <div className="w-full flex flex-col p-5 gap-2">
          {navItems.map((item, index) => (
            <Link
                key={index}
                to={item.name}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={toggleNav}
                className="cursor-pointer border-b-[1px] group overflow-hidden"
            >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                {item.label || item.name}
                </span>
            </Link>
            ))}

          </div>
          <div className="fixed bottom-0 mb-2 w-full flex justify-center items-center">
            <div className='flex justify-start gap-2 my-2 border-[1px] border-solid border-gray-500 p-2'>
                    {
                        myContact.map((item, index) => {
                            return (
                                <img
                                key={index}
                                src={isDarkMode ? item.iconDarkMode : item.icon}
                                alt={item.title}
                                width={25}
                                height={25}
                                className='hover:cursor-pointer hover:scale-110 transition-transform duration-200'
                                />
                            )})
                    }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

const TryMe = ({isDarkMode, toggleDarkMode, toggleEnableChatbot, isChatbotEnable}) => {
      const [menuOpen, setMenuOpen] = useState(false);
      const dropdownRef = useRef(null);
    
  return (
    <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex justify-between items-center border rounded-xl mr-2 px-2 py-1 gap-1 text-xs bg-stone-800 text-white hover:opacity-90 transition-all duration-200"
                >
                Try Me
                <ArrowCircleRightIcon fontSize="small" className="hover:cursor-pointer hover:scale-110 transition-transform duration-200" />
            </button>
    
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 text-gray-900 left-1">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      toggleDarkMode();
                      setMenuOpen(false);
                    }}
                  >
                    <div className="w-full flex justify-between items-center">
                    {isDarkMode ? <LightModeIcon fontSize="small" />  :  <DarkModeIcon fontSize="small" />}
                    {isDarkMode ? <p> Light Mode</p> : <p> Dark Mode</p>}
                    </div>
                  </button>
                  <button className="w-full flex justify-between items-center px-4 py-2 text-sm" 
                  onClick={() => {toggleEnableChatbot();  setMenuOpen(false);}}> 
                    <img src='https://cdn-icons-png.flaticon.com/512/11719/11719585.png' alt='avarta logo' width={20} height={20} />
                    {isChatbotEnable  ? <p> Deactivate me </p> : <p> Activate me </p>}
                </button>
                    
                </div>
              )}
            </div>
  )
}

const myContact = [
    {
        title: 'resume',
        link: myresume,
        icon: resumeLogo,
        iconDarkMode: resumeLogo
    },
    {
        title: 'linkedin',
        link: 'https://www.linkedin.com/in/bunphengchhay/',
        icon: linkedLogo,
        iconDarkMode: linkedLogoDarkMode
    },
    {
        title: 'github',
        link: 'https://github.com/Bunphengchhay',
        icon: githubLogo,
        iconDarkMode: githubLogoDarkMode
    },
]

const Hamburger = ({ isOpen, toggle, isDarkMode }) => {
  const baseLine = `${isDarkMode ? "bg-white" : "bg-white"} block h-0.5 w-6 rounded transition duration-300 ease-in-out`;

  return (
    <div className="inline-flex items-center justify-center border border-white border-[1px] py-2 px-3 bg-stone-800 rounded-xl" onClick={toggle}>
      <button
        className="flex flex-col gap-[1px] items-center w-fit z-[9999] md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`${baseLine} ${isOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-[3px]"}`}
        />
        <span
          className={`${baseLine} ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`${baseLine} ${isOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-[3px]"}`}
        />
      </button>
    </div>
  );
};



// const Hamburger = ({ isOpen, toggle, isDarkMode }) => {
//     return (
//       <button
//         className={`flex flex-col justify-center items-center w-10 h-10 z-[9999] group md:hidden border-[1px] border-solid ${isDarkMode ? 'border-white' : 'border-gray-900'}`}
//         onClick={toggle}
//         aria-label="Toggle menu"
//       >
//         <span
//         className={`${
//             isDarkMode ? "bg-white" : "bg-gray-900"
//         } block h-0.5 w-6 transform transition duration-300 ease-in-out ${
//             isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
//         }`}
//         />
//         <span
//         className={`${
//             isDarkMode ? "bg-white" : "bg-gray-900"
//         } block h-0.5 w-6 transition duration-300 ease-in-out ${
//             isOpen ? "opacity-0" : "opacity-100"
//         }`}
//         />
//         <span
//         className={`${
//             isDarkMode ? "bg-white" : "bg-gray-900"
//         } block h-0.5 w-6 transform transition duration-300 ease-in-out ${
//             isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
//         }`}
//         />

//       </button>
//     );
//   };
  