import React from "react";
import Header from '../header';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './landlord.scss';

class Landlord extends React.Component{
  render(){
    return (
  <fragment>
        <Header/>
        <div className="container">
          <div className="form">
            <div className="form__filter">
              <div className="form__filter-single">
              <label className="filter-label">Price</label>
              <input className="form__filter-input"></input>
              </div>

              <div className="form__filter-single">
              <label className="filter-label">Size (cm2)</label>
              <input className="form__filter-input"></input>
              </div>

              <div className="form__filter-single">
              <label className="filter-label">Location</label>
              <input className="form__filter-input"></input>
              </div>

              <div className="form__filter-single">
              <label className="filter-label">Contact</label>
              <input className="form__filter-input"></input>
              </div>
            </div>
          </div>
        <div className="form__status">
          <div className="checkbox">
            <div className="label-status">
              <div className="label-single">
                <label class="container">One
                  <input type="radio" checked="checked" name="radio"/>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="label-single">
                <label>
                  For Sale
                  <input type="checkbox"  />
                </label>
              </div>
            </div>
            <div className="upload">
              <label>Upload Photos</label>
              <input type="file" name="img" accept="image/*"></input>
            </div>
          </div>

        </div>
      </div>
{/*
				<Link to='/results' className="button landlord"><h3 className="landlord">Results</h3></Link> */}

      </fragment>
    )
  }
}


export default Landlord;
