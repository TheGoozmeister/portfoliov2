import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTechnoKeyword, setCurrentSearch, setTechnoKeywords } from "../../store/project/projectSlice.ts";
import { RootState } from "../../store/store.ts";
import Keyword from "../Keyword/index.tsx";
import Project from "../Project/index.tsx";
import dropdownTechnoText from "./text.ts";
declare var require: any
const projectsDatas: Project[] = require('../../datas/projects.json');


interface Project {
    id: number;
    title: string;
    cover: string;
    description: string;
    technos: string[];
    summary: string;
    projectLink: string;
}

function Dropdown() : JSX.Element {

    const dispatch = useDispatch();
    const [isHidden, setIsHidden] = useState(true);
    const currentSearch = useSelector((state: RootState)=>state.project.currentSearch)
    const keywords = useSelector((state: RootState)=>state.project.technoKeywords);
    const tags = useSelector((state: RootState)=> state.project.tags);
    const actualLanguage = useSelector((state: RootState)=>state.language.language);
    const texts = dropdownTechnoText[actualLanguage];
    useEffect(()=> {

        const updatedTechnos = new Set<string>();
        let allProjects : Project[] = [];

        projectsDatas.forEach((project)=> {
            allProjects.push(project);
            project.technos.forEach(techno=>updatedTechnos.add(techno));
        });

        const lowercaseMatchingTechnos = Array.from(updatedTechnos).map((techno) => techno.toLowerCase());
        
        const matchingTechnos = lowercaseMatchingTechnos.filter((techno) =>
            techno.includes(currentSearch.toLowerCase()) && !tags.includes(techno)
        );

        dispatch(setTechnoKeywords(matchingTechnos));

    },[dispatch, currentSearch, tags]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const userInput = e.target.value;
        dispatch(setCurrentSearch(userInput));
    }

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const clickedTechno: string | null= e.currentTarget.textContent ;
        if (!tags.includes(clickedTechno?.toLowerCase() as string)) {
            dispatch(addTag(clickedTechno?.toLowerCase() as string));
            dispatch(removeTechnoKeyword((clickedTechno?.toLowerCase() as string)));
        } 
    }   

    function handleHidden() {
        setIsHidden(!isHidden);
    }

    return (
        <div className="dropdown" id="techDrop">
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
                        <input type="text" placeholder="Search a techno" onChange={handleChange}/>
                    </div>
                    <div className="dropdown__keywords">
                        {Array.from(keywords).map(techno => (
                            <Keyword key={techno} onClick={(e)=>handleClick(e)} text={techno} />
                        ))}                
                    </div>
                </div>
            }
        </div>
            
    )
}


export default Dropdown;