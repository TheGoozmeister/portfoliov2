import React, { useState } from "react";
declare var require: any


interface CollapseProps {
    title: string;
    description: string;
    cover: string;
    example: string;
    button: string;
    link: string;
    isReversed: boolean;
    icon: string;
}

function Collapse (props: CollapseProps) : JSX.Element {

    const {title, description, cover, isReversed, button, link, example, icon} = props;
    const imgSrc = require(`../../assets/collapses/${cover}`);

    
    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__header__title">{title}</div>
                <div className="collapse__header__icon" dangerouslySetInnerHTML={{ __html: icon }}></div>
            </div>
            <div className="collapse__main">
                <div className="collapse__main__text">{description}</div>
                {isReversed ? 
                    (
                        <div className="example">
                            <div className="collapse__main__image"><img src={imgSrc} alt={title} /></div>
                            <div className="collapse__main__image__example">
                                <div className="example__text">{example}</div>
                                <a href={link} target="_blank" rel="noopener noreferrer"><div className="example__button">{button}</div></a>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="example">
                            <div className="collapse__main__image__example">
                                <div className="example__text">{example}</div>
                            </div>
                            <div className="collapse__main__image"><img src={imgSrc} alt={title} /></div>
                        </div>
                    )
                }
            </div>
                
        </div>
    );
} 


export default Collapse;