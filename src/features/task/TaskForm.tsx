import { Input, Flex, FormLabel, Text, Button } from '@chakra-ui/react';
import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, mountedTask, editTask } from './taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { handleModalOpen } from './taskSlice';

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: Boolean;
};

const TaskForm: VFC<PropTypes> = ({ edit }) => {
  const mountTask = useSelector(mountedTask);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleEdit = (data: Inputs) => {
    // mountしているtaskのidとtitleを格納
    const sendData = { ...mountTask, title: data.taskTitle };
    // console.log(sendData);
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
  };

  return (
    <>
      <Flex alignItems="center" ml="2" mt="3">
        <form
          onSubmit={
            edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)
          }
        >
          <FormLabel htmlFor="name">
            <Text fontSize="xl" ml="1" fontWeight="extrabold" color="#FF0080">
              {edit ? 'Update Todo' : 'New Todo'}
            </Text>
          </FormLabel>
          <Input
            size="lg"
            w="45vw"
            {...register('taskTitle')}
            defaultValue={edit ? mountTask.title : ''}
          />
          {edit ? (
            <>
              <Button ml="2" type="submit">
                Update!
              </Button>
              <Button ml="2" onClick={() => dispatch(handleModalOpen(false))}>
                Cancel
              </Button>
            </>
          ) : null}
        </form>
      </Flex>
    </>
  );
};

export default TaskForm;
