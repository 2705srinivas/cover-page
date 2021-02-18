import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

export const Contacts = () => {
    return(<>
        <a data-tip="Linkedin" href="https://www.linkedin.com/in/b-srinivas-7433a3a1/" target="blank">
            <i style={{marginRight: '8px'}} className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        <CopyToClipboard text="2705srinivas@gmail.com">
            <i onClick={() => {toast.success("email id copied!")}} data-tip="MailId" style={{marginRight: '8px'}} className="fa fa-envelope" aria-hidden="true"></i>
        </CopyToClipboard>
        <CopyToClipboard text="9739274808">
            <i onClick={() => {toast.success("phone no. copied!")}} data-tip="9739274808" style={{marginRight: '8px'}} className="fa fa-phone-square" aria-hidden="true"></i>
        </CopyToClipboard>
        <a data-tip="GitHub" href="https://github.com/2705srinivas" target="blank">
            <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
    </>)
}