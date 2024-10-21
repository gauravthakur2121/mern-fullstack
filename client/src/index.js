import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/style.css";
import {Routes, Route,BrowserRouter} from "react-router-dom"
import Myloginpage from './modules/auth/Myloginpage';
import Myregistrpage from './modules/auth/Myregistrpage';
import Mylandingpge from './modules/dashboard/Mylandingpge';
import Myerrorpage from './modules/shares/Myerrorpage';
import Mainpage from './modules/dashboard/Mainpage';
import Userdetailspage from './modules/dashboard/Userdetailspage';
import Usereditpage from './modules/dashboard/Usereditpage';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './modules/shares/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <UserProvider> 
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Myloginpage />} />
        <Route path='registor' element={<Myregistrpage />} />
        <Route path='dashboard' element={<Mylandingpge />}>
          <Route path='' element={<Mainpage />} />
          <Route path='details/:id' element={<Userdetailspage />} />
          <Route path='edituser/:id' element={<Usereditpage />} />
        </Route>
        <Route path='*' element={<Myerrorpage />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
</React.StrictMode>
); 