import React, {useRef, useState} from "react"
import "./skills.scss"
import "../styles.scss"
import { skill_data } from "./skill-data"

type ViewType = "Grid" | "Slide"

export const Skills = () => {
    const scrollContainerRef = useRef<any>(null)
    const [view, setView] = useState("Slide" as ViewType)

    const performButttonScroll = (direction: string) => {
        const totalScroll = scrollContainerRef.current.scrollWidth;
        const offSetWidth = scrollContainerRef.current.offsetWidth;
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidthOffset = 250;
        const nextScroll = 4*cardWidthOffset;
        switch(direction){
            case "right":
                if (currentScrollLeft + nextScroll < totalScroll - offSetWidth){
                    scrollContainerRef.current.scrollTo({
                        left: Math.floor((currentScrollLeft + nextScroll)/cardWidthOffset)*cardWidthOffset,
                        behavior: "smooth"
                    })
                }else{
                    scrollContainerRef.current.scrollTo({
                        left: totalScroll - offSetWidth,
                        behavior: "smooth"
                    }) 
                }                                
            break;
            case "left":{
                if( currentScrollLeft - nextScroll > 0){
                    scrollContainerRef.current.scrollTo({
                        left: Math.floor((currentScrollLeft - nextScroll)/cardWidthOffset)*cardWidthOffset,
                        behavior: "smooth"
                    })
                }else{
                    scrollContainerRef.current.scrollTo({
                        left: 0,
                        behavior: "smooth"
                    }) 
                }
                break;
            }
        }
    }

    const SkillCards = () => (<>
       {skill_data.map((skill, key) => (
        <div key={key} className="skill-card" style={{background: `${skill.backGroundColor}`,color: `${skill.color}`}}>
            <div style={{ color: `${skill.color}`, fontSize:"1rem", fontWeight:"bold"}}>{skill.name}</div>
            {skill.logo && <img alt='logo' src={skill.logo}/>}
            <div style={{fontSize: ".75rem"}}>Skill Level:{skill.skill_level}</div>
            <div style={{fontSize: ".75rem"}}>YOE:{skill.yoe}</div>
            <div className='experience' style={{fontSize: ".75rem"}}>{skill.experience}</div>
        </div>))} 
    </>)

    return(
        <section id="skill-id" className="skill-container">
            <div className="skill-cards-outer">
                <h1 style={{fontWeight: 'lighter', fontSize:"4rem", padding: '8px', margin: "0"}}>Skills</h1>
                <div className="view-toggle" >
                    <i data-tip="Grid" onClick={()=>setView("Grid")} className={`fa fa-th-large ${view==="Grid" ? 'selected': ''}`} aria-hidden="true"></i>
                    <i data-tip="Slide" onClick={()=>setView("Slide")} className={`fa fa-sliders ${view==="Slide" ? 'selected': ''}`} aria-hidden="true"></i>
                </div>
                <div style={{display: "flex"}} >
                    {view === "Grid" ? (
                        <div className="skill-cards-grid-container">
                            <SkillCards />
                        </div>
                        ) : (<>
                        <button className="scroll-left" style={{width:"30px"}} onClick={()=>performButttonScroll("left")}>
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>
                        <div className="skill-cards-scroll-container" ref={scrollContainerRef}>
                            <SkillCards />
                        </div>
                        <button className="scroll-right" style={{width:"30px"}} onClick={()=>performButttonScroll("right")}>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </button></>
                    )}
                </div>
            </div>
        </section>
    )
}