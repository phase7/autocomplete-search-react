import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './AutoCompleteText.css';
import AutoCompleteText from './component/AutoCompleteText';
import countries from './countries';

function App() {
  return (
    <div className="App">
    <h3>Countries</h3>
      <AutoCompleteText items={countries} />      
    </div>
  );
}

export default App;
