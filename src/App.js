import React from 'react'; 
import './App.css';
import DataBlock from './components/dataBlock/DataBlock';
import Header from './components/header/Header';
import Information from './components/information/Information';

function App() {

  
  return (
    <div>
       <Header />
       <Information />
       <DataBlock />
    </div>
  );
}

export default App;
