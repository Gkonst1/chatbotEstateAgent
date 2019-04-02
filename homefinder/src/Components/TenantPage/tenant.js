import React, {Fragment} from "react";
import Header from '../header';
import './tenant.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';


// const styles=theme= {
//   paper:{padding:20, margin:20, textAlign:'center'},
//   text:{color:'#000', fontWeight:600},
//   form:{textAlign:'center'},
//   dense: {marginTop: 19},
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   }
// }



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  }
});



class Tenant extends React.Component{
  render(){
    const { classes } = this.props;

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

        <Grid item xs={6} style={styles.form}>

               
        <form style={styles.form}>
          <TextField
          id="standard-bare"
          label="Property"
          style={{ padding: 20}}
          className={(styles.dense, styles.textField)}
          margin="dense"
          // Inputprops is for the textfield place itself
          InputProps={{
            style:{fontSize:'8rem'}
          }}  
        />


          </form>
          
        </Grid>


           {/* Right Panel */}

        <Grid item xs={6}>
        
        </Grid>

        </Grid> 
        {/* Grid Container Closing */}
    </Fragment>
    
    )
  }
}

export default Tenant;
