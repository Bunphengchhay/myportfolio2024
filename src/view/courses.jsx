import { useState } from 'react';
import '../style/coursetaken.css';
import me from '../artifact/IMG_7972 2.jpg';

const CourseTaken = () => {
  const [selectedItem, setSelectedItem] = useState('graduate');

  return (
    <div className='cards'>
      <div className='topCardNav'>
        <p className={selectedItem === 'associate' ? 'active' : ''} onClick={() => setSelectedItem('associate')}>Associate</p>
        <p className={selectedItem === 'undergrad' ? 'active' : ''} onClick={() => setSelectedItem('undergrad')}>Undergraduate</p>
        <p className={selectedItem === 'graduate' ? 'active' : ''} onClick={() => setSelectedItem('graduate')}>Graduate</p>
        <p className={selectedItem === 'LLM' ? 'active' : ''} onClick={() => setSelectedItem('LLM')}> LL. M Business</p>
      </div>
      
      <div style={{ display: selectedItem === 'associate' ? 'block' : 'none' }}>
            <div style={{margin: '10px'}} id = 'courseDescription'>
                <h1> Associate in Business Administration and Accounting </h1>
                <div id = "line"></div>
                {
                    associate.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </div>
        </div>

      <div style={{ display: selectedItem === 'undergrad' ? 'block' : 'none' }}>
      <div style={{margin: '10px'}} id = 'courseDescription'>
            <h1> Computer Science Lower Division Courses </h1>
            <div id = "line"></div>
            {
                underGrad['lowerdivision']?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
            <h1 style={{marginTop: '30px'}}> Upper Division Courses </h1>
            <div id = "line"></div>
            {
                underGrad['upperdivison']?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
             <h1 style={{marginTop: '30px'}}> Math and Statistic</h1>
            <div id = "line"></div>
            {
                underGrad['mathandscience']?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </div>
      </div>
      <div style={{ display: selectedItem === 'graduate' ? 'block' : 'none' }}>
        <div style={{margin: '10px'}} id = 'courseDescription'>
            <h1> Computer Software Engineering Core </h1>
            <div id = "line"></div>
            {
                grad['softwareengineering'].map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
            <h1 style={{marginTop: '30px'}}> Specialization: Data Science </h1>
            <div id = "line"></div>
            {
                grad['datascience'].map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </div>
      </div>


      <div style={{ display: selectedItem === 'LLM' ? 'block' : 'none' }}>
            <div style={{margin: '10px'}} id = 'courseDescription'>
                <h1> L.L.M in Business and Finance Law </h1>
                <div id = "line"></div>
                {
                        LLM.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </div>
        </div>


    </div>
  );
};

export default CourseTaken;








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