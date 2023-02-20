/* Write a button component */ 

import React from 'react'; 

const Button = (props) => { 
  
  return ( 
    
    <button className="AddButton" onClick={()=>alert('Hey !!! You Clicked' + props.Text)}>{props.Text}</button> 
    
  ); 
  
} 

export {Button};