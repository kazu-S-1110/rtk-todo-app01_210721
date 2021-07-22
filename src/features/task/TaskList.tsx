import React from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  return (
    <div>
      <TaskItem task={{ id: 1, title: 'test', completed: false }} />
    </div>
  );
};

export default TaskList;
