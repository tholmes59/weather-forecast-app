import React from 'react';
import './App.css';
import PageContainer from './components/PageContainer'

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1><br/>
      <div class="x1">
        <div class="cloud"></div>
      </div>

      <div class="x2">
        <div class="cloud"></div>
      </div>
      
      <PageContainer />
    </div>
  );
}

export default App;
