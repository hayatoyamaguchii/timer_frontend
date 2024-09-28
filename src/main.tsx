import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { default as Home } from './pages/home';
import { default as Profile } from './pages/profile';
import { default as Message } from './pages/message';
import { default as Achievement } from './pages/achievement';
import { default as Settings } from './pages/settings';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <BrowserRouter>
        <App />
        <Routes>
          <Route path='/home' Component={Home} />
          <Route path='/profile' Component={Profile} />
          <Route path='/message' Component={Message} />
          <Route path='/achievement' Component={Achievement} />
          <Route path='/settings' Component={Settings} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);