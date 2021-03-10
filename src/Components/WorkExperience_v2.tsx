import React, { useRef, useState } from 'react';
import { AccordionV2 } from './Accordion_v2'
import "./styles.scss"
import {experiences} from "./WorkExperience/experince-data"
import { Skills } from './Skills';
import { useClickOutside } from '../Utils';

const ExperienceCard = (props: any) => {
    return(
        <div className='experience' style={{padding:'32px', textAlign:'left', color:'var(--text-color)'}}>
            <div ><strong>{experiences[props.company]["Project Name"]}</strong></div>
            <div>{experiences[props.company]["Project Description"]}</div>
            <br />
            <div>
                <strong>Experience : </strong>
                {experiences[props.company]["Experience"]}
            </div>
            <br />
            {experiences[props.company]["Libraries/Utils Used"] && <div><strong>Libraries/Utils Used : </strong>{experiences[props.company]["Libraries/Utils Used"]}</div>}
        </div>
    )
}

//eslint-disable-next-line
const ExperienceAccordion = () => {
    return(<>
        <div style={{display:'flex'}} className='timeline'>
            <AccordionV2 company="Byjus">
                <ExperienceCard company="Byjus"/>
            </AccordionV2>
        </div>

        <div style={{display:'flex'}} className='timeline'>
        <AccordionV2 company="FourKites">
            <ExperienceCard company="FourKites"/>
        </AccordionV2>
        </div>

        <div style={{display:'flex'}} className='timeline'>
        <AccordionV2 company="Temenos">
            <ExperienceCard company="Temenos"/>
        </AccordionV2>
        </div>
    </>)
}

const ExperienceFlexBox = () => {
    const [experienceSelected, setSelected] = useState('');
    const experienceFlexChild = {
        height: '100%',
        // backgroundColor: '#f1ecec',
        // minWidth:'45%', 
        color:'var(--page-background)',
        flexBasis: '45%',
        margin: '12px',
        fontWeight: 'bold' as any,
        padding: '2rem',
        position: 'relative' as any,
        flexDirection: 'column' as any,
        pointerEvents: experienceSelected ? 'none' : '' as any,
    }
    return(
        <div style={{display: 'flex', flexWrap:'wrap',position:'relative'}}>
            <div onClick={()=>{setSelected('Byjus')}} className="flex experience-flex-item company-card" style={experienceFlexChild}>
                <img alt="" style={{position:'absolute', height:'100%', width: '100%', opacity:'0.3'}} src="./images/notebook_bg.jpg" />
                <img style={{maxWidth:'50%', zIndex:2}} src={experiences["Byjus"]["Logo"]} alt=""/>
                <div style={{color: 'var(--text-color)', zIndex:2,width:'fit-content', margin:'0 12px'}}><span><em>{experiences["Byjus"]["Span"]}</em></span></div>
                <div style={{color:'var(--text-color)', zIndex:2}} ><span><em>{experiences["Byjus"]["Business"]}</em></span></div>
                <div style={{color: 'var(--text-color)', zIndex:2,fontWeight: 'bold',width:'fit-content', margin:'0 12px', whiteSpace:'nowrap', wordBreak:'break-word'}}><span>{experiences["Byjus"]["Role"]}</span></div>
            </div>
            <div onClick={()=>{setSelected('FourKites')}} className="flex experience-flex-item company-card" style={experienceFlexChild}>
                <img alt="" style={{position:'absolute', height:'100%', width: '100%', opacity:'0.3'}} src="./images/freight_bg.jpg" />
                <img style={{maxWidth:'50%', zIndex:2}} src={experiences["FourKites"]["Logo"]} alt=""/>
                <div style={{color: 'var(--text-color)', zIndex:2,width:'fit-content', margin:'0 12px'}}><span><em>{experiences["FourKites"]["Span"]}</em></span></div>
                <div style={{color:'var(--text-color)', zIndex:2}} ><span><em>{experiences["FourKites"]["Business"]}</em></span></div>
                <div style={{color: 'var(--text-color)', zIndex:2,fontWeight: 'bold',width:'fit-content', margin:'0 12px', whiteSpace:'nowrap', wordBreak:'break-word'}}><span>{experiences["FourKites"]["Role"]}</span></div>
            </div>
            <div onClick={()=>{setSelected('Temenos')}} className="flex experience-flex-item company-card" style={experienceFlexChild}>
                {/* <img alt="" style={{position:'absolute', height:'100%', width: '100%', opacity:'0.3'}} src="./images/banks_bg.jpg" /> */}
                <div className="company-bg" style={{backgroundImage: 'url(./images/banks_bg.jpg)',}}></div>
                <img style={{maxWidth:'50%', zIndex:2}} src={experiences["Temenos"]["Logo"]} alt=""/>
                <div style={{color: 'var(--text-color)', zIndex:2,width:'fit-content', margin:'0 12px'}}><span><em>{experiences["Temenos"]["Span"]}</em></span></div>
                <div style={{color:'var(--text-color)', zIndex:2}} ><span><em>{experiences["Temenos"]["Business"]}</em></span></div>
                <div style={{color: 'var(--text-color)', zIndex:2,fontWeight: 'bold',width:'fit-content', margin:'0 12px', whiteSpace:'nowrap', wordBreak:'break-word'}}><span>{experiences["Temenos"]["Role"]}</span></div>
            </div>
            {experienceSelected && (
            <div  className="flex" style={{position:'absolute', zIndex:3, height: '100%'}}>
                <WholeExperience experienceSelected={experienceSelected} setSelected={setSelected} />
                <i style={{top:'30px', right:'30px', position:'absolute', fontSize:'2rem', cursor:'pointer'}} onClick={()=>{setSelected('')}} className="fa fa-times-circle-o" aria-hidden="true"></i>
            </div>)}
        </div>
    )
}

const WholeExperience = (props:{ experienceSelected: string, setSelected: (val: string) => void}) => {
    const ref = useRef() as any
    useClickOutside(ref, () => props.setSelected(''))
    return(
        <div ref={ref} style={{backgroundColor: 'var(--page-background)', maxHeight:'80%', 
        width:'80%', overflow:'auto', border:"2px solid var(--text-color)", borderRadius:'10px'}}>
            <ExperienceCard company={props.experienceSelected}/>
        </div>
    )
}

const RightSection = () => (
    <div style={{overflow:'auto'}}>
        <h1 style={{fontWeight: 'lighter', fontSize:"4rem", padding: '8px', margin: "0"}}>Work Experience</h1>
        <ExperienceFlexBox/>
        <Skills />
    </div>
)

export const WorkExperience = () => {
    return(
        <section id="work-experience-id" style={{overflow: "none", height: "100vh"}}>
            <div style={{display: 'flex', height:'100%'}}>
                {/* <LeftSection /> */}
                <RightSection />
            </div>
        </section>
    )
}