document.getElementById('secretsantaform').addEventListener('submit', function(e){
    e.preventDefault();
    let participantsInput = document.getElementById('participants').value.trim();
    let participantsArray = participantsInput.split(',').map(p=> p.trim());
    let santas = shuffle(participantsArray);
    let receivers = shuffle(participantsArray.slice());
    while (hasSelfGifting(santas, receivers)) {
        receivers = shuffle(participantsArray.slice());
    }
    let result = '';
    for (let i = 0; i < santas.length; i++){
        result += `${santas[i]} gives a gift to ${receivers[i]}<br>`;
    }
    document.getElementById('output').innerHTML = result;
});

function hasSelfGifting(santas, receivers) {
    for (let i = 0; i < santas.length; i++) {
        if (santas[i] === receivers[i]) {
            return true;
        }
    }
    return false;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
