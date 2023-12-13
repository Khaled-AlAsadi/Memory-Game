document.addEventListener("DOMContentLoaded", function () {
  const allSymbolArrays = [
    ["🌟", "🌈", "🍕", "🚀", "🎈", "🍦"],
    ["🌟", "🌈", "🍕", "🚀", "🎈", "🍦", "🌺"],
    ["🌟", "🌈", "🍕", "🚀", "🎈", "🍦", "🌺", "🎉"],
    ["🌟", "🌈", "🍕", "🚀", "🎈", "🍦", "🌺", "🎉", "⭐"],
    ["🌟", "🌈", "🍕", "🚀", "🎈", "🍦", "🌺", "🎉", "⭐", "🔥"],
  ];

  let currentTotalPairs;
  let cards = [];
  let flippedCards = [];
  let matchedPairs = 0;
  let isFlipping = false;
  let points = 0;
  var pointsTracker = document.getElementById("points");
  var modal = document.getElementById("myModal");
  var returnButton = document.getElementById("returnButton");
  var nextButton = document.getElementById("nextButton");
  var maxTotalPairs = 20;
  var currentLevel = 1;
  var maxLevels = 5;
  var levelElement = document.getElementById("level");
  var rubric = document.getElementById("rubric");
  var modalText = document.getElementById("modalText");

  levelElement.innerHTML = "Level: " + currentLevel;

  currentTotalPairs = allSymbolArrays[currentLevel - 1].length * 2;

  pointsTracker.innerHTML = "Points:" + points;

  function checkMatch() {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.querySelector(".symbol").textContent;
    const symbol2 = card2.querySelector(".symbol").textContent;

    if (symbol1 === symbol2) {
      card1.removeEventListener("click", flipCard);
      card2.removeEventListener("click", flipCard);
      matchedPairs++;
      points = points + 20;
      pointsTracker.innerHTML = "Points:" + points;
    } else {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
    }

    flippedCards = [];
    isFlipping = false;
  }

  function updateLevelDisplay() {
    levelElement.innerHTML = "Level: " + currentLevel;
  }

  function increaseLevel() {
    currentLevel++;
    updateLevelDisplay();
  }

  function countdown(minutes) {
    let seconds = 60;
    let mins = minutes;

    function tick() {
      var counter = document.getElementById("counter");
      var current_minutes = mins - 1;
      if (seconds > 0) {
        // seconds--;
      } else {
        rubric.innerHTML = "Fail";
        nextButton.style.display = "none";
        modalText.innerHTML =
          "You failed level " + currentLevel + " with " + points + " points";
        modal.style.display = "block";
        return;
      }

      if (
        matchedPairs === currentTotalPairs / 2 &&
        seconds > 0 &&
        !isFlipping
      ) {
        modal.style.display = "block";
        rubric.innerHTML = "congratulations";
        modalText.innerHTML =
          "You completed level " +
          currentLevel +
          " with " +
          points +
          " points" +
          " You get 20 points as a bonus for completing the level";
        points = points + 20;
        return;
      }

      counter.innerHTML =
        "Timer:" +
        current_minutes.toString() +
        ":" +
        (seconds < 10 ? "0" : "") +
        String(seconds);
      setTimeout(tick, 1000);
    }

    tick();
  }

  function flipCard() {
    if (
      !isFlipping &&
      flippedCards.length < 2 &&
      !this.classList.contains("flipped")
    ) {
      this.classList.add("flipped");
      flippedCards.push(this);

      if (flippedCards.length === 2) {
        isFlipping = true;
        setTimeout(checkMatch, 1000);
      }
    }
  }

  const shuffleArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const createBoard = function (totalPairs) {
    const gameBoard = document.getElementById("game-board");
    const symbolIndices = Array.from(
      { length: totalPairs },
      (_, i) => i % allSymbolArrays[currentLevel - 1].length
    );
    const shuffledIndices = shuffleArray(symbolIndices);

    for (let i = 0; i < totalPairs; i++) {
      const card = document.createElement("div");
      card.classList.add("card");

      const symbol = document.createElement("div");
      symbol.classList.add("symbol");
      symbol.textContent =
        allSymbolArrays[currentLevel - 1][shuffledIndices[i]];

      card.appendChild(symbol);

      card.addEventListener("click", flipCard);
      gameBoard.appendChild(card);
      cards.push(card);
    }

    countdown(1);
  };

  nextButton.onclick = function () {
    if (currentTotalPairs < maxTotalPairs) {
      currentTotalPairs += 2;
      increaseLevel();
      resetBoard(currentTotalPairs);
    } else {
      console.log("Reached maximum number of pairs");
    }
  };

  function resetBoard(totalPairs) {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";

    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    isFlipping = false;
    modal.style.display = "none";
    if (currentLevel === maxLevels) {
      nextButton.style.display = "none";
    }

    pointsTracker.innerHTML = "Points:" + points;

    // Get the original symbols that were used in the game
    const originalSymbols = allSymbolArrays[currentLevel - 1].slice(
      0,
      totalPairs / 2
    );

    // Shuffle the original symbols
    const shuffledSymbols = shuffleArray([
      ...originalSymbols,
      ...originalSymbols,
    ]);

    // Shuffle the symbols for the new cards
    const mixedSymbols = shuffleArray(shuffledSymbols);

    for (let i = 0; i < totalPairs; i++) {
      const card = document.createElement("div");
      card.classList.add("card");

      const symbol = document.createElement("div");
      symbol.classList.add("symbol");

      // Assign a symbol to the card
      symbol.textContent = mixedSymbols[i];

      card.appendChild(symbol);

      card.addEventListener("click", flipCard);
      gameBoard.appendChild(card);
      cards.push(card);
    }

    countdown(1);
  }

  createBoard(currentTotalPairs);
});
