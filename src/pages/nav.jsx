/* global gtag */

import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


function Nav({ isDarkMode, toggleDarkMode, toggleEnableChatbot, isChatbotEnable }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { to: 'Overview', label: 'Overview' },
    { to: 'Educations', label: 'Educations' },
    { to: 'Experiences', label: 'Experiences' },
    { to: 'Skills', label: 'Skills' },
    { to: 'Projects', label: 'Projects' },
    { to: 'Courses', label: 'Courses' },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full top-0 sticky left-0 z-10 transition-all duration-300">
        <div
            className={`hidden md:flex relative items-center py-3 mt-2 rounded-xl transition-all duration-300 ${
            scrolled
                ? "bg-white text-black shadow-md"
                : "bg-stone-800 text-white"
            }`}
        >

        {/* Centered nav items */}
        <div className="flex-1 flex justify-center gap-8">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer text-sm font-semibold px-2 py-1 hover:scale-110 transition-transform duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Dropdown on the far right */}
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex justify-between items-center border rounded-xl mr-2 px-2 py-1 gap-1 text-xs bg-stone-800 text-white hover:opacity-90 transition-all duration-200"
                >
                Try Me
                <ArrowCircleRightIcon fontSize="small" className="hover:cursor-pointer hover:scale-110 transition-transform duration-200" />
            </button>


          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 text-gray-900">
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
                <button className="w-full flex justify-between items-center px-4 py-2" 
                // onClick={() => {toggleEnableChatbot();  setMenuOpen(false);}}
                onClick={() => {
                  toggleEnableChatbot();
                  setMenuOpen(false);
                  if (typeof gtag === 'function') {
                    gtag('event', 'chatbot_toggle', {
                      event_category: 'Chatbot',
                      event_label: isChatbotEnable ? 'Deactivated' : 'Activated',
                      value: isChatbotEnable ? 0 : 1,
                    });
                  }
                }}  
                > 
                    <img src='https://cdn-icons-png.flaticon.com/512/11719/11719585.png' alt='avarta logo' width={20} height={20} />
                    {isChatbotEnable  ? <p> Deactivate me </p> : <p> Activate me </p>}
                </button>
        
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;