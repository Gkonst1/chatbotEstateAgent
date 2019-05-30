import React, {Fragment} from "react";
import Header from '../header';
import '../TenantPage/tenant.scss';
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

const validation= function(){
  const price=window.sessionStorage.getItem('priceSubmit');
  let size=window.sessionStorage.getItem('sizeSubmit');
  let location=window.sessionStorage.getItem('locationSubmit');
  let status=window.sessionStorage.getItem('statusSubmit');
  let contact=window.sessionStorage.getItem('phoneSubmit');
  let link=window.sessionStorage.getItem('linkSubmit');
  if(price===null || size===null || location===null || status===null || contact===null || link===null || price==='' || size==='' || location==='' || status==='' || contact==='' || link===''){
    alert('Sorry you should fill all the fields!');
  }else{
    if(price<=0 || size<=0 || contact<=0){
      alert(`Price size and contact can't be megative numbers or 0. Please try again!`);
    }else{
      let phone = contact.toString(10).replace(/\D/g, '0').split('').map(Number);
      if(phone.length!==10){
        alert(`Please enter a greek phone number!`);
      }else{
        window.location='http://localhost:3000/landlord/yourEntry';
      }
    }
  }
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
       <Grid item xs={12}>
         <StatusButtons/>
         <SubmitForm/>
       </Grid>

       {/* Right Panel */}
       <Grid item xs={12} style={{width:'90%'}}>

         <Fragment>

         <Grid item xs={12} className="submit-box" style={{textAlign:'center'}}>
              <Button onClick={validation} variant="contained" className="single-button" elevation='0' size="large"  style={
                   {width:'10%',
                   fontSize:19,
                   marginTop:20,
                   fontWeight:'700',
                   color:'white',
                   backgroundColor:'#f16c51',
                    }}>
                  Submit
                 </Button>
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
