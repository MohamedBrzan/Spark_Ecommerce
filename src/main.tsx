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
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import About from './pages/About/About.tsx';
import ContactUs from './pages/ContactUs/ContactUs.tsx';
import CheckOut from './pages/CheckOut/CheckOut.tsx';
import OrderConfirmed from './pages/OrderConfirmed/OrderConfirmed.tsx';
import TrackOrder from './pages/TrackOrder/TrackOrder.tsx';
import FAQ from './pages/FAQ/FAQ.tsx';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions.tsx';
import CategoryPage from './pages/Categories/CategoryPage.tsx';
import Admin from './pages/admin/Admin.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/'>
            <Route index element={<App />} />
            <Route path='sign_up_decision' element={<SignUpDecision />} />
            <Route path='sign_up' element={<SignUp />} />
            <Route path='sign_in' element={<SignIn />} />
            <Route path='code_validation' element={<Verification />} />
            <Route path='forget_password' element={<ForgetPassword />} />
            <Route path='change_password' element={<ChangePassword />} />
            <Route path='about_us' element={<About />} />
            <Route path='categories' element={<CategoryPage />} />
            <Route path='contact_us' element={<ContactUs />} />
            <Route path='check_out' element={<CheckOut />} />
            <Route path='order_confirmed'>
              <Route index element={<OrderConfirmed />} />
              <Route path='track_order' element={<TrackOrder />} />
            </Route>
            <Route path='faq' element={<FAQ />} />
            <Route path='terms_conditions' element={<TermsAndConditions />} />
            <Route path='admin'>
              <Route index element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
