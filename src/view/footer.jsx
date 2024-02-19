import "../style/work.css"
import SocialContact from "./social";
function Footer() {
    return ( 
        <div style={{width: '90vw', height: 'auto'}} className="footer">
            <p style={{ fontSize: '0.5rem', textAlign: 'center', color: '#888' }}>
            Disclaimer: This portfolio website is for demonstration purposes. All rights to the respective owners of third-party content are acknowledged. If you have any concerns or inquiries, please contact me.
            </p>
            <br/>
            {/* <div style={{ width: '100%', textAlign: 'center', padding: '20px 0', borderTop: '1px solid #ccc' }}> */}
            <div style={{ width: '100%', textAlign: 'center'}}>
                <div style={{ marginBottom: '10px' }}>
                    <p style={{ fontWeight: 'bold' }}>Technology Used</p>
                    <p>React, JavaScript, HTML, CSS, Bootstrap</p>
                    <p>React Scroll Parallax, React Parallax, React Scroll, React Vertical Timeline Component</p>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <p style={{ fontWeight: 'bold' }}>Copyright &copy; 2024, Pence Chhay. All Rights Reserved.</p>
                    <p>bunphengchhay@gmail.com</p>
                </div>

                <div>
                    <div className="flex-container">
                    {/* <p className="flex-item">Find me on</p>
                    <div style={{ width: '10px', height: '1px', backgroundColor: 'black', margin: '0 5px' }}></div> */}
                    <SocialContact />
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Footer;