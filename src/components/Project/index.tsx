import React from "react";
import Button from "../Button/index.tsx"
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import projectsData from '../../datas/projects.json';


declare var require: any
const picture = require('../../assets/img/bg-tree.jpg');

interface ProjectDatas {
    id: number;
    cover: string;
    title: string;
    description: { [key: string]: string }; 
    technos: Array<string>;
    summary: { [key: string]: string }; 
    projectLink: string;
}

function Project () : JSX.Element {

    const projectId = useSelector((state: any)=>state.project.projectId);
    const project : ProjectDatas | undefined = projectsData.find((project)=>project.id === projectId);
    const actualLanguage = useSelector((state: RootState)=> state.language.language);

    if (!project) {
        return <div>Projet introuvable</div>;
    }

    const imgSrc : string = require(`../../assets/img/${project.cover}`)

    return (
        <div className="project">
            <div className="project__image">
                <img src={imgSrc} alt="title" />
            </div>
            <div className="project__title">{project.title}</div>
            <div className="project__infos">
                <div className="project__infos__summary">{project.description[actualLanguage]}</div>
                <div className="project__infos__technos">
                {
                    project.technos.map((techno: string, index: number)=>(
                        <div key={index} className="project__infos__technos__techno">
                            {techno}
                        </div>
                    ))
                }
                </div>
            </div>
            <Button text="See project" link="#" />
        </div>
    )
}


export default Project;