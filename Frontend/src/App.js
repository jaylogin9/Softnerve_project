import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./components/home";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import Register from "./components/register/Patient.register";
import Display from "./components/display/Display"
import Update from "./components/edit/Update";
import Error from "./components/Error/ErrorPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/display" element={<Display />}/>
      <Route path="/update/:id" element={<Update />}/>
      <Route path="*" element={<Error />}/>
      </Routes>
    </div>
     </BrowserRouter>
    
  );
}

export default App;
