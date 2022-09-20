import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <div className="outer">
      <div className="inner">
          <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
