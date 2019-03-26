import React from "react";
import './results.css';
import Header from '../header';
import img from '../../../icons and colors/homebg.jpg';


class Results extends React.Component{
  render(){
    return (
      <div>
        <Header/>
				<h1 className="results">Results</h1>
				<div className="resultsContainer">
					<div className="filters">
						<select className="priceFilter">
					    <option value="0-100$">0-100$</option>
					    <option value="101-250$">101-250$</option>
					    <option value="251-450$">251-450$</option>
					    <option value="451$+">451$+</option>
  					</select>
						<imput className="priceFilter">filter1</imput>
						<imput className="sizeFilter">filter2</imput>
						<imput className="locationFilter">filter3</imput>
					</div>
					<div className="properties">
						<img src={img} className="image"></img>
					</div>
				</div>
      </div>

    )
  }
}


export default Results;
