
import allIntern from "../artifact/myaws.JPG";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function EXP() {
  const boxSize = 400;

//   const containerRefHeader = useRef(null);
//   const { scrollYProgress: scrollYProgressHeader } = useScroll({
//     target: containerRefHeader,
//     offset: ["start 20%", "end 10%"],
//   });
  
//   const yTransforms = [
//   useTransform(scrollYProgressHeader, [0, 1], [0, 350]),
//   useTransform(scrollYProgressHeader, [0, 1], [0, 150]),
//   useTransform(scrollYProgressHeader, [0, 1], [0, 0]),
//   useTransform(scrollYProgressHeader, [0, 1], [0, 250]),
//   useTransform(scrollYProgressHeader, [0, 1], [0, 300])
// ];

const containerRefHeader = useRef(null);
const { scrollYProgress: scrollYProgressHeader } = useScroll({
  target: containerRefHeader,
  offset: ["start 20%", "end 10%"],
});

// Changing Y-transforms to X-transforms
const xTransforms = [
  useTransform(scrollYProgressHeader, [0, 1], [0, -350]), // Moves left
  useTransform(scrollYProgressHeader, [0, 1], [0, -150]), // Moves left but less
  useTransform(scrollYProgressHeader, [0, 1], [0, 0]),    // Stays centered
  useTransform(scrollYProgressHeader, [0, 1], [0, 150]),  // Moves right
  useTransform(scrollYProgressHeader, [0, 1], [0, 300])   // Moves further right
];


  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end end"],
  });
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity1 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // Smooth animations
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); // Faster spin
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]); // Scaling effect
  const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["5%", "80%", "20%", "50%"]); // Shape shifting


  return (
    <div className="w-full mt-20 relative" >
    <header
                className="h-[70vh] w-full flex justify-center items-center overflow-hidden relative"
                ref={containerRefHeader}
                >
                <div className="p-2 md:p-0 text-center">
                    <h2 className="text-6xl font-bold tracking-[-0.075em] leading-tight">
                    Experiences
                    </h2>
                    <p className="text-sm max-w-[600px] mx-auto mt-2">
                    Hands-on experience across AI engineering, cloud solutions, and team
                    leadership — including impactful roles at Kismet, AWS, and TLBU.
                    </p>
    
                    <div className="flex gap-4 justify-center mt-4 relative">
                    {data.map((item, index) => (
                        <motion.div
                        key={index}
                        style={{
                            x: xTransforms[index % xTransforms.length]
    
                        // whileInView={{: yTransforms[index % yTransforms.length]
    
                        }}
                        // whileInView={{ scale: 1, opacity: 1 }}
                        // initial={{ opacity: 0, scale: 2 }}
                        // transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="w-[50px] h-[50px] flex-shrink-0"
                        >
                        <img
                            src={item.Logo}
                            alt={item.name || `Logo ${index}`}
                            className="w-full h-full object-contain hover:scale-110 transition-transform duration-200 rounded-[50%]"
                        />
                        </motion.div>
                        
                    ))}
                    </div>
                </div>
            </header>
    <div className="w-full h-screen flex justify-center items-center overflow-y-scroll relative overflow-hidden" ref={scrollRef}>
      <div style={{paddingTop: "50vh", position: "relative", scale1, opacity1 }}>
        
        {/* Rotating and scaling box */}
        <motion.div
        style={{
            width: "min(100vw, 400px)",  // Responsive width for mobile
            height: "min(100vw, 400px)", // Keeping proportions
            position: "sticky",
            top: "25%",
            transform: "translateY(-50%)",
            rotate,
            scale,
            borderRadius,
            boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            maxWidth: "100vw", // Prevents overflow
            overflow: "hidden", // Ensures content stays within bounds
        }}
        className="bg-stone-800"
        />


        {/* Static centered text (NO rotation) */}
        <div className="mt-[250vh]"/>
       {data.map((item, index) => (
         <div
         key={index}
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            width: 400,
            height: '100vh',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
            <div className="text-center p-2 text-white">
                <h1 className="text-3xl font-bold"> {item.Employer}</h1>
                <div className="w-full flex ustify-between items-center mt-2 gap-2">
                    <img src={item.Logo} alt={item.name || `Logo`} className="w-[50px] h-[50px] object-contain rounded-[50%]" />
                    <div>
                        <h1 className="text-xs">{item.Position}</h1>
                        <p className="text-sm opacity-70">{item.Date}</p>
                    </div>
                    </div>
                    <div className="text-left mt-3 text-sm">
                        <h1 className="text-md font-bold"> Responsibility and Task</h1>
                        <p className="text-gray-400"> {item.Summary}</p>
                        {item?.Award && <h1 className="text-md font-bold mt-2"> Achievements</h1>}
                        <p className="text-gray-400"> {item.Award}</p>
                    </div>
                </div>
            </div>
        ))}
        <div className="mb-[50vh]"/>

      </div>
    </div>
    </div>
  );
}


const data = [
    {
        Employer: 'Intel Corporation',
        Position: 'Incoming Graduate Software Engineer Intern',
        Date: 'June, 2025 - August, 2025',
        Description: '',
        TechStack: 'Incoming',
        Logo: 'https://i.pinimg.com/736x/17/35/2f/17352fcf0626d3e553839e902fc14f5a.jpg',
        Summary: 'Incoming Work'
    },
    {
        Employer: 'Kismet XYZ',
        Position: 'Fullstack AIML Engineer Consultant',
        Date: 'Jan, 2025 - Present',
        Description: ['Developed Agentic AI solutions for chatbot applications', 'Enable tools calling including RAG, Email, Message, and Discord', 'Gathered requirements, developed POC and prototype', 'Built and deployed CI/CD pipeline and ETL pipelines', 'Built and deployed Frontend and Backend', 'Desinged database schema, Figma UI/UX, and Rest API endpoints'],
        TechStack: 'React, AWS(Amplify, Lambda, Dynamodb), Langgraph, LLM, Embeddings, Pinecone, FastAPI, Github Action, Python',
        Logo: 'https://media.licdn.com/dms/image/v2/D560BAQH5JpYErzUfrg/company-logo_200_200/company-logo_200_200/0/1687587005300/kismet_ai_xyz_logo?e=1752105600&v=beta&t=gEBHpt0NhEIt0j9ubxyYSoNlKyL9_4rOHVeB6X5sKnI',
        Summary: 'Developed Agentic AI system for chatbot applications, Realtime Data Ingestion and Analysis Dashboard System, and ETL pipeline on AWS cloud platform',
        Award: ['Built and Demoed Agentic AI Working Prototypes, Designed System Architecture for Analytical Realtime Dashboard, Optimized Cloud Cost and Performance']
    },
    {
        Employer: 'Freelance',
        Position: 'Fullstack Developer',
        Date: 'April, 2024 - Jan, 2025',
        Description: ['Garthered user requirments', 'Developed and Deployed React Web Apps', 'Figma Designed for UI/UX', 'Set up Ci/CD pipeline', 'Using google analytic for site tracking and SEO improvements in reuslting 40% increase in veiwer engagements', 'Interacted with clients to continue to improve product throught feedback loop and additional features such as seasonal promptions and others'],
        TechStack: 'React, AWS (Amplify, Route53), Google Analytic, CI/CD, GitHub, HTML/CSS, JavaScript',
        Logo: 'https://cdn-icons-png.flaticon.com/512/11719/11719585.png',
        Summary: 'Built and Deployed React APP, setup CI/CD pipeline, and SEO with Google Analytics',
        Award: ['Increase in 40% in viewers engagement in a first 3 months']
    },
    {
        Employer: 'Amazon Web Services',
        Position: 'Associate Solutions Architect Intern',
        Date: 'May, 2022 - Aug, 2022',
        Description: ['Designed and launched 2 end to end AIML apps: conversational bot, and serverless app feature at AWS reinvent',
            'Identify business requirement, developed POC, reference architecture, cost projection, and demoed two prototypes',
            'Built distributed event driven system for computer vision and NLP real time data analysis task, and ETL pipeline',
            'Deployed Rest API, monitoring system, and storage solutions for automatic trigger to frontend and backend task',
            'Provided technical support to customer project including research and report on data migration, security, and CI/CD',
            'Achieved 1st place for AWS Tech Intern 2022 PRFAQ Contest'],
        TechStack: 'Lambda, S3, Amplify, Rekognition, Connect, API gateway, Cloudwatch, X-ray, Step Function, Sagemaker, Python, HTTPS APIs, Computer Vision, NLP, Json, Gradio',
        Logo: 'https://static-00.iconduck.com/assets.00/aws-icon-512x512-4v2f55fn.png',
        Image: allIntern,
        Summary: 'Identified user requirments, built, deployed and demoed 2 AIML prototype including Event Drivent System Archtiecture, Storage Solutions, ETL Pipeline, CI/CD pipeline, and Cost optimization, analysis and projection',
        Award: ['1st place for AWS Tech Intern 2022 PRFAQ Contest', 'Prototype Feature at AWS Re:Invent 2022']
    },
    {
        Employer: 'TLBU Foundations',
        Position: 'Assistant Operation Manager',
        Date: 'May, 2016 - Aug, 2017',
        Description: ['Supported customer relations by addressing inquiries, resolving issues, and ensuring high satisfaction levels',
            'Identified target market, created business plan, market research, IT infrastructure, and optimized operation'],
        TechStack: 'Microsoft Office, Google Workspace, Hotel Management Software, Digital Marketing, SEO, Social Media Marketing',
        Logo: 'https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/29340571_2065909126997790_7394281761980547072_n.png?stp=dst-png&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tnTSZ2_Wzu0Q7kNvwF5l5Sj&_nc_oc=AdmJrWkJk2pOH_EAtCWv9EUe0A0WGquj3HmizEQskhvE-2hkIRC1bQROnmKOMU2hADM&_nc_zt=23&_nc_ht=scontent-bos5-1.xx&_nc_gid=eWFgH6Hhl2uh62SPTemR9w&oh=00_AfKymal8S2s4XzWwzKPcmgsR788pUTBN4pq4wEOS5w9x1Q&oe=68470B80',
        Summary: 'Supported customer relations, Identified markets, Created business plans and Operational Management'
    }
]