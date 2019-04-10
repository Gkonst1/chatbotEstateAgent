import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid'
import './singleentity.scss';
import Pin from '../../../icons and colors/maps-and-flags.svg'
import Size from '../../../icons and colors/width.svg'
import Euro from '../../../icons and colors/euro.svg'



const SingleEntity = (props) =>(
 <Fragment >
        <Grid container className="singleEntity" xs={12} >
            <Grid item xs={12} className="image" 
            style={{  backgroundImage: `{props.image}`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>
            </Grid>

            <Grid item xs={12} className="entityDescription" >
            
                <Grid item xs={7} justify="center" className="entityDescription_singleItem">
                  <img src={Pin} alt="location:" className="icon"></img>{props.location}
                </Grid>
                
                <Grid item xs={5} className="entityDescription_singleItem">
                    <img src={Size} alt='Size:' className='icon'></img> {props.size}
                </Grid>
                <Grid item xs={2} className="entityDescription_singleItem">
                    <img src={Euro} alt='price: ' className='icon'></img>{props.price}
                </Grid>
                
            </Grid>
                 
        </Grid>

    </Fragment>

)


export default SingleEntity;
