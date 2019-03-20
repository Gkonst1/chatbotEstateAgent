import React from "react";
import './home.css';
import Welcome from './welcome';
import Instructions from './instructions';
import Test from './test';

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
            <h3 className="button landlord"><a>I'm Landlord</a></h3>
            <h3 className="button tenant"><a>I'm Tenant</a></h3>
          </div>
        </div>




        {/*
        <Instructions/>
        <div className="buttonbox">
          <Button1/>
          <Button2/>
        </div> */}
      </div>
    );
  }
}


export default Home;
