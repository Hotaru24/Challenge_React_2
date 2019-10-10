import React from 'react';
import Contact from '../Contact/Contact';


const Contactlist = (props) => {
    return(
         <table className="members">

            {props.contact.map((contact)=> {
            return (
                <Contact name={contact.name} avatar={contact.avatar} online={contact.online}/>
            )
            })}

        </table>
    )
}

export default Contactlist;