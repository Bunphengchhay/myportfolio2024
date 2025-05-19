import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Parallax } from "react-parallax";
import me from '../artifact/me001.JPG';
import kismetlogo from '../artifact/kismet_ai_xyz.png'
import tlbulogo from '../artifact/tlbu.png'
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import linkedLogo from '../artifact/icons8-linkedin-80.png';
import githubLogo from '../artifact/icons8-github-100.png';
import resumeLogo from '../artifact/icons8-resume-100.png';
import myresume from '../artifact/intern_sde_05202.pdf';
// import awsLogo from '../artifact/aws.png'

function Overview({toggleEnableChatbot, isChatbotEnable}) {
    // const awsLogo = 'https://images.icon-icons.com/2407/PNG/512/aws_icon_146074.png'
    // const intelBlackLogo = 'https://i.pinimg.com/736x/17/35/2f/17352fcf0626d3e553839e902fc14f5a.jpg'
    const name = "Hey, I'm Bunpheng".split("").map(char => char === " " ? "\u00A0" : char);
    const controls = useAnimation();
    const nameRef = useRef(null);
    const isInView = useInView(nameRef, { threshold: 0.5 }); // { once: true } or `{ amount: 0.5 }` for partial visibility
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 15%", "end 5%"]

    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const letterVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: i * 0.09,
            type: "spring",
            stiffness: 500,
            damping: 30,
        },
        }),
    };

    useEffect(() => {
        if (isInView) {
        controls.start("visible");
        } else {
        controls.start("hidden"); // Reset animation when out of view
        }
    }, [isInView, controls]);
    

  return (
    <div className='w-full'>
      <section className="w-full h-auto flex flex-col items-center justify-center md:flex-row mb-7 md:mb-25 ">
        <div className='w-full flex-1 text-center'>
          {/* <h1 className='text-4xl font-bold mb-2 text-gray-900'> Hey, I'm Bunpheng </h1> */}
          <h1
            ref={nameRef}
            className="text-4xl font-bold mb-2 flex justify-center whitespace-pre-wrap"
            >
            {name.map((char, i) => (
                <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={letterVariants}
                className="inline-block"
                >
                {char}
                </motion.span>
            ))}
            </h1>

          <p className='text-sm'> I'm a Software Engineer </p>
          <p className='text-sm'>
            Leveraging AIML and Cloud Infrastructure to build impactful applications and improve user's experiences
          </p>
          <p className='text-sm text-gray-500 mt-2'> Currently at @Intel, Ex - @AWS SA, Ex -  @Kismet XYZ SE </p>
          {/* <div className='w-full flex justify-center mt-2 gap-6'>
                <img src={awsLogo} alt='aws logo' width={30} height={30} className='rounded-[50%]'/>
                <img src={intelBlackLogo} alt='intel logo' width={30} height={30} className='rounded-[50%]'/>      
          </div> */}
        </div>  
      </section>

      {/* Image Parallax */}
      <div className='w-full relative z-20 mb-10'>
        <Parallax
          bgImage={me}
          strength={-400}
          bgImageStyle={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'scale(0.5)'
          }}
          className='w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[1200px] rounded-3xl'
        />
      </div>

      {/* Scroll spacer to enable animation */}
      <div className='h-auto relative'>
        <div ref={containerRef} className='sticky '>
          <motion.div
            style={{ scale, opacity }}
            className='w-full bg-stone-800 text-sm rounded-3xl p-6 text-white shadow-lg'
          >
            <h1 className='text-4xl font-bold mb-0 text-white'> About Me</h1>
            <p className=' text-sm mb-2 mt-0 text-yellow-500'> I am a Software Engineer</p>
            <p >
                I have been working in the non profit organization for a few years. I have gained valuable experience in customer service, team management, and problem-solving. I am now transitioning into the tech field, where I can leverage my skills to make a positive impact.
                I have obtained my Bachelor of Science in Computer Scinece from Sacramento State University in May 2023. I am currently pursuing a Master of Science in Data Science at Boston University. I am passionate about using technology to solve real-world problems and improve people's lives.
                     <br/><br/>
                I have worked at <strong> Amazon Web Services (AWS) </strong> as an Associate Solutions Architect Intern. I have gained valuable experience in cloud computing, DevOps, and system design. 
                I have also worked as Fullstack AIML Engineer at <strong> Kismet XYZ </strong> where I deepen my knowledge in AIML applicaitons and realtime data processing including Agentic AI, RAG, ETL pipeline and data visualization.
                I am now looking for opportunities to apply my skills in a challenging and dynamic environment.
            </p>
            {/* <div className='flex justify-center mt-10 gap-6'>
                {
                    myContact.map((item, index) => (
                        <img key={index} src={item.icon} alt={item.title} className="w-[50px] h-[40px] object-contain"/>
                    ))
                }
            </div> */}

            <div className='mt-3'>
                <h1 className='font-bold'> Want to learn more about me ?</h1>
                <p className="italic">An AI-powered bot that answers questions about my background, skills, and projects.</p>
                <p className="italic">
                Powered by RAG and LangGraph, running on Hugging Face endpoints, with a React app hosted on AWS.
                </p>


                <div className='flex justify-start mt-3 gap-2'>
                    <h3 className="text-xl font-bold">Meet Pence Bot </h3>
                    <img src='https://cdn-icons-png.flaticon.com/512/11719/11719585.png' alt='pence bot' width={30} height={30} className='rounded-[50%]'/>
                </div>
                <button onClick={() => {toggleEnableChatbot()}}
                    className="bg-blue-600 text-white px-2 py-1 mt-2 rounded hover:bg-blue-700">
                        Try It Now
                    </button>
            </div>

            <div className='mt-5'>
                <p> Bunpheng Chhay (Pence)</p>
                <p> pencechhay@gmail.com</p>
                <p> 609-742-9679</p>
                <p> Boston, Massachusettes</p>
            </div>
            <div className="flex justify-center mt-3 gap-6">
            {myContact.map((item, index) => (
                <a
                key={index}
                href={item.link}
                target={item.title === "resume" ? "_blank" : "_blank"} // resume opens in new tab
                rel="noopener noreferrer"
                download={item.title === "resume"} // triggers download if browser supports it
                >
                <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[50px] h-[40px] object-contain hover:scale-110 transition-transform duration-200"
                />
                </a>
            ))}
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

const myContact = [
    {
        title: 'resume',
        link: myresume,
        icon: resumeLogo
    },
    {
        title: 'linkedin',
        link: 'https://www.linkedin.com/in/bunphengchhay/',
        icon: linkedLogo
    },
    {
        title: 'github',
        link: 'https://github.com/Bunphengchhay',
        icon: githubLogo
    },
]


const aboutMeIcon = {
    intel: 'https://w7.pngwing.com/pngs/541/896/png-transparent-circle-intel-round-icon-popular-services-brands-vol-2-icon-thumbnail.png',
    kismet: kismetlogo,
    aws: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/aws-color.png',
    tlbu: tlbulogo
}