import React from 'react';
import Singer from './Singer';
const Singers =({sings})=>{
    return (
    <div>
           {sings.map(sing=>(
        
        <Singer name={sing.name} year={sing.year} />
  
      ))}
    </div>
    )};
  
  
  export default Singers;