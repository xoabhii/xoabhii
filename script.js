let noClickCount = 0;
let maxDodges = 3;
let heartContainer = document.querySelector(".floating-hearts");

document.addEventListener("DOMContentLoaded", function () {
    generateHearts();
});

function generateHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}

function dodgeNo() {
    let noBtn = document.getElementById("noBtn");
    if (noClickCount < maxDodges) {
        let randomX = Math.random() * 40 - 20; 
        let randomY = Math.random() * 40 - 20;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        noClickCount++;
    } else {
        resetNoButton();
    }
}

function handleNo() {
    if (noClickCount >= maxDodges) {
        alert("Try again! 😜");
        resetNoButton();
    } else {
        dodgeNo();
    }
}

function resetNoButton() {
    let noBtn = document.getElementById("noBtn");
    noBtn.style.transform = "translate(0, 0)";
    noClickCount = 0;
}

function nextQuestion(current) {
    document.getElementById(`q${current}`).classList.remove("active");
    document.getElementById(`q${current + 1}`).classList.add("active");
}

function finalMessage() {
    document.getElementById("q5").classList.remove("active");
    document.getElementById("final").classList.add("active");

    let endText = document.createElement("h2");
    endText.innerHTML = "You're my forever Valentine! 💋💕";
    endText.classList.add("final-text");
    document.getElementById("final").appendChild(endText);
}
function handleNoOther() {
        alert("Try again! 😜");
}