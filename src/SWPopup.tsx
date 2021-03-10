import React, { useEffect, useRef, useState } from 'react'
import * as serviceWorker from './serviceWorker';

export const SWPopup = () =>{
    const [showSWDialog, toggleSWDialog] = useState(false)
    const sw = useRef() as any
    const SWCallBcks = {
        onSuccess: (registration: ServiceWorkerRegistration) => {console.log("success", registration)},
        onUpdate: (registration: ServiceWorkerRegistration) => {
            console.log("update", registration);
            sw.current = registration;
            toggleSWDialog(true)
        }
      }
    useEffect(()=>{
        navigator.serviceWorker.addEventListener('message', event => {
            console.log(event.data.msg, event.data.url);
          });
        serviceWorker.register(SWCallBcks);
    //eslint-disable-next-line
    },[])      

    return (<>
    {showSWDialog ? <div style={{position:"fixed",  backgroundColor:"orange", color:"black",
        padding: '8px', maxWidth: '80%', zIndex: 4,
        width: "fit-content", top: "70px", right: "50px"}}>
            Newer Version is available. Do you want to update? &nbsp;
            <i style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={()=>{sw.current?.waiting.postMessage({type: 'SKIP_WAITING'})}}>Yes</i> | &nbsp;
            <i style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {toggleSWDialog(false)}}>No</i>
    </div> : <></>}
    </>)
}