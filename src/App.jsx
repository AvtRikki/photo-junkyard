import { Button, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './layouts/PageLayout/PageLayout';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return <>
    {/* <Button onClick={toggleColorMode}>
      Toggle { colorMode === 'light' ? 'Dark' : 'Light' }
    </Button> */}
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<AuthPage />}/>
      </Routes>
    </PageLayout>
  </>
}

export default App
