export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// recieve increment function and call it onClick
// Child could not update parents coiunter because props only flow one direction, parent to child and they are read only. A child cannot reach up and modify its parent state. The way around this is for a parent to pass a function down, which a child invokes when somerthing happens. The function is called a callback or handler. I destructured onIncrement out of props in the parameter list and passed it to the buttons onClick.

// * data flows down through props, and events flow up through callbacks. *
