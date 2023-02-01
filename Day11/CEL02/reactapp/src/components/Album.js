import React from 'react';
const Album=(props)=> {
    return (
      <div className='product'>
        <h1>{props.name}</h1>
        <p>Singer: {props.singer}</p>
      </div>
    );
  }
export default Album;