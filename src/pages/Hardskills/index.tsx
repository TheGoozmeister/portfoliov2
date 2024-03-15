import React from "react";
import Button from "../../components/Button/index.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import skillsetTexts from "./test.ts";


function Hardskills(): JSX.Element {
    const actualLanguage = useSelector((state: RootState)=>state.language.language);
    const texts = skillsetTexts[actualLanguage];

    return (
        <div className="skillset">
            <h2>{texts.title}</h2>
            <div className="skillset__intro">
                {texts.intro}
            </div>
            <div className="skillset__board">
                <iframe
                    className="skillset__board__main"
                    title="Miro Embed"
                    width="908"
                    height="432"
                    src="https://miro.com/app/live-embed/uXjVNi_Xvf8=/?moveToViewport=-2122,-74,2720,1302&embedId=402631805045&mode=embed"
                    frameBorder="0"
                    scrolling="no"
                    allow="fullscreen"
                    allowFullScreen>
                </iframe>
            </div>
            <div className="skillset__outro">
                {texts.outro}
            </div>
            <Button text={texts.button} link="/projects" />
        </div>
    );
}

export default Hardskills;
