import { Input, Flex, FormLabel, Text } from '@chakra-ui/react';
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
      <Flex alignItems="center" ml="8" mt="4">
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
