import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid'
import Image from '../../../icons and colors/image.jpg'
import './singleentity.scss';

class SingleEntity extends React.Component{
render(){
    return( <Fragment>
        <Grid container >
            <Grid item xs={12}>
               <img src={Image} alt="housePhoto"></img> 
            </Grid>

            <Grid item xs={12} className="entityDescription">
            
                <Grid item xs={4} className="entityDescription_singleItem">
                    Saint Martins Platz
                </Grid>
                
                <Grid item xs={4} className="entityDescription_singleItem">
                    205m2
                </Grid>
                <Grid item xs={4} className="entityDescription_singleItem">
                    350$
                </Grid>
                
            </Grid>
                 
        </Grid>

    </Fragment>

    )

}

}

export default SingleEntity;
