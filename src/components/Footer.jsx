import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
        <>
        <footer>
            <div className="container">
                <div className="footer-content">
                    <h3>
                        Copyright © {new Date().getFullYear()}. All rights reserved
                    </h3>
                    <div className="footer-socials">
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
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;