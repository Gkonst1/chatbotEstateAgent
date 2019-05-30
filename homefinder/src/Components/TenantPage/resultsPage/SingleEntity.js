import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import './singleentity.scss';
import Pin from '../../../icons and colors/maps-and-flags.svg'
import Size from '../../../icons and colors/width.svg'
import Euro from '../../../icons and colors/euro.svg'
import Phone from '../../../icons and colors/phone-receiver.svg'
import Check from '../../../icons and colors/checked.svg'



const SingleEntity = (props) =>(
 <Fragment >
    <Paper elevation={2} className='singlePaper'>
        <Grid container  className="singleEntity">
            <Grid item xs={12} className="image"
            style={{  backgroundImage:`url(${props.image})` ,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>
            </Grid>

            <Grid item xs={12} className="entityDescription" >

                <Grid item xs={4} className="entityDescription_singleItem">
                  <img src={Pin} alt="location:" className="icon"></img>{props.location}
                </Grid>

                <Grid item xs={4} className="entityDescription_singleItem">
                    <img src={Size} alt='Size:' className='icon'></img> {props.size}m2
                </Grid>
                <Grid item xs={4} className="entityDescription_singleItem">
                    <img src={Euro} alt='price: ' className='icon'></img>{props.price}
                </Grid>


                <Grid item xs={6} className="entityDescription_singleItem">
                  <img src={Phone} alt="contact:" className="icon"></img>{props.contact}
                </Grid>

                <Grid item xs={4} className="entityDescription_singleItem">
                    <img src={Check} alt='status:' className='icon'></img> {props.status}
                </Grid>
            </Grid>



        </Grid>
        </Paper>
    </Fragment>

)


export default SingleEntity;
