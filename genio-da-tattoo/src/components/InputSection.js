import React from 'react';
import './css/InputSection.css';

function InputSection({ onResultUpdate }) {
  const [userName, setUserName] = useState('');

  const handleButtonClick = () => {
    // Simulate result generation (replace with actual logic)
    const result = `Parabéns, ${userName}! Seu prêmio é...`;
    setResult(result);
    onResultUpdate(result); // Pass result to App.js for conditional rendering
  };

  return (
    <>
      <input type="text" id="nomeInput" placeholder="Digite seu @ do instagram" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button id="buttonPremio" onClick={handleButtonClick}>Qual o meu prêmio?</button>
    </>
  );
}

export default InputSection;
