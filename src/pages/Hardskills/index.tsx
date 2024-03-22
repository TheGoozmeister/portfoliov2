import React, { useState } from "react";
import Button from "../../components/Button/index.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import skillsetTexts from "./test.ts";
declare var require: any


function Hardskills(): JSX.Element {
    const actualLanguage = useSelector((state: RootState)=>state.language.language);
    const texts = skillsetTexts[actualLanguage];
    const boardImg = require(`../../assets/board.png`);

    const [fullScreen, setFullScreen] = useState(false);

    function toggleFullScreen () {
        setFullScreen(!fullScreen);
    }

    return (
        <div className="skillset">
            {fullScreen ? 
            <div>
                <div className="fullscreen">
                    <img src={boardImg} alt="board" />
                    
                </div>   
                <div className="fullscreen__exit" onClick={toggleFullScreen}>
                <i className="fa-solid fa-xmark" id="fscross" onClick={toggleFullScreen}></i>
                <div className="fullscreen__quit">
                    {texts.exit}
                </div>
            </div>
            </div>
                
            : 
            <div className="hardskills">
                <h2>{texts.title}</h2>
                <div className="skillset__intro">
                    {texts.intro}
                </div>
                <div className="skillset__board">
                    <div className="skillset__board__main">
                        <div className="boardButton"onClick={toggleFullScreen}>{texts.board} <i className="fa-solid fa-folder-tree" id="tree"></i></div>
                        <img src={boardImg} alt="board" />
                    </div>
                </div>
                <div className="skillset__outro">
                    {texts.outro}
                </div>
                <Button text={texts.button} link="/projects" />
            </div> 
        } 
        </div>
    );
}

export default Hardskills;
