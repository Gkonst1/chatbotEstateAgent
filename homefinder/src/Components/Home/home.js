import React from "react";
import './home.css';
import Welcome from './welcome';
import Instructions from './instructions';
import { Link } from 'react-router-dom';

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
      </div>
    );
  }
}


export default Home;
