import React, { useState } from "react";


interface CollapseProps {
    title: string;
    description: string;
    cover: string;
    isReversed: boolean;
}

function Collapse (props: CollapseProps) : JSX.Element {

    const [isHidden, setIsHidden] = useState(true);
    const {title, description, cover, isReversed} = props;
    console.log(title, description, cover, isReversed)
    function handleClick () {
        setIsHidden(!isHidden);
    }
    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__header__title">{title}</div>
                <div className="collapse__header__icon" onClick={handleClick}></div>
            </div>
            {!isHidden && 
                <div className="collapse__main">
                <div className="collapse__main__image"><img src={cover} alt={title} /></div>
                <div className="collapse__main__text">{description}</div>
            </div>
            }
        </div>
    )
} 


export default Collapse;