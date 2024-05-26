import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Menu from './components/Menu';
import Banner from './components/Banner';
import About from './components/About';
import Contacts from './components/Contacts';
import Carrossel from './components/Carrossel';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Menu />
        <Banner />
        <About />
        <Carrossel />
        <Contacts />

    <footer className='footer'>
    © 2024 Elzilene Costa
    </footer>

      </div>
    </Router>
  );
};

export default App;
