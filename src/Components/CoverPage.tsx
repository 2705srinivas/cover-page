import React from 'react'
import { AnimateTyping } from "./AnimateTyping"
import { scrollSmoothTo } from '../Utils'
import "./styles.scss"
import { Contacts } from './Contacts'


export const CoverPage = () => {
    return (
        <div className='cover-page-container' >
            <div style={{display:'flex', justifyContent:'flex-end', padding:'20px'}}>
                <img alt='profilePic' src='./images/LinkedinDP.png'></img>
            </div>
            <div style={{display:'flex', flexDirection:'column',  padding:'20px'}}>
                <AnimateTyping />
                <button className='view-my-profile' onClick={() => {scrollSmoothTo('work-experience-id')}}>View my profile <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
            <div style={{position: 'absolute', top: '20px', right: '20px', width:'fit-content', fontSize: '1.5rem'}}>
                <Contacts />
            </div>
        </div>
    )
}