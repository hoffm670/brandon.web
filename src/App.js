import React from 'react';
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import './App.css';

function App() {
  return (
    [
    <Header></Header>,

    <div className="main">
      <span>Brandon Hoffmann</span>
      <span>Work in Progress</span>
    </div>,

    <Footer></Footer>
    ]
  );
}

export default App;
