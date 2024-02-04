import "../style/work.css";
import { useParallax, Parallax } from 'react-scroll-parallax';
import aws from "../artifact/awsicon.png"
import tlbu from "../artifact/tlbu.png"

function WorkExperience() {
  const vwToPixel = (percentage) => {
    const vw = window.innerWidth;
    return (vw * percentage) / 180;
  };

  return (
    <div className="work">
      <div className="parallax-container">
        <Parallax
          className="parallax-element"
          translateX={[0, vwToPixel(80), 'easeOutQuint']}
          translateY={[-100, 100, 'easeInQuint']}
        >
          <img  src={aws} alt="AWS Logo" id="awsLogo" style={{width: '10rem'}}/>
        </Parallax>
        <Parallax
          className="parallax-element"
          translateX={[vwToPixel(270), vwToPixel(50), 'easeOutQuint']}
          translateY={[250, 150, 'easeInQuint']}
        >
          <img src={tlbu}  style={{width: '8rem' }}alt="tlbu"/>
        </Parallax>
      </div>
    </div>
  );
}

export default WorkExperience;



