import React, { useState } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { FaDribbble, FaBehance, FaLinkedin } from 'react-icons/fa';


const NavLinks = () => (
    <ul id="nav-link-ul">
        <li><NavLink to="/" exact>home</NavLink></li>
        <li><NavLink to="/sobre">sobre</NavLink></li>
        <li><NavLink to="/myfarma" >cases</NavLink></li>
        <li><NavLink to="/contato" >contato</NavLink></li>
    </ul>
)

const NavSocial = () => (
    <div id="nav-social-wrapper">
        <a aria-label="Dribbble" className="nav-social fab fa-dribbble" rel="noopener noreferrer" target="_blank" href="https://dribbble.com/alansiqueira"><FaDribbble/></a>
        <a aria-label="Behance" className="nav-social fab fa-behance" rel="noopener noreferrer" target="_blank" href="https://www.behance.net/alansiq"><FaBehance/></a>
        <a aria-label="LinkedIn" className="nav-social fab fa-linkedin" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/alanpsiqueira/"><FaLinkedin/></a>
    </div>
)

const NavItems = () => (
    <div className="nav-items">
        <NavLinks></NavLinks>
        <NavSocial></NavSocial>
    </div>
);


const Nav = () => {

    const [isMobileNavOpen, setOpen] = useState(false);
    let openMobileNav = () => {
        setOpen(!isMobileNavOpen);
    }


    return (
        
        <header id="nav" className={isMobileNavOpen ? "nav-mobile-open" : ""}>
            <div id="nav-container">

                <a id="nav-logo" href="/"></a>

                <div id="nav-hamburguer" onClick={openMobileNav}>
                    <div className="div1"></div>
                    <div className="div1"></div>
                    <div className="div2"></div>
                </div>

                <NavItems/>

            </div>
        </header>
    )
}

export default Nav;