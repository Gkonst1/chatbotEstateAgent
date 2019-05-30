import React, {Fragment} from "react";
import Header from '../header';
import '../TenantPage/tenant.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SubmitForm from './SubmitForm';
import StatusButtons from './StatusButtons';
import Chatbot from '../chatbot/chatbot';

const styles= {
 paper:{padding:20, margin:20, textAlign:'center',justifyContent:'center'},
 text:{color:'#000',fontSize:'5rem', fontWeight:900 , paddingTop:'15px'},
 rightIcon:{marginleft:30},
 leftPanel:{ height:'100%',justify:'center'},
 rightPanel:{padding:29},
}

class Landlord extends React.Component{
 render(){
   return(<Fragment>
     <Header/>
       <Grid container spacing={40} className='container' style={{justifyContent:'center'}}>
       {/* Title */}
         <Grid item xs={12}>
           <Paper style={styles.paper} elevation={0} >
           <Typography variant="display2" style={styles.text}>
               Submit your house!
           </Typography>
           </Paper>
         </Grid>
       {/* Left Panel */}
       <Grid item xs={12} >
         <StatusButtons/>
         <SubmitForm/>
       </Grid>

       {/* Right Panel */}
       <Grid item xs={12} style={{width:'90%'}}>

         <Fragment>

         <Grid item xs={12} className="submit-box" style={{textAlign:'center'}}>
              <Link to='/yourEntry'>
              <Button onSubmit={this.handlesubmit} variant="contained" className="single-button" elevation='0' size="large"  style={
                   {width:'20%',
                   fontSize:19,
                   marginTop:75,
                   fontWeight:'700',
                   color:'white',
                   backgroundColor:'#f16c51',
                   textDecorationLine:'none'
                    }}>
                  Submit
                 </Button>
                 </Link>
               </Grid>

         </Fragment>
       </Grid>
       </Grid>{/* Grid Container Closing */}
       <Chatbot/>
   </Fragment>

  )
 }
}

export default Landlord ;
