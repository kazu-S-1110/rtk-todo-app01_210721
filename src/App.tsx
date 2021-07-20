import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return <ChakraProvider></ChakraProvider>;
}

export default App;
