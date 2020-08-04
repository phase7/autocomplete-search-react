import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './AutoCompleteText.css';
import AutoCompleteText from './component/AutoCompleteText';
import countries from './countries';
import nba from './nba';

function App() {
  return (
    <div className="App">
      <h3>Countries</h3>
      <AutoCompleteText items={countries} />      
      <h3>NBA MVPs</h3>
      <AutoCompleteText items={nba} />      
    </div>
  );
}

export default App;
