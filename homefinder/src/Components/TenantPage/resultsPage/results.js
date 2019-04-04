import React, {Fragment} from "react";
import './results.css';
import Header from '../../header'
import img from '../../../icons and colors/homebg.jpg';
<<<<<<< HEAD
import SearchForm from '../SearchForm';
import { Link } from 'react-router-dom';
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

=======
import houses from './houses.js';
>>>>>>> 0891079ec41f352762bbfe014465b4e262a99d94

class Results extends React.Component{
  constructor(){
    super()
  }

  render(){
<<<<<<< HEAD
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
=======
    return (
      <div>
        <Header/>
				<h1 className="results">Results</h1>
				<div className="resultsContainer">
					<div className="filters">
            <div className="customSelect" >
              <label>Price</label>
  						<select className="priceFilter" ref="price">
                <option selected disabled>--Price--</option>
                <option value="0-100$">0-100$</option>
                <option value="101-250$">101-250$</option>
                <option value="251-450$">251-450$</option>
                <option value="451$+">451$+</option>
    					</select>
            </div>
            <div className="customSelect" id="content">
              <label>Size(m2)</label>
              <select className="sizeFilter">
                <option selected disabled>--Size--</option>
                <option value="0-30cm2">0-30m2</option>
                <option value="31-70cm2">31-80m2</option>
                <option value="71-200cm2">81-200m2</option>
                <option value="201cm2+">201m2+</option>
    					</select>
            </div>
            <div className="customSelect" id="lastFilter">
              <label>Location</label>
              <select className="sizeFilter">
                <option selected disabled>--Location--</option>
  					    <option className="option" value="Kamara">Kamara</option>
  					    <option className="option" value="Faliro">Faliro</option>
  					    <option className="option" value="Neapoli">Neapoli</option>
  					    <option className="option" value="Kalamaria">Kalamaria</option>
    					</select>
            </div>
					</div>
					<div className="properties">
            <div className="singleEntity">
  						<img src={img} className="image"></img>
              <figcaption>Price:{houses[1].price}, Size:{houses[1].size} </figcaption>
              <figcaption>Contact: 6965159638, For Rent</figcaption>
            </div>
            <div className="singleEntity">
              <img src={img} className="image"></img>
              <figcaption>Price:{houses[2].price}, Size:{houses[2].size}</figcaption>
              <figcaption>Contact: 6965159638, For Rent</figcaption>
            </div>
					</div>
				</div>
      </div>
>>>>>>> 0891079ec41f352762bbfe014465b4e262a99d94

    )
  }
}


export default Results;
