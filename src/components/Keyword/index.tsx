import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import icons from "../../utils/iconsMapping.ts";
import { addTag, removeTechnoKeyword, removeToolKeyword } from "../../store/project/projectSlice.ts";

function Keyword(props) : JSX.Element {

    const {text} = props;
    const dispatch = useDispatch();
    const tags = useSelector((state: RootState)=> state.project.tags);
    const tagIconRef = useRef<HTMLDivElement>(null); // Référence à l'élément DOM de l'icône
    useEffect(() => {
        // Mettre à jour le contenu HTML de l'icône lors de chaque changement de texte
        if (tagIconRef.current) {
            tagIconRef.current.innerHTML = icons[text.toUpperCase()] || ""; // Assurez-vous que l'icône existe dans le tableau d'icônes
        }
    }, [text]);

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const clickedTechno: string | null= e.currentTarget.textContent ;
        if (!tags.includes(clickedTechno?.toLowerCase() as string)) {
            dispatch(addTag(clickedTechno?.toLowerCase() as string));
            dispatch(removeTechnoKeyword((clickedTechno?.toLowerCase() as string)));
        } 
    }

    return (
        <div className="keyword" onClick={handleClick}>
            <div className="tag__text">{text.toUpperCase()}</div>
            <div ref={tagIconRef} className="tag__icon"></div>
        </div>
    )
}


export default Keyword;