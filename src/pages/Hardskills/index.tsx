import React, { useState } from "react";
import Button from "../../components/Button/index.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import skillsetTexts from "./test.ts";
import { hardSkillsTexts } from "./test.ts";
import Hardskill from "../../components/HardSkill/index.tsx";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/index.tsx";
declare var require: any


function Hardskills(): JSX.Element {
    const actualLanguage = useSelector((state: RootState)=>state.language.language);
    const texts = skillsetTexts[actualLanguage];
    const textsTechnos = hardSkillsTexts[actualLanguage];
    
    console.log(textsTechnos);

    return (
        <div className="skillset">
            <div className="hardskills">
                <h2>{texts.title}</h2>
                <div className="skillset__intro">
                    {texts.intro}
                </div>
                <div className="skillset__board">
                    {
                        textsTechnos.map((hardskill, index)=>(
                            <Hardskill 
                                key={index}
                                techno={hardskill.techno} 
                                skills={hardskill.skills}
                                icon={hardskill.icon}
                                subs={hardskill.subs}
                                img={hardskill.img}
                            />
                        ))
                    }
                </div>
                <div className="skillset__outro">
                    {texts.outro}
                </div>
                <div className="retBut">
                    <NavLink to={"/softskills"} className="return">
                        <i className="fa-solid fa-arrow-left"></i>
                    </NavLink>
                    <Button text={texts.button} link="/projects" />
                </div>
                <Footer />
            </div> 
        </div>
    );
}

export default Hardskills;
