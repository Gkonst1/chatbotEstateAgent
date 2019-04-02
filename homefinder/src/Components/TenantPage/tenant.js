import React, {Fragment} from "react";
import Header from '../header';
import './tenant.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';


const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600},
  button:{margin:20},
  rightIcon:{marginleft:30},
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
                Find a new Home
            </Typography>
            </Paper>
          </Grid>

          {/* Left Panel */}

        <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
       
        <form style ={styles.form} justify='center' alignItems="center">
        
              <h3 className="label">Price</h3>
              <TextField
                id="outlined-bare"
                style={styles.text}
                className='textfield'
                variant="outlined"
                margin="normal"
                InputProps	={{style: {fontSize:20 , fontWeight:600}}}
              />


              <h3 className="label">Size</h3>
              <TextField
                id="outlined-bare"
                className='textfield'
                style={styles.text}
                variant="outlined"
                margin="normal"
                InputProps	={{style: {fontSize:20 , fontWeight:600}}}
              />

              <h3 className="label">Location</h3>
              <TextField
                id="outlined-bare"
                className='textfield'
                style={styles.text}
                variant="outlined"
                margin="normal"
                InputProps	={{style: {fontSize:20 , fontWeight:600}}}
              />    
        </form>
        </Grid>

        {/* Right Panel */}
        <Grid item xs={12} sm={12} md={6} lg={6} style={styles.rightPanel} >
          <div className="buttons-box">
                <Grid item lg={3}>
                      <Button size='large' variant="outlined" color="primary" >
                        Rent
                      </Button>
                </Grid>
                <Grid item lg={3}>
                    <Button size='large' variant="outlined" color="secondary" >
                      Buy
                    </Button>
                </Grid>
          </div>

          <Fragment>
              <Button variant="contained" color="default" className={styles.button}>
                    Upload
                   <CloudUploadIcon className={styles.rightIcon} />
              </Button>
          </Fragment>
        </Grid>
        </Grid>{/* Grid Container Closing */}
    </Fragment>
    
    )
    
  }
  
}




export default Tenant ;
