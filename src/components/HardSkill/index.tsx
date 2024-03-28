import React, { useEffect } from "react"
import { useRef } from "react"
declare var require: any


interface HardSkillProps {
    techno: string,
    skills: Array<string>,
    icon: string,
    subs: Array<string>,
    img: string,
}

function Hardskill (props: HardSkillProps) : JSX.Element {

    const {techno, skills, icon, subs, img} = props;
    const iconRef = useRef<HTMLDivElement>(null);
    const imgSrc = require(`../../assets/hardskills/${img}`);

    useEffect(() => {
        if (iconRef.current) {
            iconRef.current.innerHTML = icon;
        }
    }, [icon]); 
    return (
        <div className="hardskill">
            <div className="hardskill__cover">
                <img src={imgSrc} alt={techno} />
            </div>
            <div className="hardskill__header">
                <div className="hardskill__header__main">
                    <div className="hardskill__header__main__icon" ref={iconRef}></div>
                    <div className="hardskill__header__main__title">{techno}</div>
                </div>
                <div className="hardskill__header__subs">
                    {
                        subs && subs.map((sub,index) => (
                            <Icon key={index} icon={sub}/>
                        ))
                    }
            </div>
            </div>
            
            <div className="hardskill__skills">
                {
                    skills.map((skill,index)=>(
                        <div key={index} className="hardskill__skills__skill">{skill}</div>
                    ))
                }
            </div> 
        </div>
    )
}


function Icon (props) : JSX.Element {

    const {icon} = props;
    const iconRef = useRef<HTMLDivElement>(null);
    console.log(icon)
    useEffect(() => {
        if (iconRef.current) {
            iconRef.current.innerHTML = icon;
        }
    }, [icon]); 

    return (
        <div className="hardskill__sub" ref={iconRef}></div>
    )
}

export default Hardskill;