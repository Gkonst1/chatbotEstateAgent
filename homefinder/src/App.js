import React, { Component } from 'react';
import './main.css';
import Landlord from './Components/LandlordPage/landlord';
import './Components/Home/home.css';
import Welcome from './Components/Home/welcome';
import Instructions from './Components/Home/instructions';
import Tenant from './Components/TenantPage/tenant';

const initialState={
  route:'home'
}

class App extends Component {
  constructor(){
    super();
    this.state= initialState;
  }

onRouteChange=(route)=>{
  if (route ==='home'){
    this.setState(initialState);
  }else if (route==='landlord'){
    this.setState({route:'landlord'});
  }else if (route ==='tenant'){
    this.setState({route:'tenant'})
  }
}

  render() {
    const {route} = this.state;
    return (
      <div>
        {route ==='home'?
          <div className="main">
            <div className="content">
              <Welcome/>
              <Instructions/>
              <div className="buttons">
                <h3 className="button landlord" onClick={()=> this.onRouteChange('landlord')}>I'm Landlord</h3>
                <h3 className="button tenant" onClick={()=>this.onRouteChange('tenant')}>I'm Tenant</h3>
              </div>
            </div>
          </div>

        :(this.state.route ==='landlord'?
          <Landlord/>
          :<h1>hi</h1>
          )
        }

      </div>
      // <LandlordPage/>
      // <Tenant/>
    );
  }
}

export default App;
