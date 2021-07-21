import { Input, Button, Flex } from '@chakra-ui/react';
import { VFC } from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  taskTitle: string;
};

const TaskForm: VFC = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Flex alignItems="center">
        <form onSubmit={handleSubmit(handleCreate)}>
          <Input
            placeholder="New Todo ?"
            size="lg"
            w="45vw"
            ml="3"
            {...register('taskTitle')}
          />
          <Button
            bg="#00BD9D"
            color="#FFF"
            variant="solid"
            ml="2"
            type="submit"
          >
            Add
          </Button>
        </form>
      </Flex>
    </>
  );
};

export default TaskForm;
