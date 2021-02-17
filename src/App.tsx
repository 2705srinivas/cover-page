import React from 'react';
import './App.css';
import { WorkExperience } from './Components/WorkExperience_v2';
import { CoverPage } from "./Components/CoverPage"
import ReactTooltip from 'react-tooltip'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<>
    {/* <div className="container demo">
    <div className="content">
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
          <h1 className="main-title"><span className="thin">Explore</span> Space</h1>
        </div>
    </div>
    </div> */}

    <div className="App">
      <ToastContainer
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable={false}
      />
      <CoverPage />
      <WorkExperience />
      {/* <Skills /> */}
      <ReactTooltip effect="solid" wrapper="span"/>
    </div>
  </>);
}

export default App;
