import React from 'react';
import './welcome.scss';
import logo from '../../icons and colors/appartments.svg';


class Welcome extends React.Component{
  render(){
    return (
      <div className="welcome">
        <div className="logo">
          <img className="logoImg" src={logo} alt="logo"/>
        </div>
        <div className="head1">
          <h2>Welcome to</h2>
          <h1>HOME FINDER</h1>
        </div>
      </div>
    )
  }
}

export default Welcome;
