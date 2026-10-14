import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FetchProducts from './components/FetchProducts.jsx';
import Login from './Login.jsx';          
import Registration from './Registration.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <BrowserRouter>
      {/* Simple text links */}
      <div style={{ padding: "15px" }}>
        <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
        <Link to="/register" style={{ marginRight: "15px" }}>Register</Link>
      </div>

      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}