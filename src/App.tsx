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

const RightArrow = (props: {change?: boolean,right?: string, color?: string } ) => {
  return(
    <div className={props.change? 'color-change' : 'no-color-change'} style={{height:0, width: 0, 
      border:' solid ', 
      // borderColor:'var(--text-color)',
      borderColor: props.color ? props.color : 'transparent',
      borderWidth:'0 2px 2px 0', 
      padding:'16px 0px 0px 16px',transform: 'rotate(-45deg)',
      left: props.right !== undefined ? 'auto' : '-7px',
      right: props.right !== undefined ? props.right : 'auto',
      // background: 'var(--page-background)',
      // background: 'transparent',
      position:'absolute',
      zIndex: 2,
    }}></div>)
}

const MenuBar = () => {
  const [open, setOpen] = useState(true)
  const exceptionRef = useRef(true) as any
  // useClickOutside(exceptionRef, () => {setOpen(false)})

  return(
  <div style={{position:'fixed', top: '32px', left: '32px', width:'fit-content', zIndex:3, display: 'flex', alignItems:'center'}}>
    <div className="menu" ref={exceptionRef}  style={{width:'fit-content', cursor:'pointer',
    boxShadow:'0px 0px 4px 1px', padding:'2px 8px', fontSize: '20px', borderRadius:'50%'}}
    onClick={() => setOpen(!open)}>
      {open ? <i className="fa fa-close" aria-hidden="true"></i> :<i className="fa fa-bars" aria-hidden="true"></i>}
    </div>
    {open && <div style={{
      width:'fit-content', margin:'0 24px',userSelect:'none', 
      display:'flex',height: '100%',border: 'solid var(--text-color)',
      borderWidth: '1px 0 1px 1px'
      }}>  
      
      <div className="menu-item " onClick={() => {scrollSmoothTo('home-id')}} >
        {/* <RightArrow color={'var(--text-color)'}/> */}
        Home <RightArrow change color={'var(--text-color)'} right={'-8px'}/></div>
      
      <div className="menu-item" onClick={() => {scrollSmoothTo('work-experience-id')}} >Profile <RightArrow change color={'var(--text-color)'} right={'-8px'}/></div>
      
      <div className="menu-item" onClick={() => {scrollSmoothTo('about-id')}} >About<RightArrow change color={'var(--text-color)'} right={'-8px'}/></div>
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
