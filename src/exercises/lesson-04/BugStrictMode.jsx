// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// StrictMode in React helps us catch potential bugs by intentionally invoking certain lifecycle methods and effects multiple times during development. In this case, the useEffect hook is set up to create a new interval every time the component mounts, but because of StrictMode, it mounts and unmounts the component twice. This leads to multiple intervals being created, which causes the count to increment incorrectly. By using the cleanup function to clear the interval when the component unmounts, we ensure that only one interval is active at any given time, thus fixing the bug.
