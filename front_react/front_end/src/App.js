
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';

function App() {


  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign" element={<Signup/>} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
