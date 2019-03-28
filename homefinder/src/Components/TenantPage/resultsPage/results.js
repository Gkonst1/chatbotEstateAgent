import React from "react";
import './results.css';
import Header from '../../header'
import img from '../../../icons and colors/homebg.jpg';


class Results extends React.Component{
  render(){
    return (
      <div>
        <Header/>
				<h1 className="results">Results</h1>
				<div className="resultsContainer">
					<div className="filters">
            <div className="customSelect" >
              <label>Price</label>
  						<select className="priceFilter">
                <option selected disabled>--Price--</option>
                <option value="0-100$">0-100$</option>
                <option value="101-250$">101-250$</option>
                <option value="251-450$">251-450$</option>
                <option value="451$+">451$+</option>
    					</select>
            </div>
            <div className="customSelect">
              <label>Size(cm2)</label>
              <select className="sizeFilter">
                <option selected disabled>--Size--</option>
                <option value="0-30cm2">0-30cm2</option>
                <option value="31-70cm2">31-70cm2</option>
                <option value="71-200cm2">71-200cm2</option>
                <option value="201cm2+">201cm2+</option>
    					</select>
            </div>
            <div className="customSelect" id="lastFilter">
              <label>Location</label>
              <select className="sizeFilter">
                <option selected disabled>--Location--</option>
  					    <option className="option" value="Kamara">Kamara</option>
  					    <option className="option" value="Faliro">Faliro</option>
  					    <option className="option" value="Neapoli">Neapoli</option>
  					    <option className="option" value="Kalamaria">Kalamaria</option>
    					</select>
            </div>
					</div>
					<div className="properties">
            <div className="singleEntity">
  						<img src={img} className="image"></img>
              <figcaption>Price:270€, Size:70cm2</figcaption>
              <figcaption>Contact: 6965159638, For Rent</figcaption>
            </div>
            <div className="singleEntity">
              <img src={img} className="image"></img>
              <figcaption>Price:270€, Size:70cm2</figcaption>
              <figcaption>Contact: 6965159638, For Rent</figcaption>
            </div>
					</div>
				</div>
      </div>

    )
  }
}


export default Results;
