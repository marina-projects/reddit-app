//styles
import { globalStyles } from './stylesGlobal';
import { Global } from '@emotion/react';
import './App.css'

//components

import PostPage from './components/postPage/postPage';
import PostList from './features/postList/postList';


//libraries
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';

function App() {

  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route path='/' element={<PostList />}/>
            <Route path='/:postId' element={<PostPage />} />
          </Route>
        </Routes>
          
          
      </BrowserRouter>
      
      
    </>
  )
}

export default App
