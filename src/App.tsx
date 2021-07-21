import React from 'react';
import { Counter } from './features/counter/Counter';
import styles from './App.module.scss';
import { ChakraProvider, Center } from '@chakra-ui/react';
import Header from './components/header/Header';

const App: React.VFC = () => {
  return (
    <ChakraProvider>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <Header />
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
