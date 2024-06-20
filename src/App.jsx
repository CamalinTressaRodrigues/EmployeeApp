import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Employeeform from './components/Employeeform';
import Main from './components/Main';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main><Home /></Main>}></Route>
        <Route path="/form" element={<Main><Employeeform /></Main> }></Route>
      </Routes>
    </>
  );
}

export default App;
