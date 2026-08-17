import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { filterTasks } from './utils/filterTasks';

import UserProfile from './components/UserProfile';
import TaskFilter from './components/TaskFilters';
import TaskItem from './components/TaskItem';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <UserProfile name="Mechelle" />
      <TaskFilter filter={filter} setFilter={setFilter} />

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
