import React from "react";
import Button from "../Button/index.tsx"
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import projectsData from '../../datas/projects.json';
import Logo from "../Logo/index.tsx";
import { projectTexts } from "./texts.ts";


declare var require: any
const picture = require('../../assets/img/bg-tree.jpg');

interface ProjectDatas {
    id: number;
    cover: string;
    title: string;
    description: { [key: string]: string }; 
    technos: Array<string>;
    tools: Array<string>;
    summary: { [key: string]: string }; 
    projectLink: string;
}

function Project () : JSX.Element {

    const projectId = useSelector((state: any)=>state.project.projectId);
    const project : ProjectDatas | undefined = projectsData.find((project)=>project.id === projectId);
    const actualLanguage = useSelector((state: RootState)=> state.language.language);
    const text = projectTexts[actualLanguage];

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
                <div className="project__infos__summary">{project.summary[actualLanguage]}</div>
                <div className="tectool">
                    <div className="project__infos__technos">
                        {
                            project.technos.map((techno: string, index: number)=>(
                                <div key={index} className="project__infos__technos__techno">
                                    <Logo text={techno} />
                                    {techno}
                                </div>
                            ))
                        }
                    </div>
                    <div className="project__infos__tools">
                        {
                            project.tools.map((tool: string, index: number)=>(
                                <div key={index} className="project__infos__tools__tool">
                                    <Logo text={tool} />
                                    {tool}
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
            <div id="bttProject">
                {text} <i className="fa-brands fa-github"></i>
            </div>
            
        </div>
    )
}


export default Project;