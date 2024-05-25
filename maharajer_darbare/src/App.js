import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";



// import ReactDOM from 'react-dom';
// ReactDOM.render(
//   <React.StrictMode>
//     <Login />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />      
        <Route exact path="/Login" element={<Login />} />      
             
        
      </Routes>
    </Router>
  );
};

export default App;

