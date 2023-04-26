import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Auth/SignUp.tsx';
import SignIn from './Auth/SignIn.tsx';
import SignUpDecision from './Auth/SignUpDecision.tsx';
import Verification from './Auth/Verification.tsx';
import ForgetPassword from './Auth/ForgetPassword.tsx';
import ChangePassword from './Auth/ChangePassword.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<App />} />
          <Route path='sign_up_decision' element={<SignUpDecision />} />
          <Route path='sign_up' element={<SignUp />} />
          <Route path='sign_in' element={<SignIn />} />
          <Route path='code_validation' element={<Verification />} />
          <Route path='forget_password' element={<ForgetPassword />} />
          <Route path='change_password' element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
