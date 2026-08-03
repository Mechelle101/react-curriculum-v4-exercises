import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// Here is need to pass the increment function to the Child component as a prop so that it can call it when the button is clicked.
// Parent owns the counter state because parent is the component that displays it. state is only visable in the component where it is declared, as well as anything it is passed down to. The problem was that increment existed and worked but nothing ever called it. I passed it down to child as the onIncrememnt prop.
