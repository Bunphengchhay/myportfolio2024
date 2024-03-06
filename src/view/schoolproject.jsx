// import CardText from '../components/cardtext'
import ReactTimeLine from '../components/reacttimeline';
import '../style/experience.css'
// import RAFDB from '../artifact/RAFDB.png'
// import FaceMask from '../artifact/dataset-cover.jpg'
// import cocodataset from '../artifact/cocodataset.png'
// import vit from '../artifact/vit.webp'
// import textsentimental from '../artifact/textsentimental.png'
// import decissiontree from '../artifact/decisiontree.png'
// import linearRegression from '../artifact/linearRegression.png'
// import sklearn from '../artifact/sklearn.jpeg'
// import pca from '../artifact/pca.png'



function SchoolProject() {
    return ( 
        <div style={{width: 'inherit', minHeight: '100svh', backgroundColor: 'darkslategray', borderRadius: '30px', overflowY: 'scroll'}} className='sp'>
            <div className="sp-top">
                <h2 style={{textAlign: 'center', marginTop: 20, color: 'white'}}> DevSecOps</h2>
                <ReactTimeLine data = {sde} />
            </div>
        </div>
     );
}

export default SchoolProject;

const sde = [
    {
        title: 'Web Applicaiton Hosting',
        course: 'Enterprise Software Enginering',
        institute: 'San Jose State University',
        date: 'Feb 2024 - Feb 2024',
        description: 'Provide a hosting solutions to web applications',
        functionality: 'Implemented web applicaitons React front end, PHP backend, and MYSQL server database',
        task: 'deployed a web server environment on AWS EC2 instance and load balancer, including installation of Apache HTTP server, mySQL, and PHP. Configured domain name using Route 53, managed DNS setting and SSH connectivity, ensured integration of a custom domain with EC2. ',
        role: 'Developer',
        techStack: 'Javascript, PHP, MySQL, React, HTML, CSS, HTTPs API, EC2, Loadbalancer, Amazon IAM, and Amazon Route 53',
        github: "https://github.com/Bunphengchhay/myFirstphpApp/tree/main",
        website: "http://www.pencechhay.com"

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
        techStack: 'Javascript, MERN stack, MongoDB, Express.js, React.js, Node.js, AWS EC2, AWS Elastic Load balancing, HTML, CSS, Figma, Github, Jira, Agile'
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
        techStack: 'Javascript, MERN stack, MongoDB, Express.js, React.js, Node.js, AWS EC2, HTML, CSS, Figma, UML and User Diagram, Jira, Github, Agile'
    },
    {
        title: 'Database Management Design',
        course: 'Advanced Database Management',
        institute: 'University of California, Sacramento',
        date: 'Jan 2023 - May 2023',
        description: 'Designed a database management system for a university, including functionalities for creating, updating, deleting, dropping, altering, querying, asserting, and viewing data.',
        task: 'Performed web scraping, fetched data via OMDB API, and cleaned and transformed data from JSON and CSV to SQL tables.',
        role: 'Developer',
        techStack: 'SQL'
    },
    {
        title: 'Hornet HFD Application',
        course: 'Object Oriented Programming',
        institute: 'University of California, Sacramento',
        date: 'Sept 2021 - Dec 2021',
        description: 'Designed a 2D gaming application for mobile devices (iPad) with features allowing players to extinguish fires in a school building and view a dashboard.',
        task: 'Developed object-oriented programming (OOP) structured code, gaming dashboard, and drawn gaming objects.',
        role: 'Developer',
        techStack: 'Java, 2D Video Game App, OOP implementation, CodeNameOne API, Microsoft Azul Zulu for device simulator, Bezier Curve, Calculate Tangent Line and Overlapping Area, Adding Sounds and Images Interaction'
    },
    {
        title: 'Oscar Rating Project',
        course: 'Software Engineering Fundamental',
        institute: 'California State University, Sacramento',
        date: 'Aug 2020 - Dec 2020',
        description: 'Developed a web app that allows users to browse Oscar ratings, with features for viewing and finding the source of Oscar ratings.',
        task: 'Developed code for data scraping and logic to retrieve only the needed data.',
        role: 'Developer',
        techStack: 'Python, SQL, Schema Design, CRUD operation, JSON, CSV, OMDB and IMDB Database'
    }
];
