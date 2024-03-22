import React from "react"
import Collapse from "../../components/Collapse/index.tsx";
import { backstoryTexts, backstoryButtonText, softskillsText } from "./text.ts"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store.ts"
import Button from "../../components/Button/index.tsx"


function Softskills () : JSX.Element {

    const language = useSelector((state: RootState)=>state.language.language);
    const texts = backstoryTexts[language];
    const button = backstoryButtonText[language];
    const moreTexts = softskillsText[language];

    return (
        <div className="mainContainer">
            <h2>{moreTexts.title}</h2>
            <div className="softskills">
                <div className="softskills__intro">{moreTexts.intro}</div>
                <div className="collapsesContainer">
                    {
                        texts.map((collapse, index)=>(
                            <Collapse 
                                key={index}
                                title={collapse.title}
                                description={collapse.description}
                                cover={collapse.cover}
                                button={collapse.button}
                                link={collapse.link}
                                example={collapse.example}
                                isReversed={collapse.isReversed}
                                icon={collapse.icon}
                            />
                        ))
                    }
                </div>
                <div className="softskills__outro">{moreTexts.outro}</div>
            </div>
            <Button text={button} link="/hardskills" /> 
        </div>
        
    )
}


export default Softskills;