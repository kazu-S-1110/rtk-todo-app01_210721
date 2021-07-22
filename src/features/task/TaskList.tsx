import { VFC } from 'react';
import TaskItem from './TaskItem';
// import sampleData from './sampleData.json';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectTask } from './taskSlice';

const TaskList: VFC = () => {
  const tasks = useSelector(selectTask);
  return (
    <Box overflow="hidden" h="47vh" maxW="60vw" overflowY="auto" mt="3">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </Box>
  );
};

export default TaskList;
