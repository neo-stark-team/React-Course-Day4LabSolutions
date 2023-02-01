import React from 'react';
import Album from './Album';
const Albums =({sings})=>{
    return (
    <div>
     
      {sings.map(sing=>(
        
        <Album name={sing.name} singer={sing.singer} />
  
      ))}
    </div>
    )};
  
  
  export default Albums;