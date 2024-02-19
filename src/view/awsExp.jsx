import "../style/work.css"
import allIntern from "../artifact/myaws.JPG";
import { Parallax } from "react-parallax";
import { Link, Element } from "react-scroll";
import tlbu from "../artifact/tlbu.png"
import awsLogo from "../artifact/aws.svg"
// const Ai = "https://images.pexels.com/photos/8386358/pexels-photo-8386358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const img1 = "https://www.forwardnetworks.com/wp-content/uploads/2023/10/AWS_logo_RGB.jpg"

function AWSExp() {
    const awsIcon = "url('../artifact/aws.svg')"
    return ( 
        <div className="aws" style={{maxWidth: '1200px', margin: '0 auto',  marginBottom: '100px'}}>
         <Element >
            <Parallax bgImage={allIntern} strength={-80} style={{borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}>
                <div style={{width: 'inherit', height: '300px', color: 'white', display: 'flex', justifyContent: 'end', alignItems: 'end'}}>
                    <div style={{height: 50, width: 200}}>
                        <h3 style={{fontSize: '0.8rem', textAlign: 'center', marginBottom: 0}}> Tech Intern </h3>
                        <h3 style={{fontSize: '1rem', textAlign: 'center', marginTop: 0}}> Amazon HQ 2022 </h3>
                    </div>
                </div>
            </Parallax>
         </Element> 
         <div style={{height: 50}}> </div>
         <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0, marginBottom: 30}}> </div>
     
            <Element style={{textAlign: 'center'}}>
                <h1 style={{fontSize: '16px'}}> Associate Solutions Architect </h1>
                <h3 style={{color: '#40826D', margin: 0}}> Amazon Web Services </h3>
                <h1 style={{fontSize: '16px', margin: 0, marginBottom: 20}}> Intern 2022 Cohort, Seattle WA</h1>

                <svg width="100" height="100" enable-background="new 0 0 1024 1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" fill="#232f3e" r="512"/><path d="m400.3 479.1c0 6.3.7 11.4 1.9 15.1 1.4 3.8 3.1 7.9 5.5 12.3.9 1.3 1.2 2.7 1.2 3.9 0 1.7-1 3.4-3.2 5.1l-10.7 7.1c-1.3.9-2.8 1.5-4.4 1.5-1.7 0-3.4-.9-5.1-2.4-2.3-2.5-4.3-5.1-6.1-8-1.9-3.3-3.7-6.6-5.3-10-13.3 15.7-30 23.5-50.1 23.5-14.3 0-25.7-4.1-34-12.2-8.3-8.2-12.6-19.1-12.6-32.7 0-14.5 5.1-26.2 15.5-35.1s24.2-13.3 41.7-13.3c5.8 0 11.8.5 18 1.4 6.3.9 12.8 2.2 19.6 3.8v-12.4c0-12.9-2.7-22-8-27.2-5.4-5.3-14.6-7.8-27.7-7.8-6 0-12.1.7-18.4 2.2s-12.4 3.4-18.4 5.8c-1.9.9-3.9 1.6-6 2.2-.9.3-1.8.4-2.7.5-2.4 0-3.6-1.7-3.6-5.3v-8.3c0-2.7.3-4.8 1.2-6 1.3-1.5 2.9-2.8 4.8-3.6 6-3.1 13.1-5.6 21.4-7.7 8.7-2.2 17.6-3.3 26.6-3.2 20.3 0 35.1 4.6 44.6 13.8 9.4 9.2 14.1 23.1 14.1 41.9v55.2zm-69.1 25.9c5.6 0 11.4-1 17.5-3.1 6.1-2 11.6-5.8 16.2-10.9 2.7-3.2 4.8-6.8 5.8-10.9s1.7-9 1.7-14.8v-7.1c-5.2-1.3-10.4-2.2-15.7-2.9s-10.7-1-16-1c-11.4 0-19.8 2.2-25.4 6.8s-8.3 11.1-8.3 19.6c0 8 2 14 6.3 18 4.1 4.3 10 6.3 17.9 6.3zm136.7 18.4c-3.1 0-5.1-.5-6.5-1.7-1.4-1-2.6-3.4-3.6-6.6l-40-131.6c-.8-2.2-1.3-4.5-1.5-6.8 0-2.7 1.4-4.3 4.1-4.3h16.7c3.2 0 5.4.5 6.6 1.7 1.4 1 2.4 3.4 3.4 6.7l28.6 112.7 26.6-112.7c.9-3.4 1.9-5.6 3.2-6.7 2-1.3 4.4-1.9 6.8-1.7h13.7c3.2 0 5.5.5 6.8 1.7 1.3 1 2.6 3.4 3.2 6.7l26.9 114.1 29.5-114.1c1-3.4 2.2-5.6 3.4-6.7 2-1.3 4.3-1.9 6.6-1.7h15.9c2.7 0 4.3 1.4 4.3 4.3 0 .9-.2 1.7-.4 2.7-.3 1.5-.7 2.9-1.2 4.3l-41 131.6c-1 3.4-2.2 5.6-3.6 6.6-1.9 1.2-4.2 1.8-6.5 1.7h-14.7c-3.2 0-5.4-.5-6.8-1.7-1.3-1.2-2.5-3.4-3.2-6.8l-26.4-109.8-26.2 109.7c-.9 3.4-1.9 5.6-3.2 6.8-1.4 1.2-3.8 1.7-6.8 1.7zm218.8 4.6c-8.9 0-17.7-1-26.2-3.1-8.5-2-15.1-4.3-19.6-6.8-2.7-1.5-4.6-3.2-5.3-4.8-.7-1.5-1-3.1-1-4.8v-8.7c0-3.6 1.4-5.3 3.9-5.3 1 0 2 .2 3.1.5 1 .3 2.6 1 4.3 1.7 5.8 2.6 12.1 4.6 18.7 6 6.8 1.4 13.4 2 20.3 2 10.7 0 19.1-1.9 24.9-5.6 5.6-3.4 9-9.6 8.9-16.2.1-4.4-1.5-8.7-4.6-11.9s-8.9-6.1-17.2-8.9l-24.7-7.7c-12.4-3.9-21.6-9.7-27.2-17.3-5.5-7.1-8.5-15.8-8.5-24.7 0-7.1 1.6-13.4 4.6-18.9 3.1-5.4 7.1-10.2 12.3-14 5.1-3.9 10.9-6.8 17.7-8.9 6.8-2 14-2.9 21.5-2.9 3.7 0 7.7.2 11.4.7 3.9.5 7.5 1.2 11.1 1.9 3.4.9 6.7 1.7 9.7 2.7 3.1 1 5.5 2 7.2 3.1 2 1 3.8 2.5 5.1 4.3 1.1 1.7 1.6 3.6 1.5 5.6v8c0 3.6-1.4 5.5-3.9 5.5-2.3-.3-4.5-1-6.5-2-10.3-4.5-21.4-6.8-32.7-6.6-9.7 0-17.4 1.5-22.7 4.8-5.3 3.2-8 8.2-8 15.1 0 4.8 1.7 8.9 5.1 12.1s9.7 6.5 18.7 9.4l24.2 7.6c12.2 3.9 21.1 9.4 26.4 16.4s7.8 15 7.8 23.8c0 7.3-1.5 14-4.4 19.8-3.1 5.8-7.2 10.9-12.4 15-5.3 4.3-11.6 7.3-18.9 9.5-7.9 2.4-15.9 3.6-24.6 3.6zm32.2 82.7c-56 41.4-137.4 63.3-207.4 63.3-98.1 0-186.5-36.3-253.2-96.6-5.3-4.8-.5-11.2 5.8-7.5 72.2 41.9 161.3 67.3 253.4 67.3 62.2 0 130.4-12.9 193.3-39.5 9.3-4.2 17.3 6.2 8.1 13zm23.3-26.5c-7.2-9.2-47.4-4.4-65.6-2.2-5.4.7-6.3-4.1-1.3-7.7 32-22.5 84.6-16 90.8-8.5 6.1 7.7-1.7 60.3-31.7 85.5-4.6 3.9-9 1.9-7-3.2 6.8-16.9 22-54.9 14.8-63.9z" fill="#fff"/></svg>
                <div id = 'exp' style={{width: '100%', height: '300px', display: "flex", alignItems: 'center', overflow: 'scroll'}}>
                    
                {
                    awsExperiences.map((experience, index) => (
                        <div key={index} style={{minWidth: '250px', minHeight: '200px', margin: '5px'}} id = "expbox">
                            <p style={{fontSize: '16px', color: 'white', marginTop: '5%', backgroundColor: '#40826D'}}>{experience.title}</p>
                            <div style={{width: '90%', height: '1px', backgroundColor: '#40826D', margin: '5%'}}/>
                            <p style={{fontSize: '0.7rem'}}>{experience.task}</p>
                        </div>
                    ))
                }

                </div>
            </Element>

        
            <Element >
                    <div style={{width: 'inherit'}}>
                        <h1 style={{fontSize: '1.2rem', textAlign: 'left', color: '#001800', fontWeight: 'bolder'}}> Tech Stack </h1>
                        <div>
                                        <div style={{textAlign: 'left'}} className="techstack">
                                            <p> <strong> AWS Cloud :</strong>  Lambda, S3, Rekognition, Polly, Amplify, Connect, IAM, API-Gateway, SageMaker, AWS SDK, AWS CF, AWS CodeCommit</p>
                                            <p> <strong> Language : </strong> Python, Javascript </p>
                                            <p> <strong> Framework :</strong> React.js </p>
                                            <p> <strong> Web Dev : </strong> HTTPs API, Deployed Fullstack App, Serverless Computing, Distributed System Design, CI/CD pipeline, Postman </p>
                                            <p> <strong> Others :</strong> Huggingface, Gradio, Jupyter notebook, Image Caption, Transformer, JSON, Github, AWS Architecture Design</p>
                                            <p> <strong> Soft Skills :</strong> Collaboration, Self-Starter, Research, Cross Functional, Product Management, Leadership</p>
                                        </div>
                                    </div>
                    </div>
            </Element>
        
         <div style={{height: 50}}> </div>
         <div style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 0, marginBottom: 30}}> </div>
         <Element style={{textAlign: 'center'}}>
                <h1 style={{fontSize: '16px'}}> Associate Manager </h1>
                <h3 style={{color: '#40826D', margin: 0}}> TLBU Foundations </h3>
                <h1 style={{fontSize: '16px', margin: 0}}> Atlantic City, NJ</h1>
                <h1 style={{fontSize: '16px', margin: 0, marginBottom: 20}}> 2017 - 2019</h1>

                <img src = {tlbu} alt="tlbu logo" width= '100px' height= '100px'/>
                <div id = 'exp' style={{width: '100%', height: '300px', display: "flex", alignItems: 'center', overflow: 'scroll'}}>
                    
                {
                    tlbuExperiences.map((experience, index) => (
                        <div key={index} style={{minWidth: '250px', minHeight: '200px', margin: '5px'}} id = "expbox">
                            <p style={{fontSize: '16px', color: 'white', marginTop: '5%', backgroundColor: '#40826D'}}>{experience.title}</p>
                            <div style={{width: '90%', height: '1px', backgroundColor: '#40826D', margin: '5%'}}/>
                            <p style={{fontSize: '0.7rem'}}>{experience.task}</p>
                        </div>
                    ))
                }

                </div>
            </Element>

         <Element >
            {/* <Parallax strength={80}> */}
                <div style={{width: 'inherit'}}>
                <h1 style={{fontSize: '1.2rem', textAlign: 'left', color: '#001800', fontWeight: 'bolder'}}> Skills</h1>
                    <div>
                                    <div style={{textAlign: 'left'}} className="techstack">
                                    <p> <strong> Cross Functional Team : </strong> Legal, IT, Marketing, HR, Maintenance, International Teams, C-Suite </p>
                                    <p> <strong> Project Management :</strong>  Investment, Acquisitions, Hotel Management, Property Management</p>
                                    <p> <strong> Finance/Accounting : </strong> Bugetting, Cashflow, Venture Capital</p>
                                    <p> <strong> Marketing : </strong>  Digital Marketing, Marketing Strategy </p>
                                    <p> <strong> Information System: </strong> Hotel Check-in/Booking Software, Microsoft Words, Excel, and Powerpoint</p>
                                    </div>
                                </div>
                </div>
            {/* </Parallax> */}
         </Element>

        </div>
     );
}

export default AWSExp;

const awsExperiences = [
    {
        title: 'Project Management',
        task: 'Managed, Deployed, Developed, and Demo 2 Applications. Conversational Chatbot and Serverless Application for visual impaired '
    },
    {
        title: 'Cloud Solutions Architect',
        task: 'Disect user requirements, developed POC, built 2 AWS architecture diagrams, built and deployed prototypes '
    },
    {
        title: 'Event Driven Cloud Development',
        task: 'Architected and constructed a Distributed System for AI/ML workflow leveraging Step Functions, implemented Cloud Storage Solutions utilizing S3, deployed serverless Web Applications through AWS Lambda and Amplify, and CI/CD pipelines.'   
    },
    {
        title: 'Fullstack Development',
        task: 'Built and deployed HTTPS API endpoint, built in multiple login authentications provider, design and built front end to demonstrate usecase, and deployed full stack web applications'
    },
    {
        title: 'Cross functional work',
        task: 'Cross-functional teamwork, collaboration, and provide support to manager'
    },
    {
        title: 'Award',
        task: 'Achieved 1st place for AWS Tech Intern 2022 PRFAQ Contest'
    }
]

const tlbuExperiences =[
    {
        title: 'Cross-Functional Work',
        task: 'Developed and executed scalable business plans for high school and hotel including market strategy, customer relations, legal, IT and HR '
    },
    {
        title: 'Support',
        task: 'Liaised between President, VP, and Executive manager and provided recommendations over multiple projects including high school project, property, and hotel management'
    },
    {
        title: 'Project Management',
        task: 'Co-leaded in property acquisition, established internal organization structure for high school project, managed cash flow and budgeting, ensured project milestone and its executions'
    }
]