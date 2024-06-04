import React, { useState } from 'react';
import SharedButtons from './SharedButtons'
import './css/InputSection.css';


//Este script é que roda do lado do cliente (Front-End) e as requisiões irão bater no Back-end


function PrizeSection() {
  const [userName, setUserName] = useState('');
  const [result, setResult] = useState('');
  const [historico, setHistorico] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  const obterHistoricoData = async (nome) => {
    const response = await fetch(`${apiUrl}/logs`);
    const logs = await response.json();
    const logsDoUsuario = logs.filter(log => log.username === nome);
    const timestamps = logsDoUsuario.map(log => new Date(log.log_date).getTime());
    return timestamps;
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/resultado`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }

      const data = await response.json();
      const premio = `Parabéns, ${userName}! Seu prêmio é: ${data.premio}`;
      setResult(premio);
      rodarRoleta(data.premio);
    } catch (error) {
      console.error('Erro ao buscar o resultado:', error);
    }
  };

  const compartilharWhatsApp = async () => {
    const historicoData = await obterHistoricoData(userName);
    if (!historicoData || historicoData.length === 0) {
      alert('Histórico de prêmios não encontrado para este usuário.');
      return;
    }

    const timestampMaisAntigo = Math.min(...historicoData);
    const response = await fetch(`${apiUrl}/logs`);
    const logs = await response.json();
    const premioMaisAntigo = logs.find(log => new Date(log.log_date).getTime() === timestampMaisAntigo).award;

    const mensagem = `Nome: ${userName}\nPrêmio Resgatado: ${premioMaisAntigo}`;
    const url = `https://api.whatsapp.com/send?phone=553193283063&text=${encodeURIComponent(mensagem)}`;
    window.open(url);
  };

  const compartilharInstagram = async () => {
    const historicoData = await obterHistoricoData(userName);
    if (!historicoData || historicoData.length === 0) {
      alert('Histórico de prêmios não encontrado para este usuário.');
      return;
    }

    const timestampMaisAntigo = Math.min(...historicoData);
    const response = await fetch(`${apiUrl}/logs`);
    const logs = await response.json();
    const premioMaisAntigo = logs.find(log => new Date(log.log_date).getTime() === timestampMaisAntigo).award;

    const mensagem = `Nome: ${userName}\nPrêmio Resgatado: ${premioMaisAntigo}`;
    const url = `https://www.instagram.com/direct/t/17845908371951380?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
  };

  const rodarRoleta = (premioGanho) => {
    const resultadoDiv = document.getElementById('resultado');
    const premios = ["Tattoo Grátis", "Chaveiro", "Desconto 30%", "Desconto 20%", "Desconto 10%", "Nada, infelizmente"];
    let index = 0;
    let tempoDecorrido = 0;

    const animationInterval = setInterval(() => {
      resultadoDiv.textContent = premios[index]; // Exibe o prêmio atual na roleta
      index = (index + 1) % premios.length; // Avança para o próximo prêmio
      tempoDecorrido += 100; // Incrementa o tempo decorrido

      // Se o tempo decorrido for maior ou igual a 5000 ms (5 segundos), para a animação
      if (tempoDecorrido >= 5000) {
        clearInterval(animationInterval);
        resultadoDiv.textContent = `Seu prêmio é: ${premioGanho}`; // Exibe o prêmio ganho
      }
    }, 100); // Intervalo de tempo para atualizar a roleta (em milissegundos)
  };

  return (
    <>
      <input
        type="text"
        id="nomeInput"
        placeholder="Digite seu @ do instagram"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button id="buttonPremio" onClick={handleButtonClick}>Qual o meu prêmio?</button>
      <div id="resultado">{result}</div>
      <div id="sharedButtons">
      <SharedButtons/>
      </div>
    </>
  );
}

export default PrizeSection;
