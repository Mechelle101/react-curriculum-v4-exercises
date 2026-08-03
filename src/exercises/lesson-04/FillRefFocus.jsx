// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.

import { useRef } from 'react';

export default function FillRefFocus() {
  // the null pasted is the starting value of .current
  const inputRef = useRef(null);

  function focusInput() {
    // Use the ref to focus the input element
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// first i need to inport the useRef
// next create the ref and attach it to the input element
// then i need to use it in the handler

// the handler had no way to reach the input, so i created a ref with useRef(null) and attached it to the input with the ref prop. this makes react store the real DOM node in inputRef.current after rendering. Calling inputRef.current.focus() inside the click handlerworks because handlers run after render, when the ref is populated. ref is the correct way to go because a DOM node isnt rendered and storing it shouldnt cause a re-render. In addition, focus is an important action on a live element that reacts declaritive model cant express.
