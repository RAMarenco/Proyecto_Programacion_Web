import classes from'./App.module.scss';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import Login from './views/Login/Login';

import {ProtectedRoutes} from './core/AuthRoleUser';
import Home from './views/Home/Home';
import Stores from './views/Stores/Stores';
import Store from './views/Stores/Store/Store';
import Category from './views/Stores/Category/Category';
import Profile from './views/Profile/Profile';
import Contact from './views/Contact/Contact';

function App() {  

  return (
    <div className={classes["App"]}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="Stores" element={<Stores/>}>              
              <Route path="Store/:id/:Store" element={<Store/>}/>              
              <Route path="Category/:Category" element={<Category/>}/>
              <Route path="*" element={<Navigate to="/Stores"/>}/>
            </Route>          
            <Route element={<ProtectedRoutes/>}>           
              <Route path="Profile" element={<Profile/>}/>
            </Route>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="*" element={<p>No existe - 404</p>} />
          </Route>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Login />}/>          
        </Routes>
      </Router>
    </div>
  )
}

export default App