import React, { Component } from 'react';
import './main.css';
import './Components/Home/home.css';
import Home from './Components/Home/home';
import Landlord from './Components/LandlordPage/landlord';
import Tenant from './Components/TenantPage/tenant';
import Results from './Components/LandlordPage/resultsPage/results';
import { Switch, Route } from 'react-router-dom';

const initialState={
	
}

class App extends Component {
  constructor(){
    super();
    this.state= initialState;
  }

  render() {
    const {route} = this.state;
    return (
      <div>
				<Switch>
  				<Route exact path='/' component={Home}/>
  				<Route path='/landlord' component={Landlord}/>
  				<Route path='/tenant' component={Tenant}/>
					<Route exact path='/results' component={Results}/>
				</Switch>
      </div>
    );
  }
}

export default App;
