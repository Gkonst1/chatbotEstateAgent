 import React, {Fragment} from "react";
import Header from '../header';
import './tenant.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import SearchForm from './SearchForm';

const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600},
  rightIcon:{marginleft:30},
  leftPanel:{ height:'100%' },
  rightPanel:{padding:29},

}

class Tenant extends React.Component{
  render(){
    return(<Fragment>
      <Header/>
        <Grid container spacing={48}>
        {/* Title */}
          <Grid item xs={12}>
            <Paper style={styles.paper} elevation={0} >
            <Typography variant="display2" style={styles.text}>
                Search your next Home
            </Typography>
            </Paper>
          </Grid>



          {/* Left Panel */}

        <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
          <SearchForm/>
        </Grid>



        {/* Right Panel */}
        <Grid item xs={12} sm={12} md={6} lg={6} style={styles.rightPanel} >
          <div className="buttons-box">
                <Grid item lg={3}>
                  <Button variant="contained" className="single-button" elevation='0' size="large"  style={
                    {width:'80%',
                    fontSize:19,
                    fontWeight:'bold',
                    color:'#fff',
                    backgroundColor:'#000'
                     }}>
                   Rent
                  </Button>
                </Grid>
                <Grid item lg={3}>
                <Button variant="contained" className="single-button" elevation='0' size="large"  style={
                    {width:'80%',
                    fontSize:19,
                    fontWeight:'700',
                    color:'#fff',
                    backgroundColor:'#f16c51'
                     }}>
                   SELL
                  </Button>
                </Grid>
          </div>
          <Fragment>

          <Grid item xs={12} className="submit-box" style={{textAlign:'center'}}>
               <Link to='/results'><Button variant="contained" className="single-button" elevation='0' size="large"  style={
                    {width:'50%',
                    fontSize:19,
                    marginTop:150,
                    fontWeight:'700',
                    color:'#000',
                    backgroundColor:'#fff'
                     }}>
                   SEARCH
                  </Button>
                  </Link>
                </Grid>

          </Fragment>
        </Grid>
        </Grid>{/* Grid Container Closing */}
    </Fragment>

    )

  }

}




export default Tenant ;
