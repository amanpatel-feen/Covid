import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Casecard from './Components/Casecard/CaseCard'
import Allcases from './Components/AllCases'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Allcases />
    </div>
  );
}

export default App;
