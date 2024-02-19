import "./style/main.css"
import Navigation from "./navigation/navigation"
import { useState, useEffect } from "react"
import { Element} from 'react-scroll';
import SocialContact from "./view/social";
import me02 from "./artifact/me02.png"
import Skills from "./view/skills";
import "./style/skills.css"
import Skill01 from "./view/skill01";
import AWSExp from "./view/awsExp";
import SchoolProject from "./view/schoolproject";
import Footer from "./view/footer";
import Datascience2 from "./view/datascience2";
import debounce from 'lodash.debounce';
import CourseTaken from "./view/courses";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [introFixedTop, setIntroFixedTop] = useState("intro-fixed");
  // const [isNavVisible, setIsNavVisible] = useState(true);
  // // keep track of scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <div>
        <header>
          {scrollPosition < 1000 && <Navigation scrollPosition = {scrollPosition}/>}
          {/* {isNavVisible && <Navigation scrollPosition={scrollPosition} />} */}
        </header>
        <div className="main-content1">
            <Element name= 'home' className="introduction" >
              {scrollPosition < 500 && <div className= {introFixedTop} style={{color: 'black'}} id="intro-main">
                <div className="mainfixedTop">
                  <div>
                    <div>
                      <img src={me02} style={{width: '22rem', height: '15rem'}} alt="my photo"/>
                    </div>
                    <h1 style={{fontSize: '1.5rem', marginBottom: '0px'}}> Hi there!</h1>
                    <div className="myintro"> 
                      <p style={{fontSize: '0.8rem'}}> I am Bunpheng CHHAY (PENCE), a Computer Science Student. I am passionate about <strong> DevSecOps, System Design and Cloud Infrastructure, Data Science,</strong> and utilizing <strong> Deep Learning </strong> models for business insights. </p>
                    </div>
                
                    <div className="flex-container-2">
                      <SocialContact />
                    </div>
                  </div>
                </div>
                <div className="mainfixedBottom">
                  <div>
                    <h1> PENCE </h1>                                                                                   
                    <p style={{margin: 0}}> BUNPHENG CHHAY</p>
                    <p style={{fontSize: '0.8rem'}}> I am Computer Science Student. I am passionate about <strong> DevSecOps, System Design and Cloud Infrastructure, Data Science,</strong> and utilizing <strong> Deep Learning </strong> models for business insights. </p>
                  </div>
                </div>
              </div>}
            </Element>

              <div className="body-content" style={{maxWidth: '1500px', margin: '0 auto', minHeight: '100vh'}}>
                    <Skills/>
              </div>
        
        </div>
        <div className="main-content2" style={{maxWidth: '1500px', margin: '0 auto',minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
          <Element name = 'skills'>
            <h1 style={{marginBottom: 0, fontSize: '2rem'}}> Technical Skills </h1>
            <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0, marginBottom: '20px'}}> </div>
            <p style={{fontSize: '1rem'}}>
              These skills have been honed through academic pursuits, internships, and personal projects. I maintain a continuous enthusiasm for learning new programming languages and tools. Currently, my focus lies in SecDevOps and Data Science, and I am passionate about harnessing the power of AI/ML for valuable business insights.
            </p>

            <Skill01/>
          </Element>
        </div>

        <div className="main-content2" style={{ maxWidth: '1500px', margin: '0 auto'}}>
          <Element name = 'workexperience'>
            <h1 style={{marginBottom: 0., fontSize: '2rem'}}> Industrial Experiences  </h1>
            <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0, marginBottom: '20px'}}> </div>
            <p style={{fontSize: '1rem'}}>
              With three years of non technical experience at a startup, I contributed to diverse projects in hospitality, real estate, legal, marketing, HR, and IT. Motivated by a passion for technology, I pursued a B.S. in Computer Science, leading to an internship at Amazon Web Services as an Associate Solutions Architect. Managing two AI/ML projects further inspired me to pursue an M.S. in Software Engineering, specializing in Data Science.
            </p>
            <div>
  
         </div>
              <AWSExp/>
          </Element>
        </div>

        <div className="main-content2">
          <Element name = 'schoolproject'>
            <div style={{margineTop: '10px', maxWidth: '1500px', margin: '0 auto'}}>
            <h1 style={{marginBottom: 0, marginTop: 50, fontSize: '2rem'}}> Course Projects </h1>
            <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0,marginBottom: 50}}> </div>
            <SchoolProject/>
            </div>
            <h1 style={{marginBottom: 0, marginTop: 80, textAlign: 'center', fontSize: '2rem', color: '#4D5D53'}}> Data Sciences </h1>
            <div style={{width: '90vw', height: 'auto', display: 'flex', justifyContent: 'center',overflow: 'hidden'}}>
              <Datascience2/>
            </div>
          </Element>
        </div>

        <div className="main-content2">
          <Element name = 'coursetakens'>
            <div style={{margineTop: '10px', maxWidth: '1500px', margin: '0 auto'}}>
            <h1 style={{marginBottom: 0, marginTop: 50, fontSize: '2rem'}}> Courses Taken </h1>
            <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0,marginBottom: 50}}> </div>
            <CourseTaken/>
            </div>
          </Element>
        </div>
    
        <div >
          <Element name = 'personalproject' style={{marginBottom: '100px'}}>
              <h1 style={{fontSize: '2rem'}}> Personal Projects  </h1>
              <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0}}> </div>
              <p> Coming Soon </p>
          </Element>
        </div>
        <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0}}> </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default App;