function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    const diceDiv = document.getElementById('dice')

    const diceImage = diceDiv.querySelector('img')
    diceImage.src = 'img/' + randomNumber + '.png';
}

document.getElementById('dice').addEventListener('click', rollDice);