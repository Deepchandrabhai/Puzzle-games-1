const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const images = [
  { letter: "A", img: "🍎" },
  { letter: "B", img: "🍌" },
  { letter: "C", img: "🐈" },
  { letter: "D", img: "🐕" },
  { letter: "E", img: "🥚" },
  { letter: "F", img: "🐟" },
  { letter: "G", img: "🍇" },
  { letter: "H", img: "🏠" },
  { letter: "I", img: "🍦" },
  { letter: "J", img: "🧃" },
  { letter: "K", img: "🦘" },
  { letter: "L", img: "🍋" },
  { letter: "M", img: "🐒" },
  { letter: "N", img: "🥜" },
  { letter: "O", img: "🍊" },
  { letter: "P", img: "🍍" },
  { letter: "Q", img: "👑" },
  { letter: "R", img: "🌈" },
  { letter: "S", img: "⭐" },
  { letter: "T", img: "🌴" },
  { letter: "U", img: "☂️" },
  { letter: "V", img: "🌋" },
  { letter: "W", img: "🌊" },
  { letter: "X", img: "❌" },
  { letter: "Y", img: "🍋" },
  { letter: "Z", img: "🦓" },
];

let selectedLetter = null;
let matchedPairs = 0;

function setupGame() {
  const lettersContainer = document.getElementById("letters");
  const imagesContainer = document.getElementById("images");

  alphabet.forEach((letter) => {
    const letterDiv = document.createElement("div");
    letterDiv.className = "letter";
    letterDiv.textContent = letter;
    letterDiv.onclick = () => selectLetter(letter);
    lettersContainer.appendChild(letterDiv);
  });

  images.sort(() => Math.random() - 0.5).forEach(({ letter, img }) => {
    const imageDiv = document.createElement("div");
    imageDiv.className = "image";
    imageDiv.textContent = img;
    imageDiv.onclick = () => matchImage(letter);
    imagesContainer.appendChild(imageDiv);
  });
}

function selectLetter(letter) {
  selectedLetter = letter;
}

function matchImage(letter) {
  if (!selectedLetter) return;

  const lettersDiv = document.querySelectorAll(".letter");
  const imagesDiv = document.querySelectorAll(".image");

  if (selectedLetter === letter) {
    matchedPairs++;
    [...lettersDiv].find((div) => div.textContent === letter).classList.add("matched");
    [...imagesDiv].find((div) => div.textContent === images.find((img) => img.letter === letter).img).classList.add("matched");

    if (matchedPairs === alphabet.length) {
      showCongratulations();
    }
  }

  selectedLetter = null;
}

function showCongratulations() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Congratulations! 🎉 You've completed the game!";
  resultDiv.style.display = "block";
  playSound();
}

function playSound() {
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.play();
}

document.addEventListener("DOMContentLoaded", setupGame);
