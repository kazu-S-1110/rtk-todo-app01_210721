import { VFC } from 'react';
import TaskItem from './TaskItem';
// import sampleData from './sampleData.json';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectTask } from './taskSlice';
import { filterSwitch } from './taskSlice';

const TaskList: VFC = () => {
  const tasks = useSelector(selectTask);
  const filteredSwitch = useSelector(filterSwitch);
  return (
    <Box overflow="hidden" h="47vh" maxW="60vw" overflowY="auto" mt="3">
      {filteredSwitch
        ? tasks.map(
            (task) => task.completed || <TaskItem task={task} key={task.id} />
          )
        : tasks.map((task) => <TaskItem task={task} key={task.id} />)}
    </Box>
  );
};

export default TaskList;
