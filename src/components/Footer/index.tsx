import React, { useState } from "react"
import { footerTexts } from "./texts.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


function Footer () : JSX.Element {

    const actualLanguage = useSelector((state: RootState)=> state.language.language);
    const texts = footerTexts[actualLanguage];
    

    return (
        <footer>
            <div className="footer__links">
                <div className="footer__link">
                    <i className="fa-brands fa-github"></i>
                </div>
                <div className="footer__link">
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div className="footer__fullLegal">
                <div className="footer__fullLegal__element">
                    {texts.element1}
                </div>
                <div className="footer__fullLegal__element">
                    {texts.element2}
                </div>
            </div>
            
        </footer>
    )
}


export default Footer;