import React from "react"
import "./work-experience.scss"
import "../styles.scss"

import { scrollSmoothTo } from "../../Utils"
import {experiences} from "./experince-data"

const excludedKeys= ["Span", "Logo"]

const CompanyLogo:React.FC<{logoSvg: any, span: string}> = ({logoSvg, span}) => (
    <div className="company-logo">
        <img src={logoSvg} alt=""/>
        <span>{span}</span>
    </div>
)

const ExperienceCard: React.FC<{company: string}> = ({company}) => (
    <div className="current-company">
        <div className="company-experience-description">
            {Object.keys(experiences[company]).filter(key => excludedKeys.indexOf(key) === -1).map((value: string, index: number) => (
                <div>
                    <p style={{fontSize: "24px", width: "30%"}}>{value}: </p>
                    <p className="text-align-left">{experiences[company][value]}</p>
                </div>
            ))}
        </div>
        <CompanyLogo logoSvg={experiences[company]["Logo"]} span={experiences[company]["Span"]} />
    </div>
)

export const WorkExperience = () => {
    return(
        <section id="work-experience-id" style={{overflow: "none", height: "100vh"}}>
            <h1 style={{fontSize:"76px", height: "150px", margin: "0"}}>Work Experience</h1>
            <div className="experience-container">
                <ExperienceCard company="FourKites"/>
                <div className="line-break"><div></div></div>
                <ExperienceCard company="Temenos"/>
            </div>
            <button style={{height: "50px", width:"100%"}} className="scroll-down" onClick={()=>scrollSmoothTo("skill-id")}>
                <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            </button>
        </section>
    )
}