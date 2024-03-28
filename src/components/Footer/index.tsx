import React from "react"
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
            <div className="footer__legal">
                {texts.legals}
            </div>
        </footer>
    )
}


export default Footer;