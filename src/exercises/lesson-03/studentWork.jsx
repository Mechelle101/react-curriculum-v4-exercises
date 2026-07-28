//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
import BugMutatedState from './BugMutatedState.jsx';
import BugProps from './BugProps.jsx';
import BugEffectLoop from './BugEffectLoop.jsx';

export default function StudentWork() {
  return (
    <div>
      <BugMutatedState />
      <BugEffectLoop />
      <BugProps />
    </div>
  );
}
