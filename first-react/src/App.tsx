import React from 'react';
import './App.css';
import TextField from './TextField';

const App: React.FC = () => {
  return ( 
    <div>
      <TextField name="neeraj" text={true} age={20} mark={{internal:10,external:10}} />
    </div>
  )}

export default App;
