import React from "react";
import './yourEntry.css';
import Header from '../../header';
import SingleEntity from '../../TenantPage/resultsPage/SingleEntity';
import image from '../../../icons and colors/image.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../../TenantPage/tenant.scss';
import axios from 'axios';


const clear=function(){
  var clear='';
  window.sessionStorage.setItem('priceSubmit', clear);
  window.sessionStorage.setItem('sizeSubmit', clear);
  window.sessionStorage.setItem('statusSubmit', clear);
  window.sessionStorage.setItem('priceSubmit', clear);
  window.sessionStorage.setItem('linkSubmit', clear);
  window.sessionStorage.setItem('phoneSubmit', clear);
}


class YourEntry extends React.Component{
  constructor(props){
    super(props);
    this.state={
      entry: [],
    }
  }

  componentDidMount(){
      axios.get('http://localhost:8080/add',{
        params:{
          price: sessionStorage.getItem('priceSubmit'),
          size: sessionStorage.getItem('sizeSubmit'),
          location: sessionStorage.getItem('locationSubmit'),
          status: sessionStorage.getItem('statusSubmit'),
          contact: sessionStorage.getItem('phoneSubmit'),
          link: sessionStorage.getItem('linkSubmit')
        }
      }
    )
      .then(response=>{
        console.log(response);
        this.setState({entry:response.data});
        }
      );
  }

  render(){
    const price=window.sessionStorage.getItem('priceSubmit');
    const size=window.sessionStorage.getItem('sizeSubmit');
    const location=window.sessionStorage.getItem('locationSubmit');
    const status=window.sessionStorage.getItem('statusSubmit');
    const contact=window.sessionStorage.getItem('phoneSubmit');
    return(
      <div>
        <Header/>
        <div className="entry">
          <h1 className="yourEntry">Your Entry</h1>
          <div className="singleEntry">
          <SingleEntity
						price={price} location={location} size={size}  contact={contact} status={status} image={image}
					/></div>
          <Link to='/landlord' style={{textDecorationLine:'none'}}><Button variant="contained" className="single-button" onClick={clear} elevation='0' size="large"  style={
               {width:'20%',
               fontSize:15,
               marginTop:20,
               fontWeight:'700',
               color:'white',
               backgroundColor:'#f16c51',
                }}>
              Add More Houses!
             </Button></Link>
        </div>
      </div>
    )
  }
}


export default YourEntry;
