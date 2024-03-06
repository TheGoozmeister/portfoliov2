import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
    text: string;
    link: string;
}

function Button (props: ButtonProps) : JSX.Element {
    
    const {text, link} = props;
    
    return(
        <div className="button">
            <Link to={link} className="button__link">
                {text}
            </Link>
        </div>
    )
}


export default Button;