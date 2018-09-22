import React, { Component } from 'react';
import Intro from './components/Intro';
import Work from './components/Work';
import Academic from './components/Academic'
import Statement from './components/Statement'


import ScrollableAnchor from 'react-scrollable-anchor'
// import Academic from './components/Academic';
import Projects from './components/Projects';


import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       
      <div className="intro">
            <Intro/>
          </div>
          <div className="work"> 
          <Projects/>
           <Work/>
         </div>
          <div className="academic">
          <Academic/>
        </div>
        <Statement/>
      </div>
      
    );
  }
}


  
export default App;
