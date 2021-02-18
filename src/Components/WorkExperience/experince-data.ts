import Fourkites from "../../Logos/FK.svg"
import Temenos from "../../Logos/Temenos.svg"
import Byjus from "../../Logos/byjus.svg"

export type experience = Record<string, string>
export type experiencekey = "Role" | "Project Name" | "Project Description" | "Experience" | "Libraries/Utils Used" | "Logo" | "Span"
type experiences = Record<string, experience >

export const experiences: experiences = {
    "Byjus" :{
        "Role":                 "SSE, Fronted",
        "Project Name":         "ELA",
        "Business":             "Edu Tech company",
        "Project Description":  "Mobile app helps in learning english for students across ages from 3-8 classes",
        "Experience":           "Got to work in a micro frontend architecture along in a mono repo structured project managed by lerna.\n Project development involves React JS, ServiceWorker( PWA ), redux, redux-saga, styled-components and like wise latest libraries on the frontend aspect. Page analytics integrations include Pendo, Hotjar. Experience working on Github, Jenkins, Docker, AWS basics. Work experience in a CI/CD environment where the whole process was dockerised. Got chance to do research on Google Analytics, A/B Testing, Feature Flag managment concepts, etc.",
        "Libraries/Utils Used": "React, Redux, Redux-Saga, StyledComponents, Docker, Jenkins, React Leaflet",
        "Logo": Byjus,
        "Span": "(2020-*)"
    },
    "FourKites" :{
        "Role":                 "Senior Frontend Engineer",
        "Project Name":         "Re-design",
        "Business":             "Provides End-to-End predictive visibility in supply chain",
        "Project Description":  "Redesign project is revamp of the existing legacy UI. It's also considered to be re-architecting frontend to use best practices available out there. Developed using React as base framework/library.",
        "Experience":           "Got to work in a micro frontend architecture along in a mono repo structured project managed by lerna.\n Project development involves React JS, ServiceWorker( PWA ), redux, redux-saga, styled-components and like wise latest libraries on the frontend aspect. Page analytics integrations include Pendo, Hotjar. Experience working on Github, Jenkins, Docker, AWS basics. Work experience in a CI/CD environment where the whole process was dockerised. Got chance to do research on Google Analytics, A/B Testing, Feature Flag managment concepts, etc.",
        "Libraries/Utils Used": "React, Redux, Redux-Saga, StyledComponents, Docker, Jenkins, React Leaflet",
        "Logo": Fourkites,
        "Span": "(2019-2020)"
    },
    "Temenos" :{
        "Role":                 "Software Development Engineer",
        "Project Name":         "Treasury Front Office(TFO)",
        "Business":             "Solution for banking daily implementation",
        "Project Description":  "Treasury Front Office is UI application that provides Front office dealers to execute deals in FX,MM,Captial Markets, etc.",
        "Experience":           `(2years 6months) - Worked on Front office desktop application developed in both VB6 and VB.NET with database maintained in MS SQL.
                                (1year 6months) - Develop web application for a treasury front office. 
                                Handling User interaction and validation of pages through JavaScript.
                                `,
        "Logo": Temenos,
        "Span": "(2015-2019)"
    }
}