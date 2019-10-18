import React from 'react';
import './Contact.css';



class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  changeState = () => {
    const newOnline = !(this.state.online);
    this.setState({online: newOnline});
  }
  render() {
    return (
      <div className="Contact">
        <img
          className="avatar"
          src={this.props.avatar}
          alt={this.props.name}/>
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status" onClick={this.changeState}>
            <p className={this.state.online ? "status-online" : "status-offline"}></p>
            <p className="status-text">{this.state.online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;