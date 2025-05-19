import { useEffect, useState } from "react";
import '../style/2025Project.css'
import RAFDB from '../artifact/RAFDB.png'
import FaceMask from '../artifact/dataset-cover.jpg'
import cocodataset from '../artifact/cocodataset.png'
import vit from '../artifact/vit.webp'
import textsentimental from '../artifact/textsentimental.png'
import decissiontree from '../artifact/decisiontree.png'
import linearRegression from '../artifact/linearRegression.png'
import sklearn from '../artifact/sklearn.jpeg'
import pca from '../artifact/pca.png'
import githublogowhite from '../artifact/icons8-github-100.png'
import githublogo from '../artifact/icons8-github-50-black.png'
import RAGlogo from '../artifact/1wrgK30VW2Y6sXK9mui-dqA.webp'
import AgenticAILogo from "../artifact/aiagent.png"
import { title } from "framer-motion/client";
import cloudIcon from '../artifact/icons8-cloud-development-50.png';
import webIcon from '../artifact/icons8-web-design-50.png';
import systemIcon from '../artifact/icons8-code-100.png';
import webSiteIcon from '../artifact/icons8-website-64.png';
import databaseIcon from '../artifact/icons8-database-80.png';
import gameIcon from '../artifact/icons8-game-50.png';
import ratingIcon from '../artifact/icons8-rating-80.png';
import myPortfolioScreenShot from '../artifact/portfolioscreenshot.png';
import viewmore from "../artifact/icons8-arrow-down-50.png";
import { motion, AnimatePresence } from "framer-motion";


function Projects({isDarkMode}) {
    const [itemDisplay, setItemDisplay] = useState('PP'); // Use codes: DO, MLA, PP

    const renderContent = () => {
        switch (itemDisplay) {
            case 'DO':
                return <DevOps />;
            case 'MLA':
                return <MachineLearning />;
            case 'PP':
                return <SelfProject />;
            default:
                return <DevOps />;
        }
    };
    const mainStyle = {
        backgroundColor: isDarkMode ? "#070c0b" : "#f9f9f7",
        color: isDarkMode ? "#ffffff" : "#111827",
        transition: "all 0.3s ease",
    };

    return ( 
        <div className="mt-10 mb-10 w-full min-h-[50vh]">
            <div className='w-full sticky top-0 z-10 pb-2' style={mainStyle}>
                <div className='w-full p-4'> 
                    <h1 className= 'text-3xl font-bold'> Projects </h1>
                    <p className="text-sm"> A curated collection of personal and academic projects, spanning DevOps, MLOps, Machine Learning, and cutting-edge AI applications — including RAG and Agentic AI systems.</p>
                </div>
                <div className="w-full flex justify-center gap-5 mt-1">
                    {projectsCollections.map((project, index) => {
                        const isActive = itemDisplay === project.code;

                        return (
                        <button
                            key={index}
                            className={`px-2 py-1 md:px-4 md:py-2 rounded-md shadow-md transition-colors duration-200 text-sm md:text-base ${
                            isActive ? "bg-stone-800 text-white" : "bg-white text-gray-900"
                            }`}
                            onClick={() => setItemDisplay(project.code)}
                        >
                            {project.title}
                        </button>
                        );
                    })}
                </div>
            </div>
            <div className="w-full mt-5">
                {renderContent()}
            </div>
        </div>
     );
}

export default Projects;

const DevOps = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
        {sde.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[280px] md:h-[280px] cursor-pointer bg-stone-800 shadow-md rounded-xl p-3 text-white text-xs md:text-sm hover:bg-stone-900 transition-colors duration-200 hover:scale-105 transform-style preserve-3d transition-transform duration-300"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="flex justify-between">
              <div>
                <h1 className="text-md md:text-lg font-bold text-white">{item.title}</h1>
                <p className="text-gray-400">{item.course}</p>
                <p className="text-gray-400">{item.institute}</p>
                <p className="text-gray-400">{item.date}</p>
              </div>
              <div>
                {item.icon && (
                  <img
                    src={item.icon}
                    width="30"
                    height="30"
                    alt={item.altIcon}
                    className="hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                  />
                )}
              </div>
            </div>

            <h1 className="font-bold text-white mt-4">Description</h1>
            <p className="text-gray-400">{item.description}</p>
            <img src={viewmore} alt='arrow down' width={15} height={15} className="mt-2"/>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="bg-stone-900 shadow-lg rounded-xl p-6 w-[90%] md:w-[60%] h-[80%] overflow-y-auto text-white text-xs md:text-sm relative  "
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-white text-xl"
                onClick={() => setSelectedIndex(null)}
              >
                &times;
              </button>
              {selectedIndex !== null && (
                <>
                  <h1 className="font-bold text-white text-lg mb-2">{sde[selectedIndex].title}</h1>
                  <p className="text-gray-400 mb-1"><strong>Course:</strong> {sde[selectedIndex].course}</p>
                  <p className="text-gray-400 mb-1"><strong>Institute:</strong> {sde[selectedIndex].institute}</p>
                  <p className="text-gray-400 mb-3"><strong>Date:</strong> {sde[selectedIndex].date}</p>

                  <h2 className="font-bold text-white mt-2">Description</h2>
                  <p className="text-gray-400">{sde[selectedIndex].description}</p>

                  <h2 className="font-bold text-white mt-2">Functionality</h2>
                  <p className="text-gray-400">{sde[selectedIndex].functionality}</p>

                  <h2 className="font-bold text-white mt-2">Task</h2>
                  <p className="text-gray-400">{sde[selectedIndex].task}</p>

                  <h2 className="font-bold text-white mt-2">Role</h2>
                  <p className="text-gray-400">{sde[selectedIndex].role}</p>

                  <h2 className="font-bold text-white mt-2">Tech Stack</h2>
                  <p className="text-gray-400">{sde[selectedIndex].techStack}</p>

                  {sde[selectedIndex].github && (
                    <a href={sde[selectedIndex].github} target="_blank" rel="noopener noreferrer">
                      <img
                        src={githublogowhite}
                        width="40"
                        height="40"
                        alt="GitHub logo"
                        className="my-4"
                      />
                    </a>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


const MachineLearning = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const selectedItem = selectedCardIndex !== null ? MLOPs[selectedCardIndex] : null;

  return (
    <>
      {/* Grid of Cards */}
      <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
        {MLOPs.map((item, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            className="relative w-full h-[350px] bg-stone-800 rounded-xl p-3 text-white text-xs md:text-sm cursor-pointer hover:bg-stone-900 transition-colors duration-200"
            onClick={() => setSelectedCardIndex(index)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="h-[20%] md:h-[18%]">
              <h1 className="text-white font-bold text-sm md:text-lg">{item.title}</h1>
              <p className="text-gray-400 text-xs md:text-sm">{item.date}</p>
            </div>
            <div
              className="w-full"
              style={{
                height: "75%",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <img src={viewmore} alt='arrow down' width={15} height={15} className="mt-2"/>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Expanded Card */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            layoutId={`card-${selectedCardIndex}`}
            className="fixed top-0 left-0 w-full h-full z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCardIndex(null)}
          >
            <motion.div
              className="bg-stone-900 text-gray-300 rounded-xl p-3 text-sm md:text-base w-full md:w-2/3 max-h-[90%] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing on content click
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">{selectedItem.title}</h1>
                <button
                  onClick={() => setSelectedCardIndex(null)}
                  className="text-lg font-bold text-gray-600 hover:text-black"
                >
                  ✕
                </button>
              </div>
              <p>{selectedItem.course}</p>
              <p>{selectedItem.institute}</p>
              <br/>
              <div className="text-sm">
                <h2 className="my-2 font-bold text-white">Application</h2>
                <p >{selectedItem.application}</p>

                <h2 className="my-2 font-bold text-white ">Tasks</h2>
                <p >{selectedItem.task}</p>

                <h2 className="my-2 font-bold text-white">Model Selections</h2>
                <p >{selectedItem.model}</p>

                <h2 className="my-2 font-bold text-white">Datasets</h2>
                <p >{selectedItem.dataset}</p>

                <h2 className="my-2 font-bold text-white">Results</h2>
                <p >{selectedItem.result}</p>

                <h2 className="my-2 font-bold text-white">Tech Stack</h2>
                <p >{selectedItem.techStack}</p>

                <div className="mt-4">
                    <img src={githublogowhite } width="40" height="40" alt="GitHub logo" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


const SelfProject = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
      {/* PROJECT GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
        {SelfProjectsItems.map((item, index) => (
          <motion.div
            key={index}
            layout
            layoutId={`card-${index}`}
            onClick={() => setExpandedIndex(index)}
            className="cursor-pointer bg-stone-800 text-white shadow-md rounded-xl p-4 text-sm hover:bg-stone-900 transition-colors duration-200 hover:scale-105 preserve-3d transition-transform"
          >
            <h1 className="text-xl md:text-2xl font-bold">{item.title}</h1>
            <p className="text-sm mt-2">{item.summary}</p>
            <img src={viewmore} alt='arrow down' width={15} height={15} className="mt-2"/>
          </motion.div>
        ))}
      </div>

      {/* POPUP WITH BLUR BACKGROUND */}
      <AnimatePresence>
  {expandedIndex !== null && (
    <>
      {/* BACKDROP */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setExpandedIndex(null)}
      />

      {/* CENTERED CARD CONTAINER */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setExpandedIndex(null)}
      >
        {/* EXPANDED CARD */}
        <motion.div
          layoutId={`card-${expandedIndex}`}
          className="w-full max-w-3xl max-h-[75vh] overflow-y-auto bg-stone-900 text-white rounded-xl px-4 pb-2"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 100 }}
          onClick={(e) => e.stopPropagation()}
        >

        <div className="w-full h-[200px] flex justify-end bg-white rounded-b-xl mb-2" style={{backgroundImage: `url(${SelfProjectsItems[expandedIndex].image})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}> 
        
        </div>
          <h1 className="text-lg font-bold">{SelfProjectsItems[expandedIndex].title}</h1>
          <p className="text-sm">{SelfProjectsItems[expandedIndex].summary}</p>

          <div className="mt-4 text-white text-sm">
            <h2 className="font-bold">Use Case</h2>
            <p>{SelfProjectsItems[expandedIndex].description}</p>
            <h2 className="font-bold mt-4">Achievements</h2>
            <ul className="list-disc ml-5">
              {SelfProjectsItems[expandedIndex].task.map((task, i) => (
                <li key={i} className="text-sm">{task}</li>
              ))}
            </ul>

            <h2 className="font-bold mt-3 mb-1">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {SelfProjectsItems[expandedIndex].techStack.map((tech, i) => (
                <span key={i} className="text-sm bg-white px-2 py-1 rounded text-gray-900">{tech}</span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4">
              <a
                href={SelfProjectsItems[expandedIndex].github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githublogowhite} width="40" height="40" alt="github" />
              </a>
              <button
                onClick={() => setExpandedIndex(null)}
                className="bg-white text-gray-900 px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </>
  );
};




const SelfProjectsItems = [
    {
        title: 'Portfolio Chatbot',
        summary: 'An experimental RAG (Retrieval-Augmented Generation) chatbot built with LangGraph and deployed via Hugging Face. It allows visitors to interactively learn about my background, projects, and resume—right from the site. All conversations are ephemeral and handled securely.',
        image: myPortfolioScreenShot,
        useCase: 'Generative AI Assistant',
        description: 'This application enable users to efficiently find more accurate informations about me without going through the website. It also allow me to ensure what informations I want users or veiwers to know about me.',
        task: [
            'Web scrapping my own personal website, vectorize the text and store on a DB server',
            'Developed RAG application that allow LLM to perform semantic search and vector similarity search on my vector data',
            'Dockerized the backend chabot system and deployed it on Huggingface Spaces server',
            'Create RestAPIs using FastAPI to allow stream chunk output to the frontend',
            'Developed frontend with React and Framer-motion and deployed in on AWS Amplify including CI/CD pipeline automation with Github'
        ],
        techStack: ['Python',
        'JavaScript',
        'REACT',
        'Langchain', 'langgraph', 
        'Pinecone', 
        'Llama3', 
        'Nomic-text-embed', 'Amplify', 'Github', 'React-MUI', 'Framer-motion', 'FastAPI', 'Docker', 'Space', 'Huggingface']

    },
    {
        title: 'Agentic AI System',
        summary: 'Agentic AI application integrated with RAG, Communication Tools, and Others',
        image: AgenticAILogo,
        useCase: 'Generative AI Assistant',
        description: 'This system is designed to enable users to efficiently query and talk to large-scale databases. It also empowers users to interact with various integrated tools, such as sending reminder emails, text messages, and posting notifications to a Discord group chat.',
        task: [
            'Engineered a custom AI agent leveraging LangChain and Langgraph, empowering the model to execute specific actions and interface with external tools.',
            'Architected an agentic system with Langgraph to orchestrate application workflow, enabling the AI agent to take actions via integrated tools.',
            'Integrated the agent with a Retrieval-Augmented Generation (RAG) pipeline, allowing users to query large-scale datasets from a vector database.',
            'Developed supplementary tools, including SMS, Email, and Discord integrations, to authorize the agent to perform actions on the user behalf.',
            'Designed Frontend with Figma and Developed Reacted App to demo the prototype',
            'Desinged Rest API with Fast API to streamline the output'
        ],
        techStack: ['Python',
        'JavaScript',
        'REACT',
        'Pinecone',
        'Langchain',
        'Langgraph',
        'Pinecone',
        'Llama3',
        'Mistral 7B',
        'Nomed-embed-Text',
        'AWS Amplify',
        'Lambda',
        'Docker',
        'FastAPI',
        'Figma',
        'Wireframe'
        ]
    },
    {
        title: 'RAG System',
        summary: 'Fullstack MERN App for food reviews, and Chatbot Application',
        image: RAGlogo,
        useCase: 'Foodie Project',
        description: 'The Foodie Project is a fullstack MERN application designed for food reviews, leveraging large-scale datasets from Yelp and DoorDash. The app features an interactive generative AI chatbot powered by a Retrieval-Augmented Generation (RAG) pipeline optimized with Pinecone, LangChain, and Llama 3, achieving a 92% improvement in response time for accurate information retrieval.',
        task: ['Optimized RAG pipeline with Pinecone, Langchain, and Llama3 to deliver accurate info retrieval with 92% increase in response time',
                        'Custom LLM and embedding functions using the adapter pattern to integrate a Cloudflare-hosted API with LangChain chains',
                        'Deployed App with AWS Amplify for frontend and ECR, ECS, ALB, and AWS Lambda handling the backend',
                        'Dockerized architecture to streamline deployment and ensure scalability of the frontend, backend, and generative AI models.',
                        'Collected and preprocessed large-scale food review datasets from Yelp and DoorDash, storing the processed data in MongoDB for seamless integration with the web frontend and backend.',
                        'Vectorized comprehensive restaurant datasets as metadata, and hosted the embeddings on Pinecone to enable efficient similarity search and seamless integration with the RAG pipeline.'
        ],
        techStack: ['Python',
        'JavaScript',
        'REACT',
        'MongoDB',
        'Node.JS',
        'Express.JS',
        'Langchain', 
        'Pinecone', 
        'Llama3', 
        'Nomed-embed-Text', 
        'Cloudflare Workers', 
        'AWS Amplify', 
        'ECR', 
        'ECS', 
        'ALB', 
        'Lambda', 
        'Docker']
    }
]

const MLOPs = [
    {
        title: 'Facial Emotion Recognition',
        course: 'Deep Learning',
        institute: 'San Jose State University',
        date: 'Sept 2023 - Dec 2023',
        application: 'Developed an AI model for multi-facial expression detection through live video streaming.',
        task: 'Performed inference, fine-tuning, and transfer learning with deep learning models. Adjusted hyperparameters, applied data augmentation, and tracked training progress using loss and accuracy metrics.',
        model: 'Google ViT, CNN, VGG, RestNet',
        dataset: 'RAF-DB 30K',
        result: '86% Accuracy',
        techStack: 'Python, Pytorch, VS Code, Google Colab, Github, Classification Report, SJSU Internal HPC, GPU',
        link: 'https://github.com/Bunphengchhay/GViT21k',
        image: RAFDB,
    },
    {
        title: 'Face Mask Detection',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Sept 2023 - Dec 2023',
        application: 'Developed a model for detecting people wearing masks correctly, incorrectly, or without masks in pictures.',
        task: 'Performed classification and model training, data preprocessing, and created CNN models. Generated a classification report.',
        model: 'CNN, SVM, K-Mean, Random Forest',
        dataset: 'Face Mask Dataset from Kaggle',
        result: '92% Accuracy',
        techStack: 'Python, Tensorflow, VS Code, Google Colab, Github, Data Visualization, Matplotlib',
        link: 'https://github.com//sivask01/CMPE-255-01',
        image: FaceMask
    },
    {
        title: 'Object Detection',
        course: 'Deep Learning',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Trained a model to detect different objects.',
        task: 'Trained on YOLO model, calculated and generated Mean Average Precision (mAP) report, including Confusion Matrix, IoU, and Recall.',
        model: 'YOLO V8',
        dataset: 'Coco Dataset',
        result: '',
        techStack: 'Python, Pytorch, VS Code, SJSU Internal HPC, GPU',
        link: '',
        image: cocodataset
    },
    {
        title: 'Image Classification',
        course: 'Deep Learning',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Determined the type of images.',
        task: 'Split data into train, test, and eval sets, trained and tested models, and generated a classification report.',
        model: 'vit_b_32, restnetmodel1',
        dataset: 'Tiny Image 200',
        result: '62% Accuracy',
        techStack: 'Python, Pytorch, VS Code, SJSU Internal HPC, GPU',
        link: '',
        image: vit
    },
    {
        title: 'Text Sentimental Analysis',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Classified text data into 11 distinct categories.',
        task: 'Performed text cleaning, handled missing values, applied feature engineering, addressed class imbalance, and selected and evaluated models.',
        model: 'Multinomial Naive Baye and Random Forest',
        dataset: 'Social Media Conversation - 6576 Dataset',
        result: '79%',
        techStack: 'Python, Jupyter Notebook, Pandas, CSV, Sklearn, nltk, re, TFIDF',
        link: '',
        image: textsentimental
    },
    {
        title: 'Decision Tree Classifier',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Evaluated the decision tree classifier.',
        task: 'Split data into train, test, and eval sets, generated decision tree visualization, and confusion matrix.',
        model: ' ',
        dataset: 'Iris Dataset',
        result: '95% Accuracy',
        techStack: 'Python, Jupyter Notebook, Pandas, Numpy, SkLearn, Matplotlib',
        link: '',
        image: decissiontree
    },
    {
        title: 'Linear Regression',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Demonstrated plots that linear regression learns, minimizing the observed response and prediction by the linear approximation.',
        task: 'Used the truck sales dataset to illustrate ordinary least-squares (OLS) or linear regression, calculated Mean Square Error and Variance Score, and visualized the linear regression.',
        model: 'Linear Regression',
        dataset: 'trucks.csv from UCI',
        result: 'MSE: 0.011 and Variance Score: 0.997',
        techStack: 'Python, Jupyter Notebook, Pandas, Numpy, SkLearn, Matplotlib',
        link: '',
        image: linearRegression
    },
    {
        title: 'KNN Classification',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Created a program to transform text into vectors.',
        task: 'Utilized various data mining techniques, performed KNN-based classification.',
        model: 'KNN',
        dataset: 'Badges dataset from UCI',
        result: 'Highest Accuracy: 80%',
        techStack: 'Python, Jupyter Notebook, Pandas, Numpy, SkLearn, Scipy, Collections',
        link: '',
        image: sklearn
    },
    {
        title: 'Measuring Variance',
        course: 'Data Mining',
        institute: 'San Jose State University',
        date: 'Fall Semester 2023',
        application: 'Measured the amount of variance that can be explained by the top K principal components in a Principal Component Analysis (PCA) model.',
        task: 'Performed data pre-processing, computed PCA via Covariance Matrix, and plotted feature and overall percent variance.',
        model: 'PCA',
        dataset: 'Wine Dataset',
        result: '',
        techStack: 'Python, Jupyter Notebook, Pandas, Numpy, SkLearn, Matplotlib, Eigen Value and Singular Values',
        link: '',
        image: pca
    },
];


const sde = [
    {
        title: 'Web Application',
        course: 'Enterprise Software Enginering',
        institute: 'San Jose State University',
        date: 'Feb 2024 - Feb 2024',
        description: 'Provide a hosting solutions to web applications',
        functionality: 'Implemented web applicaitons React front end, PHP backend, and MYSQL server database, and login and logout.',
        task: 'Deployed a web front end and backend on a single AWS EC2 instance with load balancer, including installation of Apache HTTP server, AWS RDS-MySQL, and PHP. Configured domain name using Route 53, managed DNS setting and SSH connectivity, ensured integration of a custom domain with EC2. ',
        role: 'Developer',
        techStack: 'Javascript, PHP, MySQL, React, HTML, CSS, HTTPs API, EC2, Loadbalancer, Amazon IAM, and Amazon Route 53',
        github: "https://github.com/Bunphengchhay/cmpe272marketplace",
        icon: cloudIcon,
        altIcon: 'cloud icon'

    },
    {
        title: 'Movie Theater Club Application',
        course: 'Software System Engineering',
        institute: 'San Jose State University',
        date: 'Oct 2023 - Dec 2023',
        description: 'Developed a full-stack application for a Movie Theater Company, including system design, schema creation, UML and user experience design.',
        functionality: 'Implemented features such as member signup, employee dashboard with role-based CRUD operations, and booking functionality.',
        task: 'Led the team as a team lead and Scrum Master. Contributed to system design, schema creation, and UML. Managed AWS deployment, developed HTTPS APIs, and worked on the frontend, including landing page, booking, and employee dashboard.',
        role: 'Team lead, Scrum Master, Developer',
        techStack: 'Javascript, MERN stack, MongoDB, Express.js, React.js, Node.js, AWS EC2, AWS Elastic Load balancing, HTML, CSS, Figma, Github, Jira, Agile',
        github: 'https://github.com/Bunphengchhay/team-project-api_assassins-main',
        icon: systemIcon,
        altIcon: 'code icon'
    },
    {
        title: 'Barbershop Website',
        course: 'Senior Project',
        institute: 'University of California, Sacramento',
        date: 'Aug 2022 - Aug 2023',
        description: 'Designed and deployed a web application for a barbershop, including frontend development and building navigation and login/logout functionality.',
        functionality: 'Implemented features for viewing information and making appointments.',
        task: 'Led the frontend team as a team lead. Developed the entire frontend structure, including navigation and login/logout functionality.',
        role: 'Frontend Team lead, Developer',
        techStack: 'Javascript, MERN stack, MongoDB, Express.js, React.js, Node.js, AWS EC2, HTML, CSS, Figma, UML and User Diagram, Jira, Github, Agile',
        github: 'https://github.com/Vib1240n/A-Cup-Of-Java/tree/vercel-production',
        icon: webIcon,
        altIcon: 'web icon'
    },
    {
        title: 'Database Management Design',
        course: 'Advanced Database Management',
        institute: 'University of California, Sacramento',
        date: 'Jan 2023 - May 2023',
        description: 'Designed a database management system for a university, including functionalities for creating, updating, deleting, dropping, altering, querying, asserting, and viewing data.',
        task: 'Performed web scraping, fetched data via OMDB API, and cleaned and transformed data from JSON and CSV to SQL tables.',
        role: 'Developer',
        techStack: 'SQL',
        icon: databaseIcon,
        altIcon: 'database icon'
    },
    {
        title: 'Hornet HFD Application',
        course: 'Object Oriented Programming',
        institute: 'University of California, Sacramento',
        date: 'Sept 2021 - Dec 2021',
        description: 'Designed a 2D gaming application for mobile devices (iPad) with features allowing players to extinguish fires in a school building and view a dashboard.',
        task: 'Developed object-oriented programming (OOP) structured code, gaming dashboard, and drawn gaming objects.',
        role: 'Developer',
        techStack: 'Java, 2D Video Game App, OOP implementation, CodeNameOne API, Microsoft Azul Zulu for device simulator, Bezier Curve, Calculate Tangent Line and Overlapping Area, Adding Sounds and Images Interaction',
        icon: gameIcon,
        altIcon: 'game icon'

    
    },
    {
        title: 'Oscar Rating Project',
        course: 'Software Engineering Fundamental',
        institute: 'California State University, Sacramento',
        date: 'Aug 2020 - Dec 2020',
        description: 'Developed a web app that allows users to browse Oscar ratings, with features for viewing and finding the source of Oscar ratings.',
        task: 'Developed code for data scraping and logic to retrieve only the needed data.',
        role: 'Developer',
        techStack: 'Python, SQL, Schema Design, CRUD operation, JSON, CSV, OMDB and IMDB Database',
        icon: ratingIcon,
        altIcon: 'rating icon'
    }
];

const projectsCollections = [
    {
        title: 'DevOps',
        code: 'DO'
    },
    {
        title: 'Machine Learning & AI',
        code: 'MLA'
    },
    {
        title: 'Personal Projects',
        code: 'PP'
    }
]