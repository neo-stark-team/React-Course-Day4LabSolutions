import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Hello dear one, learning React...?');

  useEffect(() => {
    console.log('use effect hook called');
    setTimeout(() => {
      setMessage("Great.... This is time to learn about HOOKS");
    }, 2000)
  },[])

  return <div>
<h1> React Hook useEffect</h1>
  <h3>{message}</h3>
  <span>Check the console output for Log Message</span>
  </div>
};

export default App;