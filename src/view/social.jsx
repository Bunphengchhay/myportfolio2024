import githubicon from '../artifact/githubicon.png'
import resumeicon from '../artifact/resumeicon.png'
import linkedinicon from '../artifact/linkedinicon.webp'
import myresume from '../artifact/resume202401sde.pdf'
import "../style/main.css"
function SocialContact() {
    return ( 
        <div className='homeicon'>
                        <a href="https://www.linkedin.com/in/bunphengchhay/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={linkedinicon}
                                alt="LinkedIn"
                            />
                        </a>
                        <a href="https://github.com/Bunphengchhay" target="_blank" rel="noopener noreferrer">
                            <img
                                src={githubicon}
                                alt="GitHub"
                            />
                        </a>
                        <a href={myresume} download="bunphengchhayResume.pdf" target="_blank" rel="noopener noreferrer">
                            <img
                                src={resumeicon}
                                alt="Resume"
                            />
                        </a>
            </div>
     );
}

export default SocialContact;