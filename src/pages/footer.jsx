import linkedLogo from '../artifact/icons8-linkedin-50.png';
import githubLogo from '../artifact/icons8-github-50-black.png';
import resumeLogo from '../artifact/icons8-resume-100.png';
import myresume from '../artifact/intern_sde_05202.pdf';
import linkedLogoDarkMode from '../artifact/icons8-linkedin-80.png';
import githubLogoDarkMode from '../artifact/icons8-github-100.png';

import { Link } from 'react-scroll';

function Footer({isDarkMode}) {
    return ( 
        <div className="w-full mt-20 mb-2 text-white flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-start gap-2 my-2'>
                    {
                        myContact.map((item, index) => {
                            return (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" download={item.title === "resume"}> 
                                    <img
                                    src={isDarkMode ? item.iconDarkMode : item.icon}
                                    alt={item.title}
                                    width={25}
                                    height={25}
                                    className='hover:cursor-pointer hover:scale-110 transition-transform duration-200'
                                    
                                    />
                                </a>

                            )})
                    }
                </div>
                <p className={ isDarkMode ? 'mt-0 text-sm text-white': 'mt-0 text-sm text-gray-900'}> Pencechhay@gmail.com</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Link to='Overview' smooth={true}
                            duration={500}
                            offset={-80} className='hidden md:block'>
                            
                            <img src='https://cdn-icons-png.flaticon.com/512/11719/11719585.png' alt='avarta logo' width={40} height={40} 
                                className='hover:cursor-pointer hover:scale-110 transition-transform duration-200'
                            /> 

                </Link>
                <p className={ isDarkMode ? 'mt-0 text-sm text-white': 'mt-0 text-sm text-gray-900'}> Bunpheng Chhay </p>
            </div>
        </div>
     );
}

export default Footer;

const myContact = [
    {
        title: 'resume',
        link: myresume,
        icon: resumeLogo,
        iconDarkMode: resumeLogo
    },
    {
        title: 'linkedin',
        link: 'https://www.linkedin.com/in/bunphengchhay/',
        icon: linkedLogo,
        iconDarkMode: linkedLogoDarkMode
    },
    {
        title: 'github',
        link: 'https://github.com/Bunphengchhay',
        icon: githubLogo,
        iconDarkMode: githubLogoDarkMode
    },
]