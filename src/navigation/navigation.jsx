import '../App.css'
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navigation({activePage, onNavigation, scrollPosition}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
        // Set a threshold for when the fading effect should start
    // Set a threshold for when the fading effect should start
  const fadeThreshold = 100; // Adjust this value as needed
  // Set a threshold for when the background color change should start
  const bgColorChangeThreshold = 100;

  // Set initial fade opacity to 0
  const initialFadeOpacity = 0;

  // Calculate the fading opacity based on the scroll position
  const fadeOpacity = Math.max(initialFadeOpacity, Math.min(scrollPosition / fadeThreshold, 1));

  // Set initial color to black and background color to white
  const initialColor = 'black';
  const initialBackgroundColor = 'white';
  const initialBurgerDashColor = 'black'; // Change this to your initial burger-dash color


  // Dynamically set the color with fading effect
  const sidebarColor = fadeOpacity === initialFadeOpacity ? initialColor : 'white';

  // Dynamically set the background color based on the scroll position
  const sidebarBackgroundColor = fadeOpacity === initialFadeOpacity ? initialBackgroundColor : '#40826D' ;//'#4D5D53'; //'#013214'; // '#5E8C6A';
  // Dynamically set the burger-dash color based on the scroll position
  const burgerDashColor = scrollPosition > bgColorChangeThreshold ? 'white' : initialBurgerDashColor;

  // Dynamically set the border radius based on the scroll position
  const sidebarRadius = `${fadeOpacity * 20}px`;
  const burgerDashStyles = {
    background: burgerDashColor,
  };
  // Dynamically set the styles
  const sidebarStyles = {
    borderRadius: sidebarRadius,
    backgroundColor: sidebarBackgroundColor,
    color: sidebarColor,
  };

    // Function to toggle the pop-up menu
    function toggleMenu() {
      setIsMenuOpen(!isMenuOpen);
    }
    // Function to close the menu
  function closeMenu() {
    setIsMenuOpen(false);
  }
    return ( 
        <div style={{ marginTop: 0, width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div className='navigation fixed-navigation' style={sidebarStyles}>
            <div className='sidebar'>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => {
                        closeMenu(); // Close the menu
                    }}
                    >
                        <h1 className={`logo menu-link ${activePage === 'home' ? 'active' : ''}`} style={{color: 'white'}}> PENCE </h1>
                    {/* <img
                        src={logo}
                        alt="my logo"
                        className={`logo menu-link ${activePage === 'home' ? 'active' : ''}`}
                    /> */}
                </Link>
                <div className='menu-left'>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-400}
                    className={`menu-link ${activePage === 'home' ? 'active' : ''}`}
                    // onClick={() => {
                    // onNavigation('home'); // Update active page on click
                    // }}
                >
                    Home
                </Link>
                <Link
                    to="education"
                    smooth={true}
                    duration={500}
                    offset={-200}
                    className={`menu-link ${activePage === 'education' ? 'active' : ''}`}
                    // onClick={() => {
                    // onNavigation('education');
                    // }}
                >
                    Education
                </Link>
                    <Link
                        to="workexperience"
                        smooth={true}
                        duration={500}
                        offset={-150}
                        // onClick={closeMenu}
                        className={`menu-link ${activePage === 'experiences' ? 'active' : ''}`}
                        // onClick={() => onNavigation('experiences')}
                    >
                        Work Experiences
                    </Link>
                    <Link
                        to="schoolproject"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        // onClick={closeMenu}
                        className={`menu-link ${activePage === 'schoolproject' ? 'active' : ''}`}
                        // onClick={() => onNavigation('schoolprojects')}
                    >
                        Class Projects
                    </Link>
                    <Link
                        to="personalproject"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        // onClick={closeMenu}
                        className={`menu-link ${activePage === 'blogs' ? 'active' : ''}`}
                        // onClick={() => onNavigation('blogs')}
                    >
                        Personal Projects
                    </Link>    
                
                </div>
                {/* <div className='menu-mid'>  Pence Chhay </div> */}
                <div className='menu'>
                 
                        <div>
                            SELECT
                        </div>
                        <div className='burgerBar' onClick={toggleMenu}>
                            <div id ="burgerDash-Top">
                            <div id = "burgerDash" style={{ ...burgerDashStyles }}></div>
                            <div id = "burgerDash" style={{ ...burgerDashStyles }}></div>
                            </div>
                            <div id ="burgerDash-Top">
                            <div id = "burgerDash" style={{ ...burgerDashStyles }}></div>
                            <div id = "burgerDash" style={{ ...burgerDashStyles }}></div>
                            </div>
                        </div>
                   
                </div>

                {/* Add the pop-up menu with the dynamic height */}
                <div className={`popup-menu ${isMenuOpen ? 'open' : ''}`}>
                    {/* Add a button to close the menu */}
                        <button className='close-button' onClick={closeMenu}>
                            Close Me
                        </button>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-100} // control how far from top it should start
                            // onClick={closeMenu}
                            className={`menu-link ${activePage === 'home' ? 'active' : ''}`}
                            onClick={() => {
                                // onNavigation('home'); // Update active page on click
                                closeMenu(); // Close the menu
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="education"
                            smooth={true}
                            duration={500}
                            offset={-180}
                            className={`menu-link ${activePage === 'education' ? 'active' : ''}`}
                            onClick={() => {
                                // onNavigation('education'); // Update active page on click
                                closeMenu(); // Close the menu
                              }}
                        >
                            Education
                        </Link>
                        <Link
                            to="workexperience"
                            smooth={true}
                            duration={500}
                            offset={-180}
                            className={`menu-link ${activePage === 'experiences' ? 'active' : ''}`}
                            onClick={() => {
                                // onNavigation('experiences'); // Update active page on click
                                closeMenu(); // Close the menu
                            }}
                        >
                            Work Experiences
                        </Link>
                        <Link
                            to="schoolproject"
                            smooth={true}
                            duration={500}
                            offset={-180}
                            className={`menu-link ${activePage === 'schoolproject' ? 'active' : ''}`}
                            onClick={() => {
                                // onNavigation('schoolprojects'); // Update active page on click
                                closeMenu(); // Close the menu
                            }}
                        >
                            Class Projects
                        </Link>
                        {/* <Link
                            to="blogs"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className={`menu-link ${activePage === 'blogs' ? 'active' : ''}`}
                            onClick={() => {
                                // onNavigation('blogs'); // Update active page on click
                                closeMenu(); // Close the menu
                            }}
                        >
                            Personal Projects
                        </Link> */}
                </div>
            </div> 
           </div>
      </div>);
}

export default Navigation;