import { Box, Text, Input, Button, Flex } from '@chakra-ui/react';

const TaskForm = () => {
  return (
    <>
      <Flex alignItems="center">
        <Input placeholder="New Todo ?" size="lg" w="55%" ml="3" />
        <Button bg="#00BD9D" color="#FFF" variant="solid" ml="2">
          Add
        </Button>
      </Flex>
    </>
  );
};

export default TaskForm;
