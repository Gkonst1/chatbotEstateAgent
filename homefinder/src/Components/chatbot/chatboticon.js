import React, {Fragment} from "react";
import './chatbot.css';
import bot from '../../icons and colors/chatbot.png';


class Chatboticon extends React.Component{
  render(){
    return (
      <div className="parent">
        <Fragment><img src={bot} className="bot" alt="chatbotImg"/></Fragment>
      </div>
    )
  }
}

export default Chatboticon;
