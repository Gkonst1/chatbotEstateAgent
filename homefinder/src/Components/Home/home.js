import React from "react";
import './home.css';
import Welcome from './welcome';
import Instructions from './instructions';
import Test from './test';
import {onRouteChange} from '../../App.js';

class Home extends React.Component{
  render(){
    console.log("hi")
    return (
      <div className="main">
        <div className="content">
          <Welcome/>
          {/* <Test/> */}
          <Instructions/>
          <div className="buttons">
            <h3 className="button landlord" onClick={onRouteChange(landlord)}>I'm Landlord</h3>
            <h3 className="button tenant">I'm Tenant</h3>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
