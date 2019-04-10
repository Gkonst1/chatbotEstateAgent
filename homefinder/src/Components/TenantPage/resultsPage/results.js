import React, {Fragment} from "react";
import './results.css';
import Header from '../../header'
import SearchForm from '../SearchForm';
import Grid from '@material-ui/core/Grid';
import SingleEntity from './SingleEntity';
import axios from 'axios';


const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600},
  rightIcon:{marginleft:30},
  leftPanel:{ height:'100%', display:'flex', flexDirection:'row' },
  rightPanel:{padding:29},
}


class Results extends React.Component{
state = {
  houses:[]
}
componentDidMount(){
    axios.get('https://raw.githubusercontent.com/Gkonst1/chatbotEstateAgent/master/homefinder/src/test.json')
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


      <Grid container spacing={48}>

          <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
            <SearchForm/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}  className="rightPanel" style={styles.rightPanel}>
            {houses} 
          </Grid>
      </Grid>

      </Fragment>
    )
  }
}


export default Results;
