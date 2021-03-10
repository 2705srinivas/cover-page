import React, {useState, useEffect} from 'react'
import "./styles.scss"

const intro = ("Hi! I'm Srinivas. The Frontend developer you want to have in your team.").split("")

export const AnimateTyping = () => {
    const [introStatement, setIntroStatement] = useState('')
    useEffect(()=>{
            let delay = 100
            for(let i=0;i<intro.length;i++){
                setTimeout(()=>{
                    setIntroStatement((state) => state+intro[i] )
                },delay)
                delay = delay + 65
            }
        },[])

    return (<span style={{userSelect: 'none'}} className='span-introduction'>{introStatement} <span className='blinker'>|</span> </span>)
}
