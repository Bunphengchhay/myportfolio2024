import { useState, useRef } from 'react';
import me from '../artifact/IMG_7972 2.jpg';
import Ending from './ending';
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import meandelevent from '../artifact/meandeleven.JPG'

const Courses = ({isDarkMode, mainStyle}) => {
    const [selectedItem, setSelectedItem] = useState('graduate');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
          target: containerRef,
          offset: ["start 15%", "end 25%"]
  
      });
      const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
      const y = useTransform(scrollYProgress, [0, 1], [0, -20]);
  return (
    <div>
        <div
        ref={containerRef}
        className='w-full min-h-screen rounded-3xl'
        style={{
        backgroundImage: `url(${meandelevent})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}
    >
        <motion.div className='relative w-full shadow-md rounded-3xl p-4' style={{backgroundColor: '#f9f9f7', scaleX, y}}>
            <div className='mb-10'>
                <h1 className='text-3xl text-stone-900 font-bold'> Courses Taken </h1>
                <p className='text-gray-500 text-sm'> Selected coursework highlighting core concepts in data science, software engineering, and machine learning, with hands-on experience in algorithms, data analysis, and modern computing systems.</p>
            </div>
            <nav className='flex justify-center items-center bg-stone-800 text-white font-bold text-lg p-2 gap-3 cursor-pointer rounded-xl'>
                <p className={selectedItem === 'associate' ? 'border-b-[1px] border-solid border-white' : ''} onClick={() => setSelectedItem('associate')}>Associate</p>
                <p className={selectedItem === 'undergrad' ? 'border-b-[1px] border-solid border-white' : ''} onClick={() => setSelectedItem('undergrad')}>Undergraduate</p>
                <p className={selectedItem === 'graduate' ? 'border-b-[1px] border-solid border-white' : ''} onClick={() => setSelectedItem('graduate')}>Graduate</p>
            </nav>
            
            <div style={{ display: selectedItem === 'associate' ? 'block' : 'none' }}>
                    <div className='my-4 text-sm'>
                        <h1 className='text-md text-gray-900 mb-2 font-bold'> Associate in Business Administration and Accounting </h1>
                        <div id = "line"></div>
                        {
                            associate.map((item, index) => (
                                <li key={index} className='text-sm text-gray-900'>{item}</li>
                            ))
                        }
                    </div>
                </div>

            <div style={{ display: selectedItem === 'undergrad' ? 'block' : 'none' }}>
            <div className='my-4 text-sm text-gray-900'>
                    <h1 className='text-md font-bold'> Computer Science Lower Division Courses </h1>
                    <div id = "line"></div>
                    {
                        underGrad['lowerdivision']?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                    <h1 className='text-md text-gray-900 mt-4 font-bold'> Upper Division Courses </h1>
                    <div id = "line"></div>
                    {
                        underGrad['upperdivison']?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                    <h1 className='text-md text-gray-900 mt-4 font-bold'> Math and Statistic</h1>
                    <div id = "line"></div>
                    {
                        underGrad['mathandscience']?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </div>
            </div>
            <div style={{ display: selectedItem === 'graduate' ? 'block' : 'none' }}>
                <div className='text-sm text-gray-900'>
                    <h1 className='text-md text-gray-900 mt-4 font-bold'> Computer Software Engineering Core </h1>
                    <div id = "line"></div>
                    {
                        grad['softwareengineering'].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                    <h1 className='text-md text-gray-900 mt-4 font-bold'> Specialization: Data Science </h1>
                    <div id = "line"></div>
                    {
                        grad['datascience'].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </div>
            </div>
            </motion.div>
        </div>
            <p className="text-center text-sm text-gray-500 mt-10 px-4">
            Thank you for visiting my portfolio. I hope this gave you insight into my journey, skills, and the passion I bring to every project. Feel free to reach out if you'd like to collaborate or connect.
            </p>
            <p className="text-center text-xs text-gray-400 px-4">
            Disclaimer: The views and content shared here are my own and do not represent the views of any organization I am affiliated with. Images and contents may be subjected to third parties copy right. All project work and code samples are for demonstration purposes only.
            </p>
            <p className="text-center text-xs text-gray-400 mt-2 px-4">
            &copy; 2025 Pence Chhay. All rights reserved.
        </p>
    </div>
  );
};

export default Courses;








const underGrad =
        {
            lowerdivision: [ 
            "Programming Concepts and Methodology I", "Programming Concepts and Methodology II",
            "Discrete Structures for Computer Science", "Introduction to Computer Architecture", "Introduction to Systems Programming in UNIX",
            ],
            upperdivison: [
            "Data Structures and Algorithm Analysis", "Computer Software Engineering", "	Object-Oriented Computer Graphics Programming",
            "Database Management Systems", "Advnace Database Management Systems", "	Computability and Formal Languages",
            "Computer Organization", "Computer Networking Fundamentals", "Operating System Principles",
            "Senior Project - Part I", "Senior Project - Part II", "Business and Computer Ethics",
            "Fieldwork in Computer Science"
            ],
            mathandscience:[
                "Introduction to Probability and Statistics", "	Introduction to Probability Theory",  "Calculus I", "Calculus II", "General Physics: Mechanics", "Introduction to Techniques of Operations Research"
            ]
        }

const grad = 
    {
        softwareengineering: [ "Enterprise Software Platforms", "Software Systems Engineering", "Computer Engineering Seminar"],
        datascience: ["Data Mining", "Deep Learning", "Business Intelligence Technologies"]

    }

const associate = [
    "Financial Accounting", "Intro to Business", "Principle of Management", "Composition I", "Managerial Accounting", "Macroeconomics", "Composition II", "Statistical Methods", "Principles of Marketing",
    "General Chemistry I", "Intro to Computer", "Microeconomics", "Business Ehtics", "Business Law", "Pre-Calculus", "General Psychology", "World Literature"
]

const LLM = [
    "Contracts I", "Prof Responsibility & Ethics", "Corporations", "Fundamental Issues in U.S Law",
    "Securities Regulation", "Venture Capital Law", "Secured Transactions", "International Business Transactions",
    "International Negotiations"
]