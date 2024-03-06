import React, {useEffect} from "react";
import ReactAudioPlayer from 'react-audio-player';
import Button from "../../components/Button/index.tsx";
import Flag from "../../components/Flag/index.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import landingTexts from "./text.ts";
declare var require: any
const sound = require("../../assets/sounds/shonen.mp3");


function Landing () : JSX.Element {
    
    const language = useSelector((state: RootState)=>state.language.language);
    const texts = landingTexts[language];


    return (
        <div className="landing">
            <ReactAudioPlayer 
                id="mainSound"
                src={sound}
                autoPlay={true}
            />
            <h1>{texts.title}</h1>
            <div className="landing__main">
                <div className="landing__main__presentation">
                    <div className="landing__main__presentation__text">
                        <div className="presentationText__1">{texts.presentation1}</div>
                        <div className="presentationText__2">{texts.presentation2}</div>
                    </div>
                    <div className="landing__main__presentation__button">                          
                        <Button text={texts.button} link="/backstory" />
                    </div>
                </div>
                <div className="landing__setup">
                    <div className="landing__setup__label">
                        {texts.setup}
                    </div>
                    <div className="landing__setup__flags">
                        <Flag language="fr" />
                        <Flag language="eng" />
                    </div>
                </div>
            </div>
        </div> 
    )
}


export default Landing;