import classes from'./App.module.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import Login from './views/Login/Login';

import {ProtectedRoutes} from './core/AuthRoleUser';

function App() {  

  return (
    <div className={classes["App"]}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout Page="Home"/>}/>
          <Route path="/Stores" element={<MainLayout Page="Stores"/>}>
            <Route path=":Store" element={<MainLayout Page="Stores"/>}>
              
            </Route>
          </Route>
          <Route element={<ProtectedRoutes/>}>           
            <Route path="/Profile" element={<MainLayout Page="Profile"/>}/>
          </Route>
          <Route path="/Contact" element={<MainLayout Page="Contact"/>}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Login />}/>
          <Route path="*" element={<p>No existe - 404</p>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App