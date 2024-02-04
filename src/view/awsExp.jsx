import "../style/work.css"
import allIntern from "../artifact/myaws.JPG";
import { Parallax } from "react-parallax";
import { Link, Element } from "react-scroll";
import tlbu from "../artifact/tlbuicon1.png"
// const Ai = "https://images.pexels.com/photos/8386358/pexels-photo-8386358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const img1 = "https://www.forwardnetworks.com/wp-content/uploads/2023/10/AWS_logo_RGB.jpg"

function AWSExp() {
    return ( 
        <div className="aws" style={{maxWidth: '1500px', margin: '0 auto'}}>
         <Element >
            <Parallax bgImage={allIntern} strength={-80} style={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}>
                <div style={{width: 'inherit', height: '70vh', color: 'white', display: 'flex', justifyContent: 'end', alignItems: 'end'}}>
                    <div style={{height: 50, width: 200}}>
                        <h3 style={{fontSize: '0.8rem', textAlign: 'center', marginBottom: 0}}> Tech Intern </h3>
                        <h3 style={{fontSize: '1rem', textAlign: 'center', marginTop: 0}}> Amazon HQ 2022 </h3>
                    </div>
                </div>
            </Parallax>
         </Element> 
         <div style={{height: 50}}> </div>
         <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0, marginBottom: 30}}> </div>
         <Element name= 'awsExp'>
            <Parallax bgImage={img1} strength={-180}>
                <div style={{ width: 'inherit', height: '35vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: 0 }}> Associate Solutions Architect </h1>
                <p style={{ marginTop: 0 }}> Amazon Web Services</p>
                <h2 style={{ fontSize: '1.5rem' }}> Achievement & Duties</h2>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div id='experience-p'>
                    <p> Managed, Deployed, Developed, and Demo 2 serverless applications </p>
                    <p> Translate user requirements, developed POC and AWS architecture diagram, built cloud solutions</p>
                    <p> Built and deployed HTTPs API Endpoints and Distributed System, deployed fullstack and serverless application </p>
                    <p> Developed Backend, Frontend, System Design, CI/CD pipeline, and built Storage solutions </p>
                    <p> Built Conversation chatbot for both calling bot and textbot</p>
                    <p> Cross-functional teamwork, collaboration, and provide support to manager</p>
                    <p> Achieved 1st place for AWS Tech Intern 2022 PRFAQ Contest</p>
                    </div>
                </div>
                </div>
            </Parallax>
            </Element>

    
         <Element >
            <Parallax strength={80}>
                <div style={{width: 'inherit'}}>
                {/* <div style={{width: '20vw', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="card-image">
                        <h1 style={{fontSize: '1rem', textAlign: 'center'}}> Tech Stack </h1>
                    </div> */}
                    <h1 style={{fontSize: '1.2rem', textAlign: 'left', color: '#001800', fontWeight: 'bolder'}}> Tech Stack </h1>
                    <div>
                                    <div style={{textAlign: 'left'}} className="techstack">
                                        <p> <strong> AWS Cloud :</strong>  Lambda, S3, Rekognition, Polly, Amplify, Connect, IAM, API-Gateway, SageMaker, AWS SDK, AWS CF, AWS CodeCommit</p>
                                        <p> <strong> Language : </strong> Python, Javascript </p>
                                        <p> <strong> Framework :</strong> React.js </p>
                                        <p> <strong> Web Dev : </strong> HTTPs API, Deployed Fullstack App, Serverless Computing, Distributed System Design, CI/CD pipeline </p>
                                        <p> <strong> Others :</strong> Huggingface, Gradio, Jupyter notebook, Image Caption, Transformer, JSON, Github, AWS Architecture Design</p>
                                        <p> <strong> Soft Skills :</strong> Collaboration, Self-Starter, Research, Cross Functional, Product Management, Leadership</p>
                                    </div>
                                </div>
                </div>
            </Parallax>
         </Element> 
         <div style={{height: 50}}> </div>
         <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0}}> </div>
         <Element name='tlbuExp'>
            <Parallax bgImage={tlbu} strength={-100} style={{marginTop: 20}}>
                <div style={{width: 'inherit', height: '35vh', textAlign: 'center'}}>
                    <h1 style={{fontSize: '2rem', marginBottom: 0}}> Assistant Manager</h1>
                    <p style={{marginTop: 0}}> TLBU Foundation</p>
                    <h2 style={{fontSize: '1.5rem'}}> Achievement & Duties</h2>
                    <div style={{width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div id = 'experience-p'>
                        <p> Liaised between President, VP, and Executive manager over multiple projects including high school project, property, and hotel management </p>
                                <p> Developed and executed scalable business plans for high school and hotel including market strategy, customer relations, legal, IT and HR </p>
                                <p> Co-leaded in property acquisition, established internal organization structure for high school project, managed cash flow and budgeting </p>
                        </div>
                    </div>        
                </div>
            </Parallax>
         </Element> 

         <Element >
            <Parallax strength={80}>
                <div style={{width: 'inherit'}}>
                <h1 style={{fontSize: '1.2rem', textAlign: 'left', color: '#001800', fontWeight: 'bolder'}}> Skills</h1>
                    <div>
                                    <div style={{textAlign: 'left'}} className="techstack">
                                    <p> <strong> Cross Functional Team : </strong> Legal, IT, Marketing, HR, Maintenance, International Teams, C-Suite Management </p>
                                    <p> <strong> Project Management :</strong>  Investment, Acquisitions, Hotel Management, Property Management</p>
                                    <p> <strong> Finance/Accounting : </strong> Bugetting, Cashflow, Venture Capital</p>
                                    <p> <strong> Marketing : </strong>  Digital Marketing, Marketing Strategy </p>
                                    <p> <strong> Information System: </strong> Hotel Check-in/Booking Software, Microsoft Words, Excel, and Powerpoint</p>
                                    </div>
                                </div>
                </div>
            </Parallax>
         </Element>

        </div>
     );
}

export default AWSExp;