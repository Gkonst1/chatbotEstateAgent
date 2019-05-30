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
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
		width:'30vh',
    flexDirection: 'column',
    alignSelf: "center",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
    color:'primary',
    textAlign:'center',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 4,
  },
  textField: {
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
  }
});



class SimpleSelect extends React.Component {

  constructor(props){
    super();
    this.state = {
      labelWidth: 0,
      price:sessionStorage.getItem('price'),
      size:sessionStorage.getItem('size'),
      location:sessionStorage.getItem('location'),
      status:sessionStorage.getItem('status'),
    }

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }




   handleChange = async (event) => {
     await this.setState({ [event.target.name]: event.target.value});

     if(this.state.price===null){
       window.sessionStorage.setItem('price', '')
     }else{
       window.sessionStorage.setItem('price', this.state.price);
     }if(this.state.size===null){
      window.sessionStorage.setItem('size', '');
    }else{
      window.sessionStorage.setItem('size', this.state.size);
    }
     if(this.state.location===null){
       window.sessionStorage.setItem('location', '');
     }else{
       window.sessionStorage.setItem('location', this.state.location);
     }
  }




handleSizeChange(e) {
  let sizeValue = e.target.value;
  this.setState({
    size: sizeValue
  },() =>{
    if(this.state.size===null){
      window.sessionStorage.setItem('size', '');
    }else{
      window.sessionStorage.setItem('size', this.state.size);
    }
  });
}

handlePriceChange(e) {
  let priceValue = e.target.value;
  this.setState({
    price: priceValue
  },() =>{
    if(this.state.price===null){
      window.sessionStorage.setItem('price', '');
    }else{
      window.sessionStorage.setItem('price', this.state.price);
    }
  });
}



  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">

        {/* Price Field */}
        <FormControl variant="outlined" style={{marginTop:'40px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Price (€)</Typography>
              <TextField
                    id="outlined-bare"
                    type='number'
                    defaultValue={this.state.price}
                    margin="none"
                    variant="outlined"
                    className='price'
                    onChange={this.handlePriceChange}
                   />
        </FormControl>
        {/* Size Field */}
        <FormControl variant="outlined"  style={{marginTop:'40px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Size (m2)</Typography>
                </FormControl>
        <FormControl>
        <TextField
        id="outlined-bare"
        type='number'
        defaultValue={this.state.size}
        margin="none"
        variant="outlined"
        className='size'
        onChange={this.handleSizeChange}
      />
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
                  <MenuItem value={'Kalamaria'} className="MenuItem">Kalamaria</MenuItem>
                  <MenuItem value={'Toumpa'} className="MenuItem" >Toumpa</MenuItem>
                  <MenuItem value={'Charilaou'} className="MenuItem">Charilaou</MenuItem>
                  <MenuItem value={'Panepistimia'} className="MenuItem">Panepistimia</MenuItem>
                  <MenuItem value={'Evosmos'} className="MenuItem">Evosmos</MenuItem>
                  <MenuItem value={'Kentro'} className="MenuItem">Kentro</MenuItem>
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
