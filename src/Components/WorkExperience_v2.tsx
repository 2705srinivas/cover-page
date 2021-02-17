import React from 'react';
import { AccordionV2 } from './Accordion_v2'
import "./styles.scss"
import {experiences} from "./WorkExperience/experince-data"
import { Skills } from './Skills';
import { Contacts } from './Contacts';

const ExperienceCard = (props: any) => {
    return(
        <div className='experience' style={{padding:'32px', textAlign:'left', color:'white'}}>
            <div ><strong>{experiences[props.company]["Project Name"]}</strong></div>
            <div>Redesign project is revamp of the existing legacy UI. It's also considered to be re-architecting frontend to use best practices available out there. Developed using React as base framework/library.</div>
            <br />
            <div>
                <strong>Experience : </strong>
                {experiences[props.company]["Experience"]}
            </div>
            <br />
            <div><strong>Libraries/Utils Used : </strong>React, Redux, Redux-Saga, StyledComponents, Docker, Jenkins, React Leaflet</div>
        </div>
    )
}

const LeftSection = () => (
    <div className='left-profile' style={{width: '35%', background: '#f1ecec', padding: '20px',
            display:'flex', flexDirection:'column', alignItems:'center', position: 'relative'}}>
        <img style={{height: 'auto', width: '50%', borderRadius:'500px'}} alt='profilePic' src='./images/ProfilePic.jpg'></img>
        <div className='flex' style={{color: '#201834', fontSize: '1.5rem', padding: '8px'}}>
            <Contacts />
        </div>
        <div style={{color: 'black', textAlign: 'left', marginTop: '16px'}}>
            <strong>Open Source Contributions:</strong>
            <ul>
                <li style={{wordBreak:"break-word"}}>Infinite-virtual-scroll - 
                    <a href='https://www.npmjs.com/package/svelte-scroll-infinite-list' 
                        style={{color: 'black'}}
                        target="blank"
                    >https://www.npmjs.com/package/svelte-scroll-infinite-list</a>
                </li>
            </ul>
        </div>
    </div>
)
const RightSection = () => (
    <div style={{overflow:'auto'}}>
        <h1 style={{fontWeight: 'lighter', fontSize:"4rem", padding: '8px', margin: "0"}}>Work Experience</h1>
        <div style={{display:'flex'}} className='timeline'>
            <AccordionV2 logo={experiences["Byjus"]["Logo"]} designation={experiences["Byjus"]["Role"]} span={experiences["Byjus"]["Span"]}>
                <ExperienceCard company="Byjus"/>
            </AccordionV2>
        </div>

        <div style={{display:'flex'}} className='timeline'>
        <AccordionV2 logo={experiences["FourKites"]["Logo"]} designation={experiences["FourKites"]["Role"]} span={experiences["FourKites"]["Span"]}>
            <ExperienceCard company="FourKites"/>
        </AccordionV2>
        </div>

        <div style={{display:'flex'}} className='timeline'>
        <AccordionV2 logo={experiences["Temenos"]["Logo"]} designation={experiences["Temenos"]["Role"]} span={experiences["Temenos"]["Span"]}>
            <ExperienceCard company="Temenos"/>
        </AccordionV2>
        </div>
        <Skills />
    </div>
)

export const WorkExperience = () => {
    return(
        <section id="work-experience-id" style={{overflow: "none", height: "100vh"}}>
            <div style={{display: 'flex', height:'100%'}}>
                <LeftSection />
                <RightSection />
            </div>
        </section>
    )
}