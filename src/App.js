import React from 'react';
import './App.css';
import Contact from './components/Contact';

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

}]



function App() {
  return (
    <div className="App">
      {users.map((user) => {
          return (
            <Contact avatar={user.avatar} name={user.name} online={user.online}/>
          )
        })}
    </div>
  );
}

export default App;
