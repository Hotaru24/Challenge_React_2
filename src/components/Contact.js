import React from 'react';
import './Contact.css';

function Contact (props) {
    return (
    <figure className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name} />
        <div>
            <h4 className="name">{props.name}</h4> 
            <div className="status">
                {props.online ? <div className="status-online">{props.online}</div> :
                <div className="status-offline">{props.online}</div>}
                <p className="status-text">{props.online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </figure>
  );
}
export default Contact;