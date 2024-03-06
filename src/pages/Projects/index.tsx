import React from "react"
import { useState, useEffect } from "react";
import CardProject from "../../components/CardProject/index.tsx";
import Project from "../../components/Project/index.tsx";
import Dropdown from "../../components/Dropdown/index.tsx";
import Tag from "../../components/Tag/index.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
declare var require: any
const projectsDatas = require('../../datas/projects.json');


interface Project {
    id: number;
    title: string;
    cover: string;
    description: string;
    technos: Array<string>;
    tools: Array<string>;
    summary: string;
    projectLink: string;
}

function Projects () : JSX.Element {

    const currentSearch = useSelector((state: RootState)=>state.project.currentSearch);
    const actualLanguage = useSelector((state: RootState)=> state.language.language);
    const tags = useSelector((state: RootState)=>state.project.tags);
    const filteredProjects = projectsDatas.filter((project: Project) => {
        const searchMatch = project.technos.some((techno) =>
            techno.toLowerCase().includes(currentSearch.toLowerCase())
        );        
        const tagsMatch = tags.every((tag) =>
            project.technos.some((techno: string) => techno.toLowerCase().includes(tag.toLowerCase()))
        );   
        return searchMatch && tagsMatch;
    });
    
    return (
        <div className="mainContainer">
            <h2>EACH DAY THE BRANCHES GROW</h2>
            <div className="pageContainer">
                <div className="projectList">
                    <div className="tuto">
                        Select some technos and/or some tools to see the projects using them. <br />
                        Select a project to see more and to access to code.
                    </div>
                    <div className="dropdowns">
                        <Dropdown />
                    </div>
                    <div className="tags">
                        {tags.map((tag, index)=> 
                            <Tag key={index} text={tag} />
                        )}
                    </div>
                    <div className="results">
                        {filteredProjects.length} projects
                    </div>
                    <div className="projectList__results">
                        {
                            filteredProjects.map((project: Project, index: number) => (
                                <CardProject 
                                    key={index}
                                    title={project.title}
                                    id={project.id}
                                    cover={project.cover}
                                    description={project.description[actualLanguage]}
                                    technos={project.technos}
                                    tools={project.tools}
                                />    
                            ))
                        }
                    </div>
                </div>  
                <Project />
            </div>
        </div> 
    )
}


export default Projects;