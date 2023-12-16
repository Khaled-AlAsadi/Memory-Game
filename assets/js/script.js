/* jshint esversion: 8 */
/*jslint browser:true */
/*global document: false */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";
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
  const pointsTracker = document.getElementById("points");
  const modal = document.getElementById("myModal");
  const nextButton = document.getElementById("nextButton");
  const maxTotalPairs = 20;
  let currentLevel = 1;
  const maxLevels = 5;
  const levelElement = document.getElementById("level");
  const rubric = document.getElementById("rubric");
  const modalText = document.getElementById("modalText");
  const counter = document.getElementById("counter");
  const gameBoard = document.getElementById("game-board");

  levelElement.innerHTML = "Level: " + currentLevel;

  currentTotalPairs = allSymbolArrays[currentLevel - 1].length * 2;

  pointsTracker.innerHTML = "Points:" + points;

  /**
   * Function to check if two flipped cards match.
   */
  const checkMatch = function () {
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
  };

  /**
   * Function to handle the card flipping.
   */
  const flipCard = function () {
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
  };

  /**
   * Function to update the level display.
   */
  const updateLevelDisplay = function () {
    levelElement.innerHTML = "Level: " + currentLevel;
  };

  /**
   * Function to increase the current game level.
   */
  const increaseLevel = function () {
    currentLevel = currentLevel + 1;
    updateLevelDisplay();
  };
  /**
   * Function to start a countdown timer for the game.
   * @param {number} minutes - The duration of the countdown in minutes.
   */
  const countdown = function (minutes) {
    let seconds = 60;
    let mins = minutes;

    function tick() {
      const currentMinutes = mins - 1;
      if (seconds > 0) {
        seconds = seconds - 1;
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
          " You got 20 points as a bonus for completing level " +
          currentLevel;
        points = points + 20;
        return;
      }
      if (currentLevel === maxLevels) {
        nextButton.style.display = "none";
        rubric.innerHTML = "congratulations";
        modalText.innerHTML =
          "You completed the game with " +
          points +
          " points" +
          " You got 20 points as a bonus for completing level " +
          currentLevel;
      }

      counter.innerHTML =
        "Timer:" +
        currentMinutes.toString() +
        ":" +
        (seconds < 10 ? "0" : "") +
        String(seconds);
      setTimeout(tick, 1000);
    }

    tick();
  };

  /**
   * Function to shuffle an array.
   * @param {Array} array - The array to be shuffled.
   * @returns {Array} - The shuffled array.
   */
  const shuffleArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  /**
   * Function to create the game board with a specified number of card pairs.
   * @param {number} totalPairs - The total number of card pairs in the game.
   */
  const createBoard = function (totalPairs) {
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

  /**
   * Event handler for the "Next Level" button.
   */
  nextButton.onclick = function () {
    if (currentTotalPairs < maxTotalPairs) {
      currentTotalPairs += 2;
      increaseLevel();
      resetBoard(currentTotalPairs);
    }
  };

  /**
   * Function to reset the game board with a specified number of card pairs.
   * @param {number} totalPairs - The total number of card pairs in the game.
   */
  const resetBoard = function (totalPairs) {
    gameBoard.innerHTML = "";

    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    isFlipping = false;
    modal.style.display = "none";
    if (currentLevel === maxLevels) {
      nextButton.style.display = "none";
      rubric.innerHTML = "congratulations";
      modalText.innerHTML =
        "You completed the game with " +
        points +
        " points" +
        " You got 20 points as a bonus for completing level " +
        currentLevel;
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
  };

  createBoard(currentTotalPairs);
});
