import React from 'react';
import './App.css';
import PageContainer from './components/PageContainer'

function App() {
  return (
    <div className="App">
      <h1>What's the Weather?</h1><br/>
      <div className="x1">
        <div className="cloud"></div>
      </div>

      <div className="x2">
        <div className="cloud"></div>
      </div>
      
      <PageContainer />
    </div>
  );
}

export default App;
