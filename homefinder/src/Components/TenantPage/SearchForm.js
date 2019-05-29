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
    alignSelf: "center"
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
  }




   handleChange = async (event) => {
     await this.setState({ [event.target.name]: event.target.value});
    //  console.log(event.target.name, event.target.value);
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
  this.setState({
    size: e.target.value
  });
  if(this.state.size===null){
    window.sessionStorage.setItem('size', '');
  }else{
    window.sessionStorage.setItem('size', this.state.size);
  }

  console.log(this.state.size)
}


//   handleSizeChange(event) {
//     console.log("Value from event:", event.target.value);

//     this.setState({
//       size: event.target.value
//     }(), () => {
//       console.log("New state in ASYNC callback:", this.state.size);
//     });

//     console.log("New state DIRECTLY after setState:", this.state.size);
//   };
// ;




  // handleSizeChange(event){
  //   event.preventDefault();
  //   alert('Your current size is' +  this.input.value)
  //   this.setState({size:event.target.value})
  // }
// handleSize(event){
//   console.log('Value from event:');
//   this.setState({
//     size:event.target.value
//   },()=>{
//     console.log('New state in Async callback:', event.target.value);
//   });
//   console.log('New state DIRECTLY after the setState', this.state.size);
// }




  // handleSize(value){
  //   this.setState({
  //     size:value
  //   });
  //   if(this.state.size===null){
  //     window.sessionStorage.setItem('size', '');
  //   }else{
  //     window.sessionStorage.setItem('size', this.state.size);
  //   }
  // }

  render() {
    let input;
    const { classes, size } = this.props;
    return (
      <form className={classes.root} autoComplete="off">

        {/* Price Field */}
        <FormControl variant="outlined" style={{marginTop:'40px'}} className={classes.formControl}>
            <Typography className='fieldTitle' variant='display1' gutterBottom>Price (€)</Typography>
                <Select
                  value={this.state.price}
                  price={this.state.price}
                  onChange={this.handleChange}
                  className='price'
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
                  <MenuItem value={400} className="MenuItem">400</MenuItem>
                  <MenuItem value={500} className="MenuItem">500</MenuItem>
                  <MenuItem value={600} className="MenuItem">600</MenuItem>
                  <MenuItem value={700} className="MenuItem">700</MenuItem>
                </Select>
        </FormControl>


        {/* Size Field */}
        {/* <FormControl variant="outlined"  style={{marginTop:'40px'}} className={classes.formControl}>
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
                  <MenuItem value={30} className="MenuItem">30+</MenuItem>
                  <MenuItem value={50} className="MenuItem" >50+</MenuItem>
                  <MenuItem value={80} className="MenuItem">80+</MenuItem>
                  <MenuItem value={90} className="MenuItem">90+</MenuItem>
                  <MenuItem value={100} className="MenuItem">100+</MenuItem>
                  <MenuItem value={120} className="MenuItem">120+</MenuItem>
                  <MenuItem value={150} className="MenuItem">150+</MenuItem>

                </Select>
        </FormControl> */}
        <FormControl>
        <TextField
        id="outlined-bare"
        // className={classes.textField}
        type='text'
        defaultValue={this.state.size}
        margin="normal"
        variant="outlined"
        className='size'
        onChange={this.handleSizeChange}
        // ref={(input) => this.input = input}
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
