import './App.css';
import Main from './page/Main';
import Photo from './components/Photo';
import Data from './components/Data';
import Sign_in from './components/Sign_in';
import Sign_up from './components/Sign_up';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Photo" element={<Photo />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/Sign_in" element={<Sign_in />} />
          <Route path="/Sign_up" element={<Sign_up/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;