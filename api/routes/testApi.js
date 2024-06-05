var express = require('express');
var router = express.Router();
var db = require('../config/db'); // Ajuste o caminho conforme necessário

router.get('/', function(req, res, next) {
    res.send('A API está funcionando corretamente!');
});

module.exports = router;
//const db = require('caminho do bd (usar .env)'); // ajuste o caminho conforme necessário

// Prêmios com probabilidades associadas
const premios = [
  { premio: "Tattoo Grátis", peso: 1 },
  { premio: "Chaveiro", peso: 5 },
  { premio: "Desconto 30%", peso: 10 },
  { premio: "Desconto 20%", peso: 15 },
  { premio: "Desconto 10%", peso: 20 },
  { premio: "Nada, infelizmente", peso: 49 }
];

// Função para escolher um prêmio baseado nos pesos
function escolherPremio() {
  let somaTotal = premios.reduce((acc, item) => acc + item.peso, 0);
  let r = Math.random() * somaTotal;
  let soma = 0;

  for (let i = 0; i < premios.length; i++) {
    soma += premios[i].peso;
    if (r <= soma) {
      return premios[i].premio;
    }
  }
}

// Endpoint para gerar prêmio
router.post('/gerarPremio', (req, res) => {
  const nome = req.body.nome || "Usuário Anônimo";
  const premio = escolherPremio();
  const timestamp = new Date();
  const registro = { nome, premio, timestamp };

  // Tentar inserir o log no banco de dados
  const query = 'INSERT INTO logs (username, award, log_date) VALUES (?, ?, ?)';
  db.query(query, [nome, premio, timestamp], (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(409).send('O prêmio já foi gerado para este usuário.');
      } else {
        console.error('Erro ao inserir log: ', err.stack);
        res.status(500).send('Erro no servidor');
      }
      return;
    }
    res.json(registro);
  });
});

// Endpoint para visualizar logs
router.get('/logs', (req, res) => {
  db.query('SELECT * FROM logs', (err, results) => {
    if (err) {
      res.status(500).send('Erro no servidor');
      return;
    }
    res.json(results);
  });
});

module.exports = router;
