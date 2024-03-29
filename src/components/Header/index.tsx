import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/store";
import Flag from "../Flag/index.tsx";
import headerTexts from "./texts.ts"; 
declare var require: any
const logo = require ('../../assets/logos/header-logo.png')


function Header () : JSX.Element {

    const actualLanguage = useSelector((state: RootState)=> state.language.language);
    const [showMenu, setShowMenu] = useState(true);
    const texts = headerTexts[actualLanguage];
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const toggleMenu = () => {
        if (window.innerWidth<=768) {
            setShowMenu(!showMenu);
        }
    };

    

    return (
        <header>
            <div className="header__logo">
                <NavLink to={"/"} className="containerLogo">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            
            {actualLanguage === "fr" ? 
                <Flag language="eng" /> 
                :
                <Flag language="fr" />
            }
            {window.innerWidth <= 768 &&
                <div className="burger" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
            }
            {showMenu && 
                <nav className="header__menu">
                <NavLink to={"/"} className="header__link" onClick={toggleMenu} style={({isActive})=>isActive ? {color: "#F55970"} : {}}>{texts.home}</NavLink>
                <NavLink to={"/softskills"} className="header__link" onClick={toggleMenu} style={({isActive})=>isActive ? {color: "#F55970"} : {}}>{texts.backstory}</NavLink>
                <NavLink to={"/hardskills"} className="header__link" onClick={toggleMenu} style={({isActive})=>isActive ? {color: "#F55970"} : {}}>{texts.skillset}</NavLink>
                <NavLink to={"/projects"} className="header__link" onClick={toggleMenu} style={({isActive})=>isActive ? {color: "#F55970"} : {}}>{texts.projects}</NavLink>
                <NavLink to={"/contact"} className="header__link" onClick={toggleMenu} style={({isActive})=>isActive ? {color: "#F55970"} : {}}>{texts.contact}</NavLink>
            </nav>
            }
            
            
        </header> 
    )
}


export default Header;