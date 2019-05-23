import React from "react";
import './home.scss';
import Welcome from './welcome';
import Instructions from './instructions';
import Chatbot from '../chatbot/chatbot';
import { Link } from 'react-router-dom';
import DialogFlow from "../dialogflow/DialogFlow";

class Home extends React.Component{
  render(){
    return (
      <div className="main">
        <div className="content">
          <Welcome/>
          <Instructions/>
          <div className="buttons">
            <Link to='/landlord' className="button landlord"><h3 className="landlord">I'm Landlord</h3></Link>
            <Link to='/tenant' className="button tenant"><h3 className="tenant">I'm Tenant</h3></Link>
          </div>
        </div>
        <Chatbot/>
      </div>
    );
  }
}


export default Home;
