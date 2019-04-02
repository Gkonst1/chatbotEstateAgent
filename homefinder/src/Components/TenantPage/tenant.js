import React, {Fragment} from "react";
import Header from '../header';
import './tenant.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600},
  label:{fontSize:15, marginBottom:0},
  leftPanel:{ height:'100%'},
  rightPanel:{backgroundColor:'yellow'}
}






class Tenant extends React.Component{
  render(){
   
    return(<Fragment>
      <Header/>
        <Grid container spacing={48}>
        {/* Title */}
          <Grid item xs={12}>
            <Paper style={styles.paper} elevation={0} >
            <Typography variant="display3" style={styles.text}>
                Submit Your Property
            </Typography>
            </Paper>
          </Grid>

          {/* Left Panel */}

        <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
       
        <form style ={styles.form} justify='center' alignItems="center">
        
              <h3 style={styles.label}>Price</h3>
              <TextField
                id="outlined-bare"
                className={styles.form}
                variant="outlined"
                margin="normal"
                InputProps	={{style: {fontSize:20 , fontWeight:600}}}
              />


              <h3 style={styles.label}>Size</h3>
              <TextField
                id="outlined-bare"
                className={styles.form}
                variant="outlined"
                margin="normal"
                InputProps	={{style: {fontSize:20 , fontWeight:600}}}
              />

              <h3 style={styles.label}>Location</h3>
              <TextField
                id="outlined-bare"
                className={styles.form}
                variant="outlined"
                margin="normal"
                InputProps	={{style: {fontSize:20 , fontWeight:600}}}
              />    
        </form>
        </Grid>


           {/* Right Panel */}

        <Grid item xs={6} style={styles.rightPanel} justify="flex-end">
            <Typography></Typography>
        </Grid>

        </Grid> 
        {/* Grid Container Closing */}
    </Fragment>
    
    )
    
  }
  
}




export default Tenant ;
