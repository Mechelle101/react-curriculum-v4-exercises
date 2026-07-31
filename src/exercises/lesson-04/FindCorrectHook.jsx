import { useState } from 'react';

// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// First i imported useState. I replace the plain let clickCount variable with useState because a normal variable has two problems in rect. It resets to its initial value every time the component function re-runs, and changing it does not tell react anything. So, nothing re-renders. UseState stores the value so it persists between renders, and calling setClickCount both updates the value and wwschedules a re-render. I used the functional updater from setClickCount(...) so the new count is based on the most current state rather than the value captured when the handler was created. useRef is the wrong choice here because the count is rendered in the button's label, a ref would hold the correct number in memory, but since ref changes dont treigger  a re-render, the button text would stay 0.
