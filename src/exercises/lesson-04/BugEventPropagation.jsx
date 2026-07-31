// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(e) {
    e.stopPropagation(); // Stop the event from bubbling up
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Here is the explaination. When you first clicked the inner button it triggerted both alerts because of event bubbling. The event started on the element it happend opn and traveled upword. This trigered any event it passed. So the button's onClick ran, and then triggered the parent's onClick too. I added the event parameter, e, to handleInnerClick, this got passed to every handler automatically. I called e.stopPropagation() to stop the event from bubbling up to the parent. This way only the inner button's action triggers an alert when the button is pushed.
