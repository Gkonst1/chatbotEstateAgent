import React from 'react';
import sadFace from '../../../icons and colors/sadFace.png';

const divStyle={
	textAlign: 'center',
}
const noResultsStyle={
	textAlign: 'center',
	color: '#6e48aa',
	fontSize: '4em',
	width: '100%',
	marginTop: '20%',
	direction: 'ltr'
}
const noResultsStyleImg={
	width: '25%',
	height: 'auto'
}

class NoResults extends React.Component{
    render()
{
    return(
        <div style={divStyle}>
            <h1 style={noResultsStyle}>I'm sorry... No Homes found, you can search again with different filters!</h1>
						<img src={sadFace} style={noResultsStyleImg}/>
        </div>
    )
}}

export default NoResults;
