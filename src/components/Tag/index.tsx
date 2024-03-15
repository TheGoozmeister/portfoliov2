import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTechnoKeyword, removeTag } from "../../store/project/projectSlice.ts";
import icons from "../../utils/iconsMapping.ts";

interface TagProps {
    text: string;
}

function Tag (props: TagProps) : JSX.Element {

    const { text } = props;
    const dispatch = useDispatch();
    const tagIconRef = useRef<HTMLDivElement>(null); // Référence à l'élément DOM de l'icône

    function handleClick() {
        dispatch(removeTag(text));
        dispatch(addTechnoKeyword(text));
    }

    useEffect(() => {
        // Mettre à jour le contenu HTML de l'icône lors de chaque changement de texte
        if (tagIconRef.current) {
            tagIconRef.current.innerHTML = icons[text.toUpperCase()] || ""; // Assurez-vous que l'icône existe dans le tableau d'icônes
        }
    }, [text]); // Déclencher l'effet lorsque le texte change

    return (
        <div className="tag">
            <div className="tagMain">
                <div ref={tagIconRef} className="tag__icon"></div>
                <div className="tag__text">{text.toUpperCase()}</div>
            </div>
            <div className="tag__delete" onClick={handleClick}><i className="fa-solid fa-xmark"></i></div>
        </div>
    )
}

export default Tag;
