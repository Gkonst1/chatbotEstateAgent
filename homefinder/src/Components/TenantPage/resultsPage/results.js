import React from "react";
import './results.css';
import Header from '../../header'
import img from '../../../icons and colors/homebg.jpg';
import size from '../../../icons and colors/ruler.svg';


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
  					    <option>0-100$</option>
  					    <option>101-250$</option>
  					    <option>251-450$</option>
  					    <option>451$+</option>
    					</select>
            </div>
            <div className="customSelect">
              <label>Size(cm2)</label>
              <select className="sizeFilter">
                <option selected disabled>--Size--</option>
  					    <option>0-30cm2</option>
  					    <option>31-70cm2</option>
  					    <option>71-200cm2</option>
  					    <option>201+cm2</option>
    					</select>
            </div>
            <div className="customSelect">
              <label>Location</label>
              <select className="sizeFilter">
                <option selected disabled>--Location--</option>
  					    <option className="option">Kamara</option>
  					    <option className="option">Faliro</option>
  					    <option className="option">Neapoli</option>
  					    <option className="option">Kalamaria</option>
    					</select>
            </div>
					</div>
					<div className="properties">
						<img src={img} className="image"></img>
            <figcaption>Price:270$, Size:70cm2</figcaption>
            <figcaption>Contact: 6948764634, For Rent</figcaption>
					</div>
				</div>
      </div>

    )
  }
}


export default Results;
