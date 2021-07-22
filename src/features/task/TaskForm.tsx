import { Input, Flex, FormLabel, Text, Button } from '@chakra-ui/react';
import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import { createTask } from './taskSlice';
import { useDispatch } from 'react-redux';

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: Boolean;
};

const TaskForm: VFC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleUpdate = (data: Inputs) => {
    alert(data.taskTitle);
  };

  return (
    <>
      <Flex alignItems="center" ml="2" mt="3">
        <form
          onSubmit={
            edit ? handleSubmit(handleUpdate) : handleSubmit(handleCreate)
          }
        >
          <FormLabel htmlFor="name">
            <Text fontSize="xl" ml="1" fontWeight="extrabold" color="#FF0080">
              {edit ? 'Update Todo' : 'New Todo'}
            </Text>
          </FormLabel>
          <Input size="lg" w="45vw" {...register('taskTitle')} />
          {edit ? (
            <>
              <Button ml="2">Update!</Button>
              <Button ml="2">Cancel</Button>
            </>
          ) : null}
        </form>
      </Flex>
    </>
  );
};

export default TaskForm;
