import React, { useEffect } from 'react';
import './App.css';
import { WorkExperience } from './Components/WorkExperience_v2';
import { CoverPage } from "./Components/CoverPage"
import ReactTooltip from 'react-tooltip'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toggleTheme } from "./Utils"

const ThemeWrapper = () => {
  useEffect(()=>{
    toggleTheme('dark-theme')
  },[])
  return <></>
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
      <CoverPage />
      <WorkExperience />
      <ReactTooltip effect="solid" wrapper="span"/>
    </div>
  </>);
}

export default App;
