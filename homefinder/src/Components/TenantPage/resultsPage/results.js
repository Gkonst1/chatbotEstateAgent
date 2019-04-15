import React, {Fragment} from "react";
import './results.css';
import Header from '../../header'
import SearchForm from '../SearchForm';
import Grid from '@material-ui/core/Grid';
import SingleEntity from './SingleEntity';
import axios from 'axios';
import Chatbot from '../../chatbot/chatbot';


const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600},
  rightIcon:{marginleft:30},
  leftPanel:{ height:'100%', display:'flex', flexDirection:'row' },
  rightPanel:{padding:29},
}

class Results extends React.Component{

  constructor(props){


    super(props);
    this.state={
        houses:[],
        price:sessionStorage.getItem('price'),
    }
  }


componentDidMount(){
  for(var i in localStorage) {
    console.log(i + ' = ' + localStorage[i]);
}
    axios.get('https://raw.githubusercontent.com/Gkonst1/chatbotEstateAgent/master/homefinder/src/test.json',{
      params:{
        toPrice: 200,
      }
      
    })
    .then(response=>{
      this.setState({houses:response.data});
        console.log(response);
       
    });
}


  render(){
    const houses = this.state.houses.map(house =>{
      return <SingleEntity key={house.id} price={house.price} location={house.location} size={house.size} image={house.image}/>
    }
    );
    return (<Fragment>

      <Header/>


      <Grid container spacing={40}>

          <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
            <SearchForm price={this.props.price} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}  className="rightPanel" style={styles.rightPanel}>
            {houses}
          </Grid>
      </Grid>
      <Chatbot/>
      </Fragment>
    )
  }
}


export default Results;
