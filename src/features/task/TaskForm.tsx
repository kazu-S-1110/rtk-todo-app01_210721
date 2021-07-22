import { Input, Flex, FormLabel, Text } from '@chakra-ui/react';
import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import { createTask } from './taskSlice';
import { useDispatch } from 'react-redux';

type Inputs = {
  taskTitle: string;
};

const TaskForm: VFC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  return (
    <>
      <Flex alignItems="center" ml="2" mt="3">
        <form onSubmit={handleSubmit(handleCreate)}>
          <FormLabel htmlFor="name">
            <Text fontSize="xl" ml="1" fontWeight="extrabold" color="#FF0080">
              New Todo
            </Text>
          </FormLabel>
          <Input
            placeholder={'new'}
            size="lg"
            w="45vw"
            {...register('taskTitle')}
          />
        </form>
      </Flex>
    </>
  );
};

export default TaskForm;
