import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store.ts";
import { changeProject } from "../../store/project/projectSlice.ts";
import icons from "../../utils/iconsMapping.ts";
import Logo from "../Logo/index.tsx";
declare var require: any
const picture = require ('../../assets/img/bg-tree.jpg')

interface CardProps {
    id: number;
    cover: string;
    title: string;
    description: string;
    technos: Array<string>; 
    tools : Array<string>; 
}


function CardProject (props: CardProps) : JSX.Element {

    const dispatch: AppDispatch = useDispatch();

    const {id, title, description, cover, technos, tools} = props;
    const imgSrc = require(`../../assets/img/${cover}`);
    const actualId = useSelector((state: RootState)=>state.project.projectId);
    console.log(imgSrc, "src")
    const handleClick = () => {
        dispatch(changeProject(id));
    }
    let backgroundImage;
    if (id===actualId) {
        backgroundImage = `url(${imgSrc})`;
    } else {
        backgroundImage = `linear-gradient(rgba(37, 17, 42, 0.5), rgba(37, 17, 42, 0.5)), url(${imgSrc})`;// Ajoute une couleur de fond violet avec opacité

    }
    const cardStyle = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="cardProject" style={cardStyle} onClick={handleClick}>
            
            <div className="cardProject__infos">
                <div className="cardProject__infos__title">{title}</div>
                <div className="cardProject__infos__description">{description}</div>
            </div>
            <div className="cardProject__technos">
                {
                    technos.map((techno: string, index: number)=>(
                        <Logo key={index} text={techno} />
                    ))
                }
            </div>
            <div className="cardProject__tools">
                {
                    tools.map((tool: string, index: number)=>(
                        <Logo key={index} text={tool} />
                    ))
                }
            </div>
        </div>
    )
}


export default CardProject;