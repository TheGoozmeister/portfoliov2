import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeToolKeyword, setCurrentSearch, setToolKeywords } from "../../store/project/projectSlice.ts";
import { RootState } from "../../store/store.ts";
import Project from "../Project/index.tsx";
import Keyword from "../Keyword/index.tsx";
import dropdownToolText from "./text.ts";
declare var require: any
const projectsDatas: Project[] = require('../../datas/projects.json');


interface Project {
    id: number;
    title: string;
    cover: string;
    description: string;
    technos: string[];
    tools: string[];
    summary: string;
    projectLink: string;
}

function DropdownTool() : JSX.Element {

    const dispatch = useDispatch();
    const [isHidden, setIsHidden] = useState(true);
    const currentSearch = useSelector((state: RootState)=>state.project.currentSearch)
    const keywords = useSelector((state: RootState)=>state.project.toolKeywords);
    const tags = useSelector((state: RootState)=> state.project.tags);
    const actualLanguage = useSelector((state: RootState)=>state.language.language);
    const texts = dropdownToolText[actualLanguage];

    useEffect(()=> {

        const updatedTools = new Set<string>();
        let allProjects : Project[] = [];

        projectsDatas.forEach((project)=> {
            allProjects.push(project);
            project.tools.forEach(tool=>updatedTools.add(tool));
        });

        const lowercaseMatchingTools = Array.from(updatedTools).map((tool) => tool.toLowerCase());
        
        const matchingTools = lowercaseMatchingTools.filter((tool) =>
            tool.includes(currentSearch.toLowerCase()) && !tags.includes(tool)
        );

        dispatch(setToolKeywords(matchingTools));

    },[dispatch, currentSearch, tags]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const userInput = e.target.value;
        dispatch(setCurrentSearch(userInput));
    }

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const clickedTool: string | null= e.currentTarget.textContent ;
        if (!tags.includes(clickedTool?.toLowerCase() as string)) {
            dispatch(addTag(clickedTool?.toLowerCase() as string));
            dispatch(removeToolKeyword((clickedTool?.toLowerCase() as string)));
            setIsHidden(false);
        } 
    }   

    function handleHidden() {
        setIsHidden(!isHidden);
    }

    return (
        <div className="dropdown">
            <div className="dropdown__label">
                <div className="dropdown__label__text">{texts}</div>
                {isHidden ? 
                    <div className="dropdown__label__icon" onClick={handleHidden}>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                :
                    <div className="dropdown__label__icon" onClick={handleHidden}>
                        <i className="fa-solid fa-caret-up"></i>
                    </div>
                }
            </div>
            {!isHidden && 
                <div className="dropdown__search">
                <div className="dropdown__searchBar">
                    <input type="text" placeholder="Search a tool" onChange={handleChange}/>
                </div>
                <div className="dropdown__keywords">
                    {Array.from(keywords).map(tool => (
                        <Keyword key={tool} onClick={(e)=>handleClick(e)} text={tool} />
                    ))}                
                </div>
            </div>
            }
        </div>
    )
}


export default DropdownTool;