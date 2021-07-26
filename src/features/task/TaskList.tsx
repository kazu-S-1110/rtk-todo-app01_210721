import { VFC } from 'react';
import TaskItem from './TaskItem';
// import sampleData from './sampleData.json';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTask } from './taskSlice';
import { filterSwitch, filterTask } from './taskSlice';

const TaskList: VFC = () => {
  const tasks = useSelector(selectTask);
  const filteredSwitch = useSelector(filterSwitch);
  const dispatch = useDispatch();

  return (
    <>
      <Flex mt="4" alignItems="center">
        <Text
          fontWeight="extrabold"
          bgGradient="linear(to-l, #7928CA,#ff9bcd)"
          bgClip="text"
          mr="3"
          ml="3"
        >
          {filteredSwitch === 'all' ? <Text>All Tasks display</Text> : null}
          {filteredSwitch === 'no-fin' ? (
            <Text>Only No-completed Tasks display</Text>
          ) : null}
          {filteredSwitch === 'fin' ? (
            <Text>Only completed Tasks display</Text>
          ) : null}
        </Text>
        <Button
          fontSize="x-small"
          size="sm"
          bg="#00BD9D"
          onClick={() => dispatch(filterTask('no-fin'))}
        >
          未完了タスクのみ表示
        </Button>
        <Button
          fontSize="x-small"
          size="sm"
          bg="#00BD9D"
          onClick={() => dispatch(filterTask('fin'))}
        >
          完了済タスクのみ表示
        </Button>
        <Button
          fontSize="x-small"
          size="sm"
          bg="#00BD9D"
          onClick={() => dispatch(filterTask('all'))}
        >
          フィルタを削除
        </Button>
      </Flex>
      <Box overflow="hidden" h="47vh" maxW="60vw" overflowY="auto">
        {filteredSwitch === 'fin' &&
          tasks.map(
            (task) => task.completed && <TaskItem task={task} key={task.id} />
          )}
        {filteredSwitch === 'no-fin' &&
          tasks.map(
            (task) => task.completed || <TaskItem task={task} key={task.id} />
          )}

        {filteredSwitch === 'all' &&
          tasks.map((task) => <TaskItem task={task} key={task.id} />)}
      </Box>
    </>
  );
};

export default TaskList;
