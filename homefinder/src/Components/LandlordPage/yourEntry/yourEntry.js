import React from "react";
import './yourEntry.css';
import Header from '../../header';
import SingleEntity from '../../TenantPage/resultsPage/SingleEntity';
import image from '../../../icons and colors/image.jpg'


// componentDidMount(){
//   axios.post('https://vikings-chatbot.herokuapp.com/house/results',{
//     params:{
//       toPrice: sessionStorage.getItem('priceSubmit'),
//       fromSize: sessionStorage.getItem('sizeSubmit'),
//       location: sessionStorage.getItem("locationSubmit"),
//       status: sessionStorage.getItem("statusSubmit")
//     }
//
//   })
//   .then(response=>{
//     this.setState({houses:response.data});
//       console.log(response);
//       if(response.data.length==0){
//         this.setState({noResults: true});
//       }
//     }
//   );
//   showPage();
// }

class YourEntry extends React.Component{
  render(){
    const price=window.sessionStorage.getItem('priceSubmit');
    const size=window.sessionStorage.getItem('sizeSubmit');
    const location=window.sessionStorage.getItem('locationSubmit');
    const status=window.sessionStorage.getItem('statusSubmit');
    return(
      <div>
        <Header/>
        <div className="entry">
          <h1 className="yourEntry">Your Entry</h1>
          <div className="singleEntry">
          <SingleEntity
						price={price} location={location} size={size}  contact='6948764634' status={status} image={image}
					/></div>
        </div>
      </div>
    )
  }
}


export default YourEntry;
