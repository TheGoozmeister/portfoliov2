import React, {useEffect, useRef} from "react";
import icons from "../../utils/iconsMapping.ts";

interface LogoProps {
    text: string;
}

function Logo (props: LogoProps) : JSX.Element {
    
    const {text} = props;
    const tagIconRef = useRef<HTMLDivElement>(null); // Référence à l'élément DOM de l'icône

    useEffect(()=> {
        if (tagIconRef.current) {
            tagIconRef.current.innerHTML = icons[text.toUpperCase()] || ""; // Assurez-vous que l'icône existe dans le tableau d'icônes
        }
    }, [text]);

    return (
        <div className="cardLogo">
            <div ref={tagIconRef} className="tag__icon"></div>
        </div>
    )
}


export default Logo;