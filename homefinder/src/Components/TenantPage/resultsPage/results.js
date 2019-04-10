import React, {Fragment} from "react";
import './results.css';
import Header from '../../header'
import SearchForm from '../SearchForm';
import Grid from '@material-ui/core/Grid';
import SingleEntity from './SingleEntity';

const styles= {
  paper:{padding:20, margin:20, textAlign:'center'},
  text:{color:'#000', fontWeight:600},
  rightIcon:{marginleft:30},
  leftPanel:{ height:'100%', display:'flex', flexDirection:'row' },
  rightPanel:{padding:29},
}


class Results extends React.Component{
  render(){
    return (<Fragment>

      <Header/>


      <Grid container spacing={48}>

      <Grid item xs={12} sm={12} md={6} lg={6}  className="leftPanel" style={styles.leftPanel}>
        <SearchForm/>
      </Grid>


      <Grid item xs={12} sm={12} md={6} lg={6}  className="rightPanel" style={styles.rightPanel}>
          <SingleEntity/>
          <SingleEntity/>
          <SingleEntity/>
          <SingleEntity/>
          <SingleEntity/>
          <SingleEntity/>
          
      </Grid>



      </Grid>

      </Fragment>
    )
  }
}


export default Results;
