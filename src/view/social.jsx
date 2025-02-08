import githubicon from '../artifact/githubicon.png'
import resumeicon from '../artifact/resumeicon.png'
import linkedinicon from '../artifact/linkedinicon.webp'
import "../style/main.css"
function SocialContact() {
    return ( 
        <div className='homeicon'>
                        <a href="https://www.linkedin.com/in/bunphengchhay/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                            <img
                                src={linkedinicon}
                                alt="LinkedIn"
                            />
                        </a>
                        <a href="https://github.com/Bunphengchhay" target="_blank" rel="noopener noreferrer">
                            Github
                            <img
                                src={githubicon}
                                alt="GitHub"
                            />
                        </a>
                        <a
                            // href="/artifact/resumesjsubunphengchhay.pdf"
                            href='/artifact/SE02_2025v1.pdf'
                            download="bunphengchhayResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                            <img
                                src={resumeicon}
                                alt="Resume"
                            />
                        </a>

            </div>
     );
}

export default SocialContact;