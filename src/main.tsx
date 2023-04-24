import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu.tsx';
import SingUp from './Auth/SignUp.tsx';
import SignIn from './Auth/SignIn.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<App />} />

          <Route path='menu' element={<Menu />} />
          <Route path='sign_up' element={<SingUp />} />
          <Route path='sign_in' element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
