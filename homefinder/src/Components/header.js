import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../icons and colors/appartments.svg';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex:1001,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  paper: {
    padding: theme.spacing.unit * 1.2,
    textAlign: 'center',
    backgroundColor: '#f16c51',
    fontWeight: 700,
    fontSize: '40px',
    color: 'white',
    textTransform: 'uppercase',
    textDecoration: 'none',
    zIndex:1000
  },
  smallLogo:{
    width: '4%',
    height: '60px',
    float: 'left',
    marginLeft: '2%',
    marginTop: '0.3%',
  }
});

function CenteredGrid(props) {
  const { classes } = props;
  return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to='/' className={classes.paper}><img className={classes.smallLogo} src={logo} alt="logo"/>Home Finder</Link></Paper>
          </Grid>
        </Grid>
      </div>
    )
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
