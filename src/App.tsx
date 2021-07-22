import React from 'react';
// import { Counter } from './features/counter/Counter';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/header/Header';
import TaskForm from './features/task/TaskForm';
import TaskList from './features/task/TaskList';

const App: React.VFC = () => {
  return (
    <ChakraProvider>
      <Box
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100vw"
        display="flex"
        bg="#54defd"
      >
        <Box
          alignItems="center"
          justifyContent="center"
          h="70vh"
          w="70vw"
          bg="#ffffff"
          borderRadius="2xl"
          p="6"
          overflow="hidden"
        >
          <Header />
          <TaskForm />
          <TaskList />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
