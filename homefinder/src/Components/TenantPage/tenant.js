import React from "react";
import Header from '../header';
import './tenant.css';
import { Link } from 'react-router-dom';


class Tenant extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <h1 className="results">Find a Property</h1>
          <div className="box">
            <div className="filtersSearch">
              <div className="customSelectSearch" >
                <label>Price</label>
                <select className="singleFilterSearch">
                  <option selected disabled>--Price--</option>
                  <option value="0-100$">0-100$</option>
                  <option value="101-250$">101-250$</option>
                  <option value="251-450$">251-450$</option>
                  <option value="451$+">451$+</option>
                </select>
              </div>
              <div className="customSelectSearch">
                <label>Size(cm2)</label>
                <select className="singleFilterSearch">
                  <option selected disabled>--Size--</option>
                  <option value="0-30cm2">0-30cm2</option>
                  <option value="31-70cm2">31-70cm2</option>
                  <option value="71-200cm2">71-200cm2</option>
                  <option value="201cm2+">201cm2+</option>
                </select>
              </div>
              <div className="customSelectSearch">
                <label>Location</label>
                <select className="singleFilterSearch">
                  <option selected disabled>--Location--</option>
                  <option value="Kamara">Kamara</option>
                  <option value="Faliro">Faliro</option>
                  <option value="Neapoli">Neapoli</option>
                  <option value="Kalamaria">Kalamaria</option>
                </select>
              </div>
            </div>
            <div className="reason">
              <div className="status">
                <label class="statusBox">Buy
                  <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>
                <label class="statusBox">Rent
                  <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>
              </div>
              <div>
                <Link to="/results" className="textdecor"><h2 className="submit">Submit</h2></Link>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Tenant;
