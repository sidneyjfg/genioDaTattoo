import React, { useState } from 'react';
import InputSection from './components/InputSection';
import ShareButtons from './components/ShareButtons';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const handleResultUpdate = (newResult) => {
    setResult(newResult);
  };

  return (
    <div className="container">
      <Header/>
      <InputSection onResultUpdate={handleResultUpdate} />
      {result && <div id="resultado">{result}</div>}
      <ShareButtons />
    </div>
  );
};

export default App;
