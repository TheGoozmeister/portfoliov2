import React from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../store/language/languageSlice.ts";
declare var require: any


interface FlagProps {
    language: string;
}

function Flag (props: FlagProps) : JSX.Element {

    const {language} = props;
    const flagImg = require(`../../assets/logos/${language}.png`);

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setLanguage(language));
    }

    return (
        <div className="flag" onClick={handleClick}>
            <img src={flagImg} alt={language} />
        </div>
    )
}


export default Flag;