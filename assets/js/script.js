document.addEventListener('DOMContentLoaded', function () {
    const symbols = ['🌟', '🌈', '🍕', '🚀', '🎈', '🐳', '🎉', '🍦'];
    const totalPairs = symbols.length * 2;
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let isFlipping = false;
    let points = 0;

    function createBoard() {
        const gameBoard = document.getElementById('game-board');
        for (let i = 0; i < totalPairs; i++) {
            const card = document.createElement('div');
            card.classList.add('card');

            const symbol = document.createElement('div');
            symbol.classList.add('symbol');
            symbol.textContent = symbols[i % symbols.length];

            card.appendChild(symbol);

            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
            cards.push(card.cloneNode(true));
        }
        cards = shuffle(cards);
        countdown(1)
    }

    function flipCard() {
        if (!isFlipping && flippedCards.length < 2 && !this.classList.contains('flipped')) {
            this.classList.add('flipped');
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                isFlipping = true;
                setTimeout(checkMatch, 1000);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.symbol').textContent;
        const symbol2 = card2.querySelector('.symbol').textContent;

        if (symbol1 === symbol2) {
            card1.removeEventListener('click', flipCard);
            card2.removeEventListener('click', flipCard);
            points = points + 20
            matchedPairs++;

            if (matchedPairs === symbols.length) {
                alert('Congratulations! You matched all pairs!');
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
        isFlipping = false;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes

        function tick() {
            var counter = document.getElementById("counter");
            var current_minutes = mins - 1
            //seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    countdown(mins - 1);
                }
            }
        }
        tick();
    }

    createBoard();
});