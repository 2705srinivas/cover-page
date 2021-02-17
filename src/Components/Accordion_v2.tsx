import React, { useRef }  from 'react'
import './styles.scss'

type PropType = {
    logo: any
    children: React.ReactNode
    designation: string
    span: string
}

export const AccordionV2 = (props: PropType) =>{
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
                backgroundColor: !hide? 'rgb(132 50 99)' : '#f1ecec'}}
                onMouseOver={() => onHover(false)} 
                onMouseOut={() => onHover(true)}  
                onClick={clickHandler} >
                <div className='period' style={{
                    maxHeight: !hide? `${contentHeight+50}px`: '125px', 
                    width: '100%'
                    }}>
                    <div className='flex' style={{position:'relative', flexWrap: 'wrap', justifyContent:'space-around'}}>
                        <img style={{width:'12%'}} src={props.logo} alt=""/>
                <div style={{color: !hide? 'white': 'black',width:'fit-content', margin:'0 12px'}}><span><em>{props.span}</em></span></div>
                        <div style={{color: !hide? 'white': 'black', width: 'auto'}}><span><em>Provides End-to-End predictive visibility in supply chain.</em></span></div>
                        <div style={{color: !hide? 'white': 'black', fontWeight: 'bold',width:'fit-content', margin:'0 12px', whiteSpace:'nowrap', wordBreak:'break-word'}}><span>{props.designation}</span></div>
                    </div>
                </div>
                <div ref={content} 
                style={{height: `${contentHeight}px`}} 
                className={`${hide? 'hidden' : 'visible'} accordion-content`}>
                    {props.children}
                </div>
            </button>
        </div>
        
    )
}