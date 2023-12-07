import { Button, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return <>
    <Button onClick={toggleColorMode}>
      Toggle { colorMode === 'light' ? 'Dark' : 'Light' }
    </Button>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  </>
}

export default App
