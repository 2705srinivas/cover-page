import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { WorkExperience } from './Components/WorkExperience_v2';
import { CoverPage } from "./Components/CoverPage"
import ReactTooltip from 'react-tooltip'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toggleTheme, scrollSmoothTo, useClickOutside } from "./Utils"
import { About } from './Components/About';

const ThemeWrapper = () => {
  useEffect(()=>{
    toggleTheme('dark-theme')
  },[])
  return <></>
}

const MenuBar = () => {
  const [open, setOpen] = useState(false)
  const exceptionRef = useRef(true) as any
  useClickOutside(exceptionRef, () => {setOpen(false)})

  return(
  <div style={{
  position:'fixed', top: '32px', left: '32px', width:'fit-content', zIndex:3}}>
    <div ref={exceptionRef}  style={{width:'fit-content', cursor:'pointer', backgroundColor:'var(--page-background)',
    boxShadow:'0px 0px 4px 1px', padding:'2px 8px', fontSize: '20px', borderRadius:'50%'}}
    onClick={() => setOpen(!open)}>
      <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
    {open && <div style={{width:'fit-content', margin:'2px 32px',boxShadow:'0px 0px 4px 1px',userSelect:'none', background:'var(--page-background)' }}>
      <div className="menu-item" onClick={() => {scrollSmoothTo('home-id')}} style={{borderBottom:'1px solid var(--text-color)',padding:'4px', cursor:'pointer'}}>Home</div>
      <div className="menu-item" onClick={() => {scrollSmoothTo('work-experience-id')}} style={{borderBottom:'1px solid var(--text-color)',padding:'4px', cursor:'pointer'}}>Profile</div>
      <div className="menu-item" onClick={() => {scrollSmoothTo('about-id')}} style={{borderBottom:'1px solid var(--text-color)',padding:'4px', cursor:'pointer'}}>About</div>
    </div>}
  </div>)
}

function App() {
  return (<>
    <div className="App">
      <ThemeWrapper />
      <ToastContainer
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable={false}
      />
      <MenuBar />
      <CoverPage />
      <WorkExperience />
      <About />
      <ReactTooltip effect="solid" wrapper="span"/>
    </div>
  </>);
}

export default App;
