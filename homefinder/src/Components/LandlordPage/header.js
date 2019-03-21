import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../../icons and colors/appartments.svg';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1.2,
    textAlign: 'center',
    backgroundColor: '#f16c51',
    fontWeight: 700,
    fontSize: '50px',
    color: 'white',
    textTransform: 'uppercase',
  },
  smallLogo:{
    width: '4%',
    height: 'auto',
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
            <Paper className={classes.paper}><img className={classes.smallLogo} src={logo} alt="logo"/>Home Finder</Paper>
          </Grid>
        </Grid>
      </div>
    )
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
