import React from "react";
import Header from '../header';
import './tenant.css';
import { Link } from 'react-router-dom';


class Tenant extends React.Component{
  render(){
    return(
      <div>
        <Header/>

          <div className="filtersSearch">
            <div className="customSelectSearch" >
              <label>Price</label>
              <select className="singleFilterSearch">
                <option selected disabled>--Price--</option>
                <option>0-100$</option>
                <option>101-250$</option>
                <option>251-450$</option>
                <option>451$+</option>
              </select>
            </div>
            <div className="customSelectSearch">
              <label>Size(cm2)</label>
              <select className="singleFilterSearch">
                <option selected disabled>--Size--</option>
                <option>0-30cm2</option>
                <option>31-70cm2</option>
                <option>71-200cm2</option>
                <option>201+cm2</option>
              </select>
            </div>
            <div className="customSelectSearch">
              <label>Location</label>
              <select className="singleFilterSearch">
                <option selected disabled>--Location--</option>
                <option>Kamara</option>
                <option>Faliro</option>
                <option>Neapoli</option>
                <option>Kalamaria</option>
              </select>
            </div>
          </div>
          <div>
            <Link to="/results"><h1>Sumbit</h1></Link>
          </div>
        </div>
    )
  }
}

export default Tenant;
