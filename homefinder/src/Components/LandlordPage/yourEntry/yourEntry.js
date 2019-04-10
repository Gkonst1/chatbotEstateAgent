import React from "react";
import './yourEntry.css';
import Header from '../../header';
import img from '../../../icons and colors/homebg.jpg';


class YourEntry extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <div className="entry">
          <h1 className="results">Your Entry</h1>
          <div className="singleEntry">
            <img src={img} className="image" alt="img"></img>
            <figcaption>Price:270€, Size:70m2</figcaption>
            <figcaption>Contact: 6965159638, For Rent</figcaption>
          </div>
        </div>
      </div>
    )
  }
}


export default YourEntry;
