import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './SearchTypeButtons.scss';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection:'row'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
   
  },
  group: {
    display:'flex',
    flexDirection:'row',
    justify:'space-around'
  },
  single:{
      backgroundColor:'red'
  }
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >

            <FormControlLabel value="Rent" control={<Radio />} label={<Typography variant="display1">Rent</Typography>} />
            <FormControlLabel classes={classes.single} value="Buy" control={<Radio />} label={<Typography variant="display1">Buy</Typography>} />
          </RadioGroup>
        </FormControl>
        
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);