import React from 'react';
import { Counter } from './features/counter/Counter';
import styles from './App.module.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Header from './components/header/Header';

const App: React.VFC = () => {
  return (
    <ChakraProvider>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Header />
    </ChakraProvider>
  );
};

export default App;
