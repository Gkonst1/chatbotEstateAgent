import React from 'react';
import './SearchForm.scss';
import './tenant.scss';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection :'column',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
    color:'primary'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 4,
  }
});

class SimpleSelect extends React.Component {
  state = {
    labelWidth: 0,
    price:'',
    size:'',
    location:''
  };


  componentDidMount() {
    this.setState({

    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value)
  };

  render() {

    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off" >

        {/* Price Field */}
        <FormControl variant="outlined" style={{marginTop:'40px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Price (€)</Typography>
                <Select
                  value={this.state.price}
                  onChange={this.handleChange}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      name="price"

                    />
                  }
                  className='SelectedMenuItem'
                >
                  <MenuItem value="" className="MenuItem">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={100} className="MenuItem">100</MenuItem>
                  <MenuItem value={200} className="MenuItem" >200</MenuItem>
                  <MenuItem value={300} className="MenuItem">300</MenuItem>
                </Select>
        </FormControl>


        {/* Size Field */}
        <FormControl variant="outlined"  style={{marginTop:'40px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Size (m2)</Typography>
                <Select
                  value={this.state.size}
                  onChange={this.handleChange}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      name="size"

                    />
                  }
                  className='SelectedMenuItem'
                >
                  <MenuItem value="" className="MenuItem">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={30} className="MenuItem">30</MenuItem>
                  <MenuItem value={50} className="MenuItem" >50</MenuItem>
                  <MenuItem value={80} className="MenuItem">80</MenuItem>
                  <MenuItem value={90} className="MenuItem">90</MenuItem>
                  <MenuItem value={100} className="MenuItem">100</MenuItem>
                  <MenuItem value={120} className="MenuItem">120</MenuItem>

                </Select>
        </FormControl>


        {/* Location Field */}
        <FormControl variant="outlined" style={{marginTop:'40px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Location</Typography>
                <Select
                  value={this.state.location}
                  onChange={this.handleChange}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      name="location"

                    />
                  }
                  className='SelectedMenuItem'
                >
                  <MenuItem value="" className="MenuItem">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10} className="MenuItem">Kalamaria</MenuItem>
                  <MenuItem value={20} className="MenuItem" >Kalamaria</MenuItem>
                  <MenuItem value={30} className="MenuItem">Toumpa</MenuItem>
                </Select>
        </FormControl>
      </form>

    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
