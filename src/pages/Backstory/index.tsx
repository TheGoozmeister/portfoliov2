import React from "react"
import Collapse from "../../components/Collapse/index.tsx";
import { backstoryTexts, backstoryButtonText } from "./text.ts"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import Button from "../../components/Button/index.tsx"


function Backstory () : JSX.Element {

    const language = useSelector((state: RootState)=>state.language.language);
    const texts = backstoryTexts[language];
    const button = backstoryButtonText[language];
    
    return (
        <div className="backstory">
            <div className="collapsesContainer">
                {
                    texts.map((collapse, index)=>(
                        <Collapse 
                            key={index}
                            title={collapse.title}
                            description={collapse.description}
                            cover={collapse.cover}
                            isReversed={collapse.isReversed}
                        />
                    ))
                }
            </div>
            <Button text={button} link="/skillset" />
        </div> 
    )
}


export default Backstory