import {useState} from 'react';

function Child({handleClick}) {
  return (
    <div>
      <button onClick={event => handleClick(100)}>Click</button>
    </div>
  );
}
export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = num => {
    // 👇️ take the parameter passed from the Child component
    setCount(current => current + num);

    console.log('argument from Child: ', num);
  };

  return (
    <div>
      <Child handleClick={handleClick} />

      <h2>Count: {count}</h2>
    </div>
  );
}
