import { useRef, useMemo, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import allIntern from "../artifact/myaws.JPG";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AnimationEXP from "./animationExp";
import { Parallax } from "react-parallax";

export default function Experiences({isDarkMode, mainStyle}) {
  return (
    <div className="w-full h-auto relative mt-20">
    <div className="w-full p-4 z-20 sticky" style={mainStyle}>
        <h1 className="text-3xl font-bold"> Experiences </h1>
        <p className="text-sm mt-2">
                    Hands-on experience across AI engineering, cloud solutions, and team
                    leadership — including impactful roles at Kismet, AWS, and TLBU.
                    </p>
    </div>
    <div className="w-full bg-stone-900 flex flex-col justify-center items-center rounded-3xl pb-3"> 
      <AnimationEXP/>
      <div className="w-full">
      <a href="https://prismic.io/blog/css-animation-examples" target="_blank" rel="noopener noreferrer" className="text-xs text-left text-gray-500 ml-3"> Credit to Prismic</a>
    </div>
    </div>
    {/* <div className="w-full grid grid-cols-1 md:grid-rows-2 gap-5 relative">
   */}
    <div className="w-full h-auto flex justify-center items-center my-16">
      <div className="w-full h-full overflow-y-auto scroll-smooth">
              {data.map((item, i) => (
                  
                  <Card key={item.Employer + i} i={i} item={item} />
              
              ))}

      </div>
    </div>
    <div className="bg-stone-900 flex justify-center items-center rounded-3xl p-4"> 
     <div className='w-full relative z-20'>
            <Parallax
              bgImage={allIntern}
              strength={80}
              bgImageStyle={{
                objectFit: 'cover',
                objectPosition: 'center',
                transform: 'scale(0.5)'
              }}
              className='w-full h-[250px] md:[400px] lg:h-[500px] xl:h-[700px] rounded-3xl'
            />
            <p className="text-gray-500 text-xs mt-3 mx-2"> AWS SA Cohort 2022</p>
          </div>
    {/* </div> */}
    </div>
    </div>
  );
}

function Card({ item, i }) {
      const containerRef = useRef(null);
      const { scrollYProgress } = useScroll({
          target: containerRef,
          offset: ["start 25%", "end 5%"]

      });

      const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
      const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const [isExpanded, setIsExpanded] = useState(false);

    const cardVariants = {
      offscreen: { opacity: 0, y: 30 },
      onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
      },
    };

    const handleExpand = (e) => {
      e.stopPropagation();
      setIsExpanded(true);
    };
    const handleClose = () => setIsExpanded(false);

    return (
      <>
          <motion.div
              ref={containerRef}
              className='mt-3'
              style={{
                  opacity,
                  scale,
                  zIndex: isExpanded ? 50 : 1,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
              >
              <div className="w-full flex justify-center items-center border-b-[1px] hover:cursor-pointer hover:bg-stone-900 hover:rounded-3xl hover:text-white hover:border-none transition-all duration-300">
                  <div
                  className="w-full px-4 py-2 flex flex-col text-left overflow-y-auto"
                  onClick={handleExpand}
                  >
                  <div className="w-full flex flex-cols justify-start items-center gap-4 md:gap-16 items-center">
                      <img
                      src={item.Logo}
                      alt="logo"
                      className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-full"
                      />
                      <div className="w-full flex justify-between items-center">
                        <div>
                          <h2 className="text-md md:text-xl font-bold">{item.Position}</h2>
                          <div className="flex flex-start gap-2 items-center">
                            <h3 className="text-sm">{item.Employer}</h3>
                            <p className="text-sm">{item.Date}</p>
                          </div>
                        </div>
                        <ArrowCircleRightIcon fontSize="small" className="hover:cursor-pointer hover:scale-110 transition-transform duration-200" />
                      </div>
                  </div>
                  </div>
              </div>
          </motion.div>


        {/* FULLSCREEN EXPANDED CARD + BACKDROP */}
        <AnimatePresence>
          {isExpanded && (
            <>
              {/* BLUR BACKGROUND */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
              />

              {/* FULLSCREEN CARD */}
              <motion.div
                className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center p-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <motion.div
                  className="bg-stone-800 text-white p-3 rounded-2xl w-full max-w-3xl h-[85vh] overflow-y-auto relative"
                >
                  <button
                    className="absolute top-4 right-4 text-white text-xl"
                    onClick={handleClose}
                  >
                    ✕
                  </button>

                  <img
                    src={item.Logo}
                    alt="logo"
                    className="w-16 h-16 object-contain rounded-full mt-6"
                  />
                  <h2 className="text-2xl font-bold mt-4">{item.Position}</h2>
                  <div className="flex gap-4 items-center mt-2">
                    <h3 className="text-base text-yellow-400">{item.Employer}</h3>
                    <p className="text-base">{item.Date}</p>
                  </div>

                  <div className="mt-4 text-sm">
                    <p className="font-semibold">Task:</p>
                    <p className="mb-2 ml-2">{item.Summary}</p>
                    {item.Description?.length > 0 && (
                      <>
                          <p className="font-semibold">Achievements:</p>
                          {item.Description.map((value, key) => (
                          <li key={key} className="ml-2">{value}</li>
                          ))}
                      </>
                      )}

                    {item.Award?.length > 0 && (
                      <>
                          <p className="font-semibold mt-2">Highlight:</p>
                          {item.Award.map((value, key) => (
                          <li key={key} className="ml-2">{value}</li>
                          ))}
                      </>
                      )}

                    <p className="font-semibold mt-2">Tech Stack:</p>
                    <p className="ml-2">{item.TechStack}</p>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
    }


const data = [
    {
        Employer: 'Intel Corporation',
        Position: 'Incoming Graduate Software Engineer Intern',
        Date: 'June, 2025 - August, 2025',
        Description: ['Incoming'],
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
    },
]
