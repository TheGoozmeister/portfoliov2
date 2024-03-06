import React from "react";
import { useDispatch } from "react-redux";
import { addTechnoKeyword, removeTag } from "../../store/project/projectSlice.ts";

interface TagProps {
    text: string;
}

function Tag (props: TagProps) : JSX.Element {

    const {text} = props;
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(removeTag(text));
        dispatch(addTechnoKeyword(text));
    }
    return (
        <div className="tag">
            <div className="tag__text">{text.toUpperCase()}</div>
            <div className="tag__icon" onClick={()=>handleClick()}>X</div>
        </div>
    )
}


export default Tag;