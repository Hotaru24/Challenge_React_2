import React from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Contactlist from './components/Contactlist/Contactlist'


let users = [{
  avatar:"https://randomuser.me/api/portraits/women/28.jpg",
  name: "Truc Machine",
  online: true
},{
  avatar:  "https://randomuser.me/api/portraits/men/3.jpg",
  name: "Truc Machin",
  online: false
},{
  avatar: "https://randomuser.me/api/portraits/men/72.jpg",
  name: "Toto JS",
  online: true
},{
  avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  name: "BG du 92",
  online: false
},{
  avatar: "https://randomuser.me/api/portraits/men/72.jpg",
  name: "Georgette Pink",
  online: true
}]

function App() {
  return (
    <div className="App">
      <Contactlist contact={users}/>
    </div>
  );
}

export default App;
