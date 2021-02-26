import React,{useState} from 'react'
import { AnimateTyping } from "./AnimateTyping"
import { scrollSmoothTo, toggleTheme } from '../Utils'
import "./styles.scss"
import { Contacts } from './Contacts'
import Switch from "react-switch";

export const CoverPage = () => {
    const [checked, setChecked] = useState('dark-theme')
    const toggleThemeHandler = () => {
        const nextTheme = checked === 'light-theme' ? 'dark-theme' : 'light-theme';
        toggleTheme(nextTheme);
        setChecked(nextTheme)
    }
    return (
        <div className='cover-page-container' >
            <div style={{display:'flex', justifyContent:'flex-end', padding:'20px'}}>
                <img alt='profilePic' src='./images/LinkedinDP.png'></img>
            </div>
            <div style={{display:'flex', flexDirection:'column',  padding:'20px'}}>
                <AnimateTyping />
                <button className='view-my-profile' onClick={() => {scrollSmoothTo('work-experience-id')}}>View my profile <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
            <div style={{display: 'flex',alignItems:'center',position: 'absolute', top: '20px', right: '20px', width:'fit-content', fontSize: '1.5rem'}}>
                <Switch className="margin-right" height={20} width={50} onChange={toggleThemeHandler} checked={checked==='dark-theme'}/>
                <Contacts />
            </div>
        </div>
    )
}