import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {
    const [hamburger, setHamburger] = useState(false);
    const navigate = useNavigate();


    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    }

    const handleNavigate = (route) => {
        navigate(route);
        setHamburger(false); // Close the mobile menu after navigation
    }

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });

    }


    const navbarLinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Experience",
            link: "/experience",
        },
        {
            name: "Projects",
            link: "/projects",
        },
        {
            name: "Contact",
            link: "/contact",
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
                            {item.link.startsWith('/') ? (
                                <Link to={item.link} onClick={() => handleNavigate(item.link)}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a href={item.link} onClick={() => handleNavigate(item.link)}>{item.name}</a>
                            )}
                        </li>
                    ))}
                    <li className="mobile-menu" onClick={hamburgerMenu}>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </li>
                </ul>
            </nav>

            <div className={`mobile-navbar ${hamburger ? "open-menu" : "closed-menu" }`}>
                <span onClick={hamburgerMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                </span>

                <ul>
                    {navbarLinks.map((item) => (
                        <li key={item.name} onClick={() => handleNavigate(item.link)}>
                            {item.link.startsWith('/') ? (
                                <Link to={item.link}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a href={item.link} onClick={() => handleNavigate(item.link)}>{item.name}</a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar;
