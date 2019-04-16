import React, {Fragment} from "react";
import './results.css';
import Header from '../../header'
import SearchForm from '../SearchForm';
import Grid from '@material-ui/core/Grid';
import SingleEntity from './SingleEntity';
import axios from 'axios';
import Chatbot from '../../chatbot/chatbot';
import Button from '@material-ui/core/Button';

const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600},
  rightIcon:{marginleft:30},
  leftPanel:{ height:'100%', display:'flex', flexDirection:'column', width:'0%' },
  rightPanel:{padding:29},
}

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state={
        houses:[],
        price:100,
    }
  }


componentDidMount(){
  for(var i in localStorage) {
    console.log(i + ' = ' + localStorage[i]);
}
    axios.get('https://vikings-chatbot.herokuapp.com/house/results',{
      params:{
        toPrice: sessionStorage.getItem('price'),
				toSize: sessionStorage.getItem('size'),
      }

    })
    .then(response=>{
      this.setState({houses:response.data});
        console.log(response);

    });
}

handleSubmit = ()=> {
  window.location.reload();
}

  render(){
    const houses = this.state.houses.map(house =>{
      return <SingleEntity key={house.id} price={house.price} location={house.location} size={house.size} image={house.image} contact={house.contact}/>
    }
    );
    return (<Fragment>

      <Header/>


      <Grid container spacing={40}>

          <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
            <SearchForm/>
            <Grid item xs={12} className="submit-box" style={{textAlign:'center'}}>

               <Button onClick={this.handleSubmit} variant="contained" className="single-button" elevation='0' size="large"  style={
                    {width:'40%',
                    fontSize:19,
                    marginTop:150,
                    fontWeight:'700',
                    color:'#000',
                    backgroundColor:'#f16c51',
                    textDecorationLine:'none'
                     }}>
                   SEARCH
                  </Button>
                </Grid>
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
