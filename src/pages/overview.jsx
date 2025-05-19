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
import { useState } from 'react';
// import awsLogo from '../artifact/aws.png'

function Overview({toggleEnableChatbot, isChatbotEnable}) {
    // const awsLogo = 'https://images.icon-icons.com/2407/PNG/512/aws_icon_146074.png'
    // const intelBlackLogo = 'https://i.pinimg.com/736x/17/35/2f/17352fcf0626d3e553839e902fc14f5a.jpg'
    const [isReadMore, setIsReadMore] = useState(false)
    const name = "Hey, I'm Bunpheng".split("").map(char => char === " " ? "\u00A0" : char);
    const controls = useAnimation();
    const nameRef = useRef(null);
    const isInView = useInView(nameRef, { threshold: 0.5 }); // { once: true } or `{ amount: 0.5 }` for partial visibility
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0%", "end 5%"]

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
    

    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.3,
        },
      },
    };
    
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    
    const bounceTransition = {
      y: {
        duration: 1.5,
        yoyo: Infinity,  // repeat forever
        ease: "easeOut",
      },
    };

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
          <p className='text-sm text-gray-500 mt-2'>Currently @Intel · Previously @AWS SA · @Kismet XYZ SE</p>
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

            <div>
              <p>
                With a background in nonprofit, management, and finance, I bring a unique lens to problem-solving and innovation. Transitioning into tech has enabled me to build intelligent systems that make a real difference for people, businesses, and communities. I’m driven to create technology that not only solves problems but delivers meaningful, lasting impact.
              </p>

              <button className="underline" onClick={() => setIsReadMore(!isReadMore)}>
                {isReadMore ? 'Show Less' : 'Read More'}
              </button>
              
              {isReadMore && (
              <div className="mt-4">
                <p>
                  My career began in the nonprofit sector, where I developed strong skills in customer service, team leadership, and problem-solving—always with empathy and impact at the core. To expand my reach, I earned a B.S. in Computer Science from Sacramento State and am currently pursuing an M.S. in Data Science at Boston University, focusing on machine learning and real-world data applications.
                  <br /><br />
                  I’ve worked at <strong>AWS</strong> as an Associate Solutions Architect, focusing on cloud infrastructure and DevOps, and at <strong>Kismet XYZ</strong> as a Fullstack AIML Engineer, building real-time intelligent systems using RAG, Agentic AI, and analytics pipelines. In summer 2025, I’ll join <strong>Intel</strong> as a Graduate Technical Software Intern, contributing to data-driven tools for chip manufacturing optimization.
                  <br /><br />
                  I'm passionate about creating scalable, human-centered solutions that solve meaningful problems across domains.
                </p>
              </div>
            )}

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
      <motion.div
        className="my-24 text-center text-xs"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-bold text-3xl"
          variants={itemVariants}
        >
          Want to learn more about me?
        </motion.h1>

        <motion.p className="italic mt-2" variants={itemVariants}>
          Chat with an AI-powered bot that knows all about my background, skills, and projects — built by me, for you.
        </motion.p>

        <motion.p className="italic" variants={itemVariants}>
          Powered by Retrieval-Augmented Generation (RAG) and LangGraph, deployed on Hugging Face, and hosted on AWS with a custom React frontend.
        </motion.p>

        <motion.div
          className="flex justify-center mt-4 items-center gap-2"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold">Meet Pence Bot</h3>
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/11719/11719585.png"
            alt="pence bot"
            width={30}
            height={30}
            className="rounded-full"
            animate={{
              y: ["0%", "-10%", "0%"], // simple bounce
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.button
          onClick={() => toggleEnableChatbot()}
          className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(59,130,246,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          Try It Now
        </motion.button>
      </motion.div>

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