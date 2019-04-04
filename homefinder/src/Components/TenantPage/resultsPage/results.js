import React, {Fragment} from "react";
import './results.css';
import img from '../../../icons and colors/homebg.jpg';
<<<<<<< HEAD
import houses from '../../houses.js';
=======
import { Link } from 'react-router-dom';
import houses from './houses.js';
import Header from '../../header'
import SearchForm from '../SearchForm';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';





const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600},
  rightIcon:{marginleft:30},
  leftPanel:{ height:'100%' },
  rightPanel:{padding:29},

}
>>>>>>> 391109964707a20e024636138167d2531cd83604



class Results extends React.Component{
  render(){
    return (<Fragment>

      <Header/>


      <Grid container spacing={48}>

      <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
        <SearchForm/>
      </Grid>


      <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
      <h1> Here are the resuts</h1>
      </Grid>



      </Grid>

      </Fragment>
    )
  }
}


export default Results;
