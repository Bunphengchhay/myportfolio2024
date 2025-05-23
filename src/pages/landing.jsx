/* global gtag */

import { Element } from "react-scroll";
import Nav from "./nav";
import Overview from "./overview";
import Education from "./education";
import Skills from "./skills";
import Experiences from "./experience";
import Projects from "./projects";
import Courses from "./courses";
import Footer from "./footer";
import MobileNav from "./mobilenav";
import Chatbot from "./chatbot";
import { useState} from "react";
import Tictactoe from "./tictactoe";
import MemoryCardGame from "./memorycard";
import { useEffect, use } from "react";


function Landing() {
    const [isDarkMode, setDarkMode] = useState(false)
    const [isChabotEnable, setEnableChatBot] = useState(false)
    const [isChatbotOpen, setChatbotOpen] = useState(false);
    const toggleDarkMode = () => setDarkMode(!isDarkMode);

    const toggleEnableChatbot = () =>{
        setEnableChatBot(!isChabotEnable);
        setChatbotOpen(!isChatbotOpen);
    }

    const mainStyle = {
        // backgroundColor: isDarkMode ? "#030712" : "#f9f9f7",
        backgroundColor: isDarkMode ? "#070c0b" : "#f9f9f7",
        color: isDarkMode ? "#ffffff" : "#111827",
        transition: "all 0.3s ease",
    };
    useEffect(() => {
        const handleScroll = () => {
          const sections = ['Overview', 'Educations', 'Skills', 'Experiences', 'Projects', 'Courses', 'Footers'];
          for (const section of sections) {
            const el = document.querySelector(`[name='${section}']`);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                // Send page_view event to Google Analytics
                if (typeof gtag === 'function') {
                  gtag('event', 'page_view', {
                    page_title: section,
                    page_path: `/${section.toLowerCase()}`,
                  });
                }
                break;
              }
            }
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
      

    return ( 
        <div className="!font-inter w-full h-full flex flex-col justify-center items-center" style={mainStyle}>
            <div className="w-full max-w-[2000px] px-3">
                <MobileNav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleEnableChatbot={toggleEnableChatbot} isChatbotEnable={isChabotEnable}/>
                <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleEnableChatbot={toggleEnableChatbot} isChatbotEnable={isChabotEnable}/>
                <Element name= 'Overview' className="w-full mb-10 mt-5 relative"> 
                    <Overview toggleEnableChatbot={toggleEnableChatbot} isChatbotEnable={isChabotEnable}/>
                </Element>
                <div className="w-full h-auto relative z-20" style={mainStyle}>
                    {/* </section> */}
                    <Element name= 'Educations'> <Education/> </Element>

                    <Element name= 'Skills'> <Skills/> </Element>

                    {/* <Element name= 'Experiences'> <EXP/> </Element> */}
                    
                    <Element name= 'Experiences'> <Experiences isDarkMode={isDarkMode} mainStyle={mainStyle}/> </Element>
            
                    <Element name= 'Projects' > <Projects isDarkMode={isDarkMode} mainStyle={mainStyle}/> </Element>

                    {/* <BallBouncerGame/> */}
                    <Tictactoe/>

                    <MemoryCardGame/>

                    <Element name= 'Courses'> <Courses isDarkMode={isDarkMode} mainStyle={mainStyle} /> </Element>

                    <Element name= 'Footers'> <Footer isDarkMode={isDarkMode}/> </Element>
                    
                </div>
                {isChabotEnable && <Chatbot isDarkMode={isDarkMode} isChatbotOpen={isChatbotOpen}/>}
            </div>
            {/* <Element name="Ending" className="w-full z-21">
                <Ending isDarkMode={isDarkMode} mainStyle={mainStyle} />
        
            </Element> */}
        
        </div>
     );
}

export default Landing;