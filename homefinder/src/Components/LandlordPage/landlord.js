import React from "react";
import Header from './header';
import Button from '@material-ui/core/Button';
import { Switch, Route, Link } from 'react-router-dom';

class Landlord extends React.Component{
  render(){
    return (
      <div>
        <Header/>
				<Link to='/results' className="button landlord"><h3 className="landlord">Results</h3></Link>

      </div>
    )
  }
}


export default Landlord;
