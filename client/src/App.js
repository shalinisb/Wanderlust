import React from 'react';
import './App.css';
import {  Route } from 'react-router-dom';
import { Routes, Navigate } from "react-router-dom";
//import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Main from "./components/pages/Main";

function App() {

  const user = localStorage.getItem("token");   
  return (
    <>
    
    
    <Routes>
      {/* <Navbar /> */}
      <Route path="/" exact element={<Home/>} />
      
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/login" exact element={<Login />} />
      <Route path="/main" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </>  
  );
}

export default App;
