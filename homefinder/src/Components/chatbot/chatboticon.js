import React, {Fragment, Component} from "react";
import './chatbot.css';
import bot from '../../icons and colors/chatbot.png';


class Chatboticon extends React.Component{
  render(){
    return (
      <div className="parent">
        <Fragment className="chatbot"><img src={bot} className="bot"/></Fragment>
      </div>

    )
  }
}

export default Chatboticon;
