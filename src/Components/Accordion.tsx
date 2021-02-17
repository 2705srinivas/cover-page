import React, { useState } from 'react'

export const Accordion:React.FC<{text: string}> = ({text}) => {
    const [isExpanded, setExpanded] = useState(false)
    return(<>
        <div style={{textOverflow: 'ellipsis'}} className={`accordion ${isExpanded ? 'full-height' : 'part-height '}`}>
            {text}
        </div>
        <button className='accordion-buttton' style={{width:'100%'}} onClick={()=>{setExpanded(!isExpanded)}}>V</button>
        </>
    )
}