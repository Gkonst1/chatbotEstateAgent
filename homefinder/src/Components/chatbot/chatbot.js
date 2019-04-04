import React from "react";
import './chatbot.css';
import bot from '../../icons and colors/chatbot.png';


class Chatbot extends React.Component{
  render(){
    return (
      <h2 className="chatbot"><img src={bot} className="bot"/></h2>
    )
  }
}

export default Chatbot;
 