import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Middle from '../src/Middle/Middle';
import Next from '../src/Next/Next';
import Cardd from '../src/Cardd/Cardd';
import Footer from '../src/Footer/Footer';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div >
      <Header></Header>
     <Middle></Middle>
     <Next></Next>
     <Cardd></Cardd>
     <Footer></Footer>




    </div>
  );
}

export default App;
