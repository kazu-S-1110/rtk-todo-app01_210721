import { VFC } from 'react';
import TaskItem from './TaskItem';
import sampleData from './sampleData.json';
import { Box } from '@chakra-ui/react';

const TaskList: VFC = () => {
  return (
    <Box overflow="hidden" h="47vh" maxW="60vw" overflowY="auto" mt="3">
      {sampleData.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </Box>
  );
};

export default TaskList;
