// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  // let is not needed because the variable will not change. that was a big clue.
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// the handleAdd function mutated the count variable in place React does not reliably track changes to mutable state variables. The fix uses setCount with a functional update to ensure that the state is updated correctly based on the previous state value. This prevents issues with stale state and ensures that the component re-renders correctly when the count changes.
