import AnimatedSkillCard from "./animateskillcards";
import programmingIcon from '../artifact/icons8-programming-50.png';
import webIcon from '../artifact/icons8-web-64.png';
import serverIcon from '../artifact/icons8-server-64.png';
import databaseIcon from '../artifact/icons8-database-80-black.png';
import aiIcon from '../artifact/icons8-ai-64.png'
import awsIcon from '../artifact/icons8-amazon-aws-96.png'
import devopIcon from '../artifact/icons8-devops-60.png'
import agileIcon from '../artifact/icons8-agile-64.png'

const technicalskills = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript"],
    icon: programmingIcon,
    altIcon: 'programming icon'
  },
  {
    category: "Frontend Development",
    skills: ["React", "Framer Motion", "JavaScript", "React-Parallax", "Figma"],
    icon: webIcon,
    altIcon: 'web icon'
  },
  {
    category: "Backend & Serverless",
    skills: ["Node.js", "Express.js", "Serverless", "CI/CD", "GitHub Actions"],
    icon: serverIcon,
    altIcon: 'server icon'
  },
  {
    category: "Databases & Storage",
    skills: ["SQL", "NoSQL", "DynamoDB", "MongoDB", "Pinecone", "S3"],
    icon: databaseIcon,
    altIcon: 'database icon'
  },
  {
    category: "Data Science & ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Plotly",
      "LangChain",
      "Huggingface",
      "Deep Learning",
      "Regression",
      "Classification",
      "Clustering",
      "OpenCV",
      "NLP",
    ],
    icon: aiIcon,
    altIcon: 'ai icon'
  },
  {
    category: "AWS Cloud",
    skills: [
      "EC2",
      "ECS",
      "ECR",
      "Lambda",
      "Amplify",
      "Connect",
      "Polly",
      "Lex",
      "SageMaker",
      "ALB",
      "S3",
      "DynamoDB",
      "Step Functions",
    ],
    icon: awsIcon,
    altIcon: 'aws icon'
  },
  {
    category: "MLOps & DevOps",
    skills: [
      "CI/CD",
      "GitHub Actions",
      "Step Functions",
      "Serverless Framework",
      "Monitoring",
      "Model Deployment",
      "SageMaker Pipelines",
    ],
    icon: devopIcon,
    altIcon: 'devop icon'
  },
  {
    category: "Project & Team Tools",
    skills: ["Scrum", "Agile", "Kanban", "GitHub", "Jira"],
    icon: agileIcon,
    altIcon: 'agile icon'
  },
];

function Skills() {
  return (
    <div className="w-full mb-10">
      <div className="w-full p-4 sticky top-0 z-10">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className="text-sm">
          Skilled in full-stack development, DevOps & MLOps, and real-time solutions.
        </p>
      </div>

      <div className="w-full grid grid-cols-2 justify-between gap-4">
        {technicalskills.map((item, index) => (
          <AnimatedSkillCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
