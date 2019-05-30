import React from 'react';
import '../TenantPage/SearchForm.scss';
import '../TenantPage/tenant.scss';
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
      priceSubmit:sessionStorage.getItem('priceSubmit'),
      sizeSubmit:sessionStorage.getItem('sizeSubmit'),
      locationSubmit:sessionStorage.getItem('locationSubmit'),
      statusSubmit:sessionStorage.getItem('statusSubmit'),
      phoneSubmit:sessionStorage.getItem('phoneSubmit'),
      linkSubmit:sessionStorage.getItem('linkSubmit')
    }

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleLink=this.handleLink.bind(this);
    }



   handleChange = async (event) => {
     await this.setState({ [event.target.name]: event.target.value});
    //  console.log(event.target.name, event.target.value);
     if(this.state.priceSubmit===null){
       window.sessionStorage.setItem('priceSubmit', '')
     }else{
       window.sessionStorage.setItem('priceSubmit', this.state.priceSubmit);
     }if(this.state.sizeSubmit===null){
      window.sessionStorage.setItem('sizeSubmit', '');
    }else{
      window.sessionStorage.setItem('sizeSubmit', this.state.sizeSubmit);
    }
     if(this.state.locationSubmit===null){
       window.sessionStorage.setItem('locationSubmit', '');
     }else{
       window.sessionStorage.setItem('locationSubmit', this.state.locationSubmit);
     }
     if(this.state.phoneSubmit===null){
      window.sessionStorage.setItem('phoneSubmit', '');
    }else{
      window.sessionStorage.setItem('phoneSubmit', this.state.phoneSubmit);
    }
    if(this.state.handleLink===null){
      window.sessionStorage.setItem('linkSubmit', '');
    }else{
      window.sessionStorage.setItem('linkSubmit', this.state.linkSubmit);
    }
  }


handlePhoneNumber(e){
  let phoneValue = e.target.value;
  this.setState({
    phoneSubmit: phoneValue
  },() =>{
    if(this.state.phoneValue===null){
      window.sessionStorage.setItem('phoneSubmit', '');
    }else{
      window.sessionStorage.setItem('phoneSubmit', this.state.phoneSubmit);
    }
  });
}


handleSizeChange(e) {
  let sizeValue = e.target.value;
  this.setState({
    sizeSubmit: sizeValue
  },() =>{
    if(this.state.sizeSubmit===null){
      window.sessionStorage.setItem('sizeSubmit', '');
    }else{
      window.sessionStorage.setItem('sizeSubmit', this.state.sizeSubmit);
    }
  });
}
handleLink(e){
  let linkValue = e.target.value;
  this.setState({
    linkSubmit: linkValue
  },() =>{
    if(this.state.linkSubmit===null){
      window.sessionStorage.setItem('linkSubmit', '');
    }else{
      window.sessionStorage.setItem('linkSubmit', this.state.linkSubmit);
    }
  });
}
handlePriceChange(e) {
  let priceValue = e.target.value;
  this.setState({
    priceSubmit: priceValue
  },() =>{
    if(this.state.priceSubmit===null){
      window.sessionStorage.setItem('priceSubmit', '');
    }else{
      window.sessionStorage.setItem('priceSubmit', this.state.priceSubmit);
    }
  });
}
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">

        {/* Price Field */}
        <FormControl variant="outlined" style={{marginTop:'25px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Price (€)</Typography>

                    <TextField
                    id="outlined-bare"
                    type='number'
                    defaultValue={this.state.priceSubmit}
                    margin="none"
                    variant="outlined"
                    className='price'
                    onChange={this.handlePriceChange}
                    placeholder="e.g. 400"
                   />
        </FormControl>

        {/* Size Field */}
        <FormControl variant="outlined"  style={{marginTop:'25px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Size (m2)</Typography>


        </FormControl>
        <FormControl>
        <TextField
        id="outlined-bare"
        type='number'
        defaultValue={this.state.sizeSubmit}
        margin="none"
        variant="outlined"
        className='size'
        onChange={this.handleSizeChange}
        placeholder="e.g. 40"
      />
        </FormControl>

        {/* Phone Field */}
        <FormControl variant="outlined"  style={{marginTop:'25px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Your Phone</Typography>

        </FormControl>
        <FormControl>
        <TextField
        id="outlined-bare"
        type='tel'
        defaultValue={this.state.phoneSubmit}
        margin="none"
        variant="outlined"
        className='phone'
        onChange={this.handlePhoneNumber}
        placeholder="e.g. 6955555555"
      />
        </FormControl>


        {/* Location Field */}
        <FormControl variant="outlined" style={{marginTop:'25px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Location</Typography>
                <Select
                  value={this.state.locationSubmit}
                  onChange={this.handleChange}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      name="locationSubmit"
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

        {/* Image Field */}
        <FormControl variant="outlined"  style={{marginTop:'25px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Image Link</Typography>

        </FormControl>
        <FormControl>
        <TextField
        id="outlined-bare"
        type='url'
        defaultValue={this.state.linkSubmit}
        margin="none"
        variant="outlined"
        className='link'
        onChange={this.handleLink}
      />
        </FormControl>


      </form>

    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
