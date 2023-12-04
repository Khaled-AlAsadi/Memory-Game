var currentTotalPairs;
document.addEventListener('DOMContentLoaded', function () {
    const symbols = ['🌟', '🌈', '🍕', '🚀', '🎈', '🍦'];
    //, '🐳', '🎉', '🍦'
    const totalPairs = symbols.length * 2;
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let isFlipping = false;
    let points = 0;
    var pointsTracker = document.getElementById("points");
    var modal = document.getElementById("myModal");
    var returnButton = document.getElementById("returnButton")
    var nextButton = document.getElementById("nextButton")
    var maxTotalPairs = 20;

    currentTotalPairs = totalPairs;

    returnButton.onclick = function () {
        console.log("Testar")
    }
    pointsTracker.innerHTML = "Points:" + points;

    function checkMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.symbol').textContent;
        const symbol2 = card2.querySelector('.symbol').textContent;

        if (symbol1 === symbol2) {
            card1.removeEventListener('click', flipCard);
            card2.removeEventListener('click', flipCard);
            matchedPairs++;
            points = points + 20
            pointsTracker.innerHTML = "Points:" + points;

        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
        isFlipping = false;
    }

    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes;

        function tick() {
            var counter = document.getElementById("counter");
            var current_minutes = mins - 1;

            if (seconds > 0) {
                seconds--;
            } else {
                alert('Fail');
                return;
            }
            matchedPairs = symbols.length
            if (matchedPairs === symbols.length && seconds > 0) {
                modal.style.display = "block"
                return
            }

            counter.innerHTML = "Timer:" + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            setTimeout(tick, 1000);
        }

        tick();
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

    var shuffleArray = function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    var createBoard = function (totalPairs) {
        const gameBoard = document.getElementById('game-board');
        const symbolIndices = Array.from({ length: totalPairs }, (_, i) => i % symbols.length);
        const shuffledIndices = shuffleArray(symbolIndices);

        for (let i = 0; i < totalPairs; i++) {
            const card = document.createElement('div');
            card.classList.add('card');

            const symbol = document.createElement('div');
            symbol.classList.add('symbol');
            symbol.textContent = symbols[shuffledIndices[i]];

            card.appendChild(symbol);

            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
            cards.push(card);
        }

        countdown(1);
    };

    nextButton.onclick = function () {
        if (currentTotalPairs < maxTotalPairs) {
            currentTotalPairs += 2;

            resetBoard(currentTotalPairs);
            modal.style.display = 'hidden'
            countdown(1)
        } else {
            console.log("Reached maximum number of pairs");
        }
    }

    function resetBoard(totalPairs) {
        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = "";

        cards = [];
        flippedCards = [];
        matchedPairs = 0;
        isFlipping = false;

        // Update the points and display
        points = 0;
        pointsTracker.innerHTML = "Points:" + points;

        createBoard(totalPairs);
        countdown(1)
    }

    createBoard(totalPairs);
});
