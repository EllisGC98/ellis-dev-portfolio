import '../App.css';
import HTML from '../assets/icons/HTML.svg';
import CSS from '../assets/icons/CSS.svg';
import JS from '../assets/icons/JAVASCRIPT.svg';
import React from '../assets/icons/REACT.svg';
import Sol from '../assets/icons/SOLIDITY.svg';
import ETH from '../assets/icons/ETH.svg'
import Git from '../assets/icons/GIT.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Hero() {
    const skillsIcons = [
        {
            img: HTML,
            title: "HTML5",
        },
        {
            img: CSS,
            title: "CSS3",
        },
        {
            img: JS,
            title: "JavaScript",
        },
        {
            img: React,
            title: "React",
        },
        {
            img: Sol,
            title: "Solidity"
        },
        {
            img: ETH,
            title: "Ethereum"
        },
        {
            img: Git,
            title: "Git"
        },
    ];

    return (
        <>
        <section id="home" className="hero">
            <div className="container">
                <div className='content'>
                <div className="hero-main">
                    <div className="hero-text">
                        <h1> Hello,<br></br> I'm Ellis Coleman <br></br> Front-End Developer<br></br>👋🏻</h1>
                    
                        
                        <p>
                            A Front-End React Developer based in Belfast, Ireland.
                        </p>
                        <span>
                            <a
                                aria-label='linkedin'
                                rel='noreferrer'
                                target='_blank'
                                href='https://www.linkedin.com/in/ellis-coleman-9201a0161/'
                                style={ { marginRight: '10px'}}
                            >
                                <FontAwesomeIcon icon={faLinkedin} size='3x' />
                            </a>
                            <a 
                                aria-label='github'
                                rel='noreferrer'
                                target='_blank'
                                href='https://github.com/EllisGC98'
                            >
                                <FontAwesomeIcon icon={faGithub} size='3x' />
                            </a>
                        </span>
                    </div>

                    <div className='hero-img'>
                      
                    </div>
                </div>

                {/* */}
                <div className='skills'>
                    <p>Tech Stack</p>
                    <div className='logos'>
                        <ul>
                            {skillsIcons.map((icon) => (
                                <li key={icon.title}>
                                    <img src={icon.img} title={icon.title} alt='skill-icon' />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
)
}

export default Hero;