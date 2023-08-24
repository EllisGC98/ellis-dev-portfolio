import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import '../App.css';

function Navbar() {
    const [hamburger, setHamburger] = useState(false);

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    }

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    }

    const navbarLinks = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Contact",
            link: "#contact",
        }
    ];

    return (
        <>
            <nav>
                <h3 onClick={pageUp} className="logo">
                    Ellis.dev
                </h3>
                <ul>
                    {navbarLinks.map((item) => (
                        <li key={item.name}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                    <li className="mobile-menu" onClick={() => hamburgerMenu()}>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </li>
                </ul>
            </nav>

            
            <div className={`mobile-navbar ${hamburger ? "open-menu" : "closed-menu" }`}>
                <span onClick={() => hamburgerMenu()}>
                    <FontAwesomeIcon icon={faXmark} />
                </span>

                <ul>
                    {navbarLinks.map((item) => (
                        <li key={item.name} onClick={() => hamburgerMenu()}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        
        
        
        
        </>
    )
}

export default Navbar;