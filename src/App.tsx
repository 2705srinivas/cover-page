import React from 'react';
import './App.css';
import { WorkExperience } from './Components/WorkExperience_v2';
import { CoverPage } from "./Components/CoverPage"
import ReactTooltip from 'react-tooltip'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<>
    <div className="App">
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
