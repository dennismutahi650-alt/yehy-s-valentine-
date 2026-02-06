const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const mainGif = document.getElementById("main-gif");

// 1. The "No" button runs away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. What happens when they click "Yes"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay! See you on the 14th! 😘😘 I Love you Njeri😘";
    mainGif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVqYzczdnA1NDBrcG8waXdnenFwMTdoczZsZGU4Nno4OTBzYW53NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IpeXBG7uNM6XJKUVcg/giphy.webp";
    noBtn.style.display = "none"; // Hide the No button
});
