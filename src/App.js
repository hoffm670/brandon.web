import React from 'react';
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Badge } from './components/badge/badge'
import './App.css';
import { IconDisplay } from './components/IconDisplay/IconDisplay';
import { icons } from './data'

function App() {
  return (
    [
    <Header key={"header"}/>,

    <div key={"main"} className="main">
      <span>Brandon Hoffmann</span>
      <span>Work in Progress</span>
      <IconDisplay icons={icons} />
    </div>,

    <Footer key={"footer"}/>
    ]
  );
}

export default App;
