import React from 'react';
import './instructions.css';
import Instr from '../../icons and colors/instr.png'

class Instructions extends React.Component{
  render(){
    return(
      <div className="mainInstr">
        <img className="instr" src={Instr}/>
      </div>
    )
  }
}

export default Instructions;
