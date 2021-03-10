import React from 'react'
import { Contacts } from './Contacts';

const UpperSection = () => (
    <div className='left-profile' style={{height: '30%', background: 'var(--text-color)', padding: '20px',
            display:'flex', flexDirection:'row', alignItems:'center', position: 'relative'}}>
        <div  style={{height:'100%', width: "35%"}}>
            <img style={{width: 'auto', height: '70%', borderRadius:'500px'}} alt='profilePic' src='./images/ProfilePic.jpg'></img>
            <div className='flex profile' style={{color: '#201834', fontSize: '1.5rem', padding: '8px'}}>
                <Contacts />
            </div>
        </div>
        
        <div style={{color: 'var(--page-background)', textAlign: 'left', marginTop: '16px'}}>
            <strong>Open Source Contributions:</strong>
            <ul>
                <li style={{wordBreak:"break-word"}}>Infinite-virtual-scroll - 
                    <a href='https://www.npmjs.com/package/svelte-scroll-infinite-list' 
                        style={{color: 'var(--page-background)'}}
                        target="blank"
                    >https://www.npmjs.com/package/svelte-scroll-infinite-list</a>
                </li>
                <li style={{wordBreak:"break-word"}}>Svelte-typing-animated - 
                    <a href='https://www.npmjs.com/package/svelte-typing-animated' 
                        style={{color: 'var(--page-background)'}}
                        target="blank"
                    >https://www.npmjs.com/package/svelte-typing-animated</a>
                </li>
            </ul>
        </div>
    </div>
)
const BottomSection = () => {
    return (<>
        <h1 style={{fontWeight: 'lighter', fontSize:"3rem", padding: '8px', margin: "0"}}>Trivia about this site.</h1>
        <div className="text-align-left" style={{padding:'0 8px'}}>
            <ul>
                <li >This is a static site where the whole JSON data is part of source code itself.</li>
                <li >It has undergone multiple design changes before arriving to this.</li>
                <li >Typing animation in home page is a self-made component which i have published as npm package in svelte.</li>
                <li >Not much of 3rd party libs are used here other than react-toastify, react-tooltip.</li>
                <li>Theme toggler in home page is done using css variables and toggled programatically using js.</li>
                <li >This site is made responsive for both mobile and desktop, although it looks the best in desktop.</li>
                <li >Site can be viewed offline as it has service worker enabled. If there is a newer version available and you still has the tab opened, it will prompt to update the site.</li>
                <li >Ofcourse, if we close all tabs and open the site again newer service worker controller gets applied automatically.</li>
                <li >So, its safe to be called as PWA.</li>
                <li >Here is the lighthouse report for the site.</li>
            </ul>
        </div>
        
    </>)
}

export const About = () => {
    return (
    <section id="about-id" style={{overflow: "auto", height: "100vh"}}>
        <div style={{height: '100%'}}>
            <UpperSection />
            <BottomSection />
        </div>
    </section>)
}