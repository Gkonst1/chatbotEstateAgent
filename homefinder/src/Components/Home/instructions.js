import React from 'react';
import './instructions.scss';
import RightArrow from '../../icons and colors/next.svg'

class Instructions extends React.Component{
  render(){
    return(

    <div className="instructions mb-medium">
      <div className="instructions__single">
          <p className="instructions__text ">Buy,Sell,Rent <br/>Services</p>
      </div>
      <div className="instructions__divider"><img className="divider-img" src={RightArrow}></img></div>
      <div className="instructions__single">
          <p className="instructions__text">find what suits <br/>your needs</p>
      </div>
      <div className="instructions__divider"><img className="divider-img" src={RightArrow}></img></div>

      <div className="instructions__single">
          <p className="instructions__text">best search agent <br/>in thessaloniki</p>
      </div>
    </div>

    )
  }
}

export default Instructions;
