// Gera um número aleatório entre 1 e 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Obtém o input e o parágrafo onde exibiremos a mensagem
var guessInput = document.getElementById('guessInput');
var message = document.getElementById('message');

// Função que verifica se o palpite do jogador está correto
function checkGuess() {
    // Obtém o palpite do jogador
    var guess = parseInt(guessInput.value);

    // Verifica se o palpite é um número válido
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Por favor, insira um número entre 1 e 100.';
    } else {
        // Verifica se o palpite está correto
        if (guess === randomNumber) {
            message.textContent = 'Parabéns! Você acertou!';
        } else if (guess < randomNumber) {
            message.textContent = 'Tente um número maior.';
        } else {
            message.textContent = 'Tente um número menor.';
        }
    }

    // Limpa o campo de input
    guessInput.value = '';
}
