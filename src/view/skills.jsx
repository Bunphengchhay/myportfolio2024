import React from "react";
import { Parallax, Background } from "react-parallax";
import { Link, Element } from "react-scroll";
import "../style/skills.css";
const styles = {
  // fontFamily: "Dosis",
  textAlign: "center",
//   margin: "10px",
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const image1 =
  "https://www.sjsu.edu/_images/buildings/ADV_about-sjsu_2.jpg";

const Skills = () => (
  <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
  <div style={styles} >
    {/* <h1 style={{ textAlign: "left", color: 'white', borderBottom: '1px solid white' }}> Educations </h1> */}
    <Element name="education">
        <Parallax bgImage={image1} strength={500}>
        <h1 style={{ textAlign: "left", color: 'white', textAlign: 'center', fontSize: '3rem',transform: 'translateY(150px)'}}> Educations </h1>
            <div style={{ height: 600, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                    <div className="cardblur">
                        <div style={{width: '100%', margin: '10px'}}>
                            <div style={{width: '100%', display: 'flex', margin: 0, alignItems:'center'}}>
                                    <h3 style={{flex: 3, fontSize: '1rem', margin: 0, textAlign: 'left', fontWeight: 'bold'}}> M.S Computer Software Engineering</h3>
                                    <p style={{flex: 1, fontWeight: 'bold', margin: 0, textAlign: 'right'}}> Exp. 2025 </p>
                            </div>
                            <div style={{width: '100%', height: '1px', backgroundColor: 'grey'}}> </div>
                            <div style={{textAlign: 'left'}}> 
                                <p style={{margin: 0}}> Specialized in Data Science </p>
                                <p style={{margin: 0}}> San Jose State University</p>
                              
                            </div>
                            <br/>
                            <div style={{width: '100%', display: 'flex', margin: 0}}>
                                    <h3 style={{flex: 2, fontSize: '1rem', margin: 0, textAlign: 'left', fontWeight: 'bold'}}> B.S Computer Science</h3>
                                    {/* <p style={{flex: 1, fontWeight: 'bold', margin: 0, textAlign: 'right'}}> 2023 </p> */}
                            </div>
                            <div style={{width: '100%', height: '1px', backgroundColor: 'grey'}}> </div>
                            <div style={{textAlign: 'left'}}> 
                              <p style={{margin: 0}}> Minor in Statistic  </p>
                                <p style={{margin: 0}}> California State University - Sacramento   </p>
                            </div>
                            <br/>
                            <div style={{width: '100%', display: 'flex', margin: 0}}>
                                    <h3 style={{flex: 2, fontSize: '1rem', margin: 0, textAlign: 'left', fontWeight: 'bold'}}> L.L.M Business, Finance, and Corporation </h3>
                                    {/* <p style={{flex: 1, fontWeight: 'bold', margin: 0, textAlign: 'right'}}> 2017 </p> */}
                            </div>
                            <div style={{width: '100%', height: '1px', backgroundColor: 'grey'}}> </div>
                            <div style={{textAlign: 'left'}}> 
                                <p style={{margin: 0}}> The George Washington University  </p>
                            </div>
                            <div> 

                            </div>
                    </div>
                </div>
            </div> 
        </Parallax>
    </Element>


    <Element name="certificate">
    {/* <Parallax style={{backgroundColor: 'white'}} strength={-80}> */}
        <div style={{ height: 600, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div class="rectangle-container">
                <div class="rectangle">
                    <div class="line"></div>
                    <div className="letter-container">
                    <div class="letter">A</div>
                    <div class="letter">W</div>
                    <div class="letter">S</div>
                    </div>
                    <div> 
                        <h1 style={{color: 'white', fontSize: '2rem'}}> Certified Cloud Practitioner </h1>
                        <p> 2022 </p>
                    </div>
                    
                </div>
                <img src= "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png" alt="cloudpractioneriCon" width= "100px" height= "100px" />
                </div>

            </div>
        {/* </Parallax> */}
    </Element> 
  </div>
  </div>
);

export default Skills;
