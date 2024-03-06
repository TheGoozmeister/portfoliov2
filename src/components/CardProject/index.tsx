import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store.ts";
import { changeProject } from "../../store/project/projectSlice.ts";
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

    console.log(imgSrc, "src")
    const handleClick = () => {
        dispatch(changeProject(id));
    }

    return (
        <div className="cardProject" onClick={handleClick}>
            <div className="cardProject__img">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="cardProject__infos">
                <div className="cardProject__infos__title">{title}</div>
                <div className="cardProject__infos__description">{description}</div>
            </div>
            <div className="cardProject__technos">
                {
                    technos.map((techno: string, index: number)=>(
                        <div key={index} className="cardProject__technos__techno">
                            {techno}
                        </div>
                    ))
                }
            </div>
            <div className="cardProject__tools">
                {
                    tools.map((tool: string, index: number)=>(
                        <div key={index} className="cardProject__tools__tool">
                            {tool}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default CardProject;