import React from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
