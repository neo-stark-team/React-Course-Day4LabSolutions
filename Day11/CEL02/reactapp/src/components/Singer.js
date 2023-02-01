import React from 'react';
const Singer=(props)=> {
    return (
      <div className='product'>
        <h1>{props.name}</h1>
        <p>Year: {props.year}</p>
      </div>
    );
  }
export default Singer;