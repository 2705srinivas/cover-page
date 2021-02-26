import React, { useRef }  from 'react'
import './styles.scss'
import {experiences} from "./WorkExperience/experince-data"

type PropType = {
    children: React.ReactNode
    company: string
}

export const AccordionV2 = ({children, company}: PropType) =>{
    const [hide, setHidden] = React.useState(true)
    const [contentHeight, setContentHeight] = React.useState(0)
    const content = useRef(null) as any
    const fixed = useRef(false)

    const toggleHandler = (flag: boolean)=>{
        setHidden(flag);
        setContentHeight(flag ? 0 : content.current.scrollHeight)
    }
    const clickHandler = () => {
        if(fixed.current){
            toggleHandler(!hide)
        }
        fixed.current = fixed.current ? !fixed.current : true;
    }
    const onHover=(flag: boolean)=>{
        if(!fixed.current){
            toggleHandler(flag)
        }
    }

    return(
        <div className='accordion-container'>
            <button 
                style={{
                backgroundColor: !hide? 'rgb(132 50 99)' : 'var(--page-background)'}}
                onMouseOver={() => onHover(false)} 
                onMouseOut={() => onHover(true)}  
                onClick={clickHandler} >
                <div className='period' style={{
                    maxHeight: !hide? `${contentHeight+50}px`: '125px', 
                    width: '100%'
                    }}>
                    <div className='flex' style={{position:'relative', flexWrap: 'wrap', justifyContent:'space-around'}}>
                        <img style={{width:'12%'}} src={experiences[company]["Logo"]} alt=""/>
                        <div style={{color: !hide? 'var(--text-color)': 'var(--page-background)',width:'fit-content', margin:'0 12px'}}><span><em>{experiences[company]["Span"]}</em></span></div>
                        <div style={{color: !hide? 'var(--text-color)': 'var(--page-background)', width: 'auto'}}><span><em>{experiences[company]["Business"]}</em></span></div>
                        <div style={{color: !hide? 'var(--text-color)': 'var(--page-background)', fontWeight: 'bold',width:'fit-content', margin:'0 12px', whiteSpace:'nowrap', wordBreak:'break-word'}}><span>{experiences[company]["Role"]}</span></div>
                    </div>
                </div>
                <div ref={content} 
                style={{height: `${contentHeight}px`}} 
                className={`${hide? 'hidden' : 'visible'} accordion-content`}>
                    {children}
                </div>
            </button>
        </div>
        
    )
}