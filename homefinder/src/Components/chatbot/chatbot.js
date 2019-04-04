import React, {Fragment} from "react";
import './chatbot.css';
import bot from '../../icons and colors/chatbot.png';
import ChatBot from 'react-simple-chatbot';


const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

class Chatbot extends React.Component{
  constructor() {
		super();
		this.state = {
			shown: true,
		};
	}

  toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}



  render(){
    var shown = {
			display: this.state.shown ? "block" : "none"
		};
    var hidden = {
			display: !this.state.shown ? "none" : "block"
		}
    return (
      <div className="parent">
        <Fragment className="chatbot"><img src={bot} className="bot" onClick={this.toggle.bind(this)}/></Fragment>
        <ChatBot style={hidden} className="chat" steps={steps} />
      </div>

    )
  }
}

export default Chatbot;
