import React from 'react'
import './App.css';
import SearchZipCode from "./searchZipCode"


function App() {
  return (
    <div className="App">
    <div className="container">
   <h1 className="title">Zip Code Lookup</h1>
   <SearchZipCode />
 </div>
</div>
  );
}

export default App;
