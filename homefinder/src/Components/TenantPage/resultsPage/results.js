import React, {Fragment} from "react";
import './results.css';
import Header from '../../header'
import SearchForm from '../SearchForm';
import Grid from '@material-ui/core/Grid';
import SingleEntity from './SingleEntity';
import axios from 'axios';
import Chatbot from '../../chatbot/chatbot';
import Button from '@material-ui/core/Button';
import Scrollbar from 'react-scrollbars-custom';
import NoResults from '../resultsPage/NoResults';

const styles= {
  text:{color:'#000', fontWeight:600},
  rightIcon:{marginleft:30},
  leftPanel:{ height:'100%', display:'flex', flexDirection:'column', width:'100%'},
}
let styleLoader={
	display:'block'
}
let styleResults={
	display:'none'
}

function showPage(){
	styleLoader={display: 'none'};
	styleResults={display: 'block'};
}

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state={
        houses:[],
        price:0,
				noResults: false,
    }
  }

	componentDidMount(){
    axios.get('https://vikings-chatbot.herokuapp.com/house/results',{
      params:{
        toPrice: sessionStorage.getItem('price'),
				fromSize: sessionStorage.getItem('size'),
        location: sessionStorage.getItem("location"),
        status: sessionStorage.getItem("status")
      }

    })
    .then(response=>{
      this.setState({houses:response.data});
				if(response.data.length===0){
					this.setState({noResults: true});
				}
    	}
		);
		showPage();
	}

	handleSubmit = ()=> {
  	window.location.reload();
	}

  render(){
    let showResults,
		 		loader=<div id="loader" style={styleLoader}></div>;

		if(this.state.noResults){
			showResults=<NoResults/>
    }else{
	  	showResults = this.state.houses.map(house =>{
	      return(
					<SingleEntity
						key={house.id} price={house.price} location={house.location} size={house.size} image={house.image} contact={house.contact} status={house.status}
						class="animate-bottom"
						id="myDiv"
						style={styleResults}
					/>)
	      }
	    )
	  };
      return (
      <Fragment>
        <Header/>

        <Grid container style={{display:'flex',flexWrap:'wrap-reverse'}}>
          <Scrollbar style={{width: '50%',minWidth:'300px',
          height: '90vh',direction:'ltr'}} rtl>
            <Grid item xs={12} sm={12} md={6} lg={6}  className="rightPanel" style={{maxWidth:'100%',paddingRight:'10px',paddingLeft:'2vh'}}>
							{loader}{showResults}
            </Grid>
          </Scrollbar>
            <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
              <SearchForm/>
              <Grid item xs={12} className="submit-box" style={{textAlign:'center', marginTop:'10%'}}>

                 <Button onClick={this.handleSubmit} variant="contained" className="single-button" elevation='0' size="large"  style={
                      {width:'20%',
                      fontSize:19,
                      marginBottom:'30vh',
                      fontWeight:'700',
                      color:'white',
                      backgroundColor:'#f16c51',
                      textDecorationLine:'none'
                       }}>
                     SEARCH
                    </Button>
                  </Grid>
            </Grid>
          </Grid>
        <Chatbot/>
        </Fragment>

      )
    }
  }





export default Results;
