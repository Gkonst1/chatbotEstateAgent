import React, {Fragment} from "react";
import Header from '../header';
import './tenant.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600}
}
class Tenant extends React.Component{
  render(){
    return(<Fragment>
      <Header/>
        <Grid container spacing={24}>

        {/* Title */}
          <Grid item xs={12} justify='center' alignItems="center">
            <Paper style={styles.paper} elevation={0} >
            <Typography variant="display3" style={styles.text}>
                Submit Your Property
            </Typography>
            </Paper>
          </Grid>

          {/* Left Panel */}

          <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
       


           {/* Right Panel */}

           <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>

        </Grid> 
        {/* Grid Container Closing */}
    </Fragment>
    
    )
  }
}

export default Tenant;
