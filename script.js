const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const heartsContainer = document.querySelector(".hearts");

/* No button runs away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* Yes button */
yesBtn.addEventListener("click", () => {
  message.textContent = "YAY!! 💘🥰 I knew you'd say yes, Bubee!";
  
  startHearts(); // Hearts animation stays the same

  // Start YouTube music
  const player = document.getElementById("musicPlayer");
  player.src += "&autoplay=1"; // triggers music after click
});


/* Music (plays only after click to satisfy browser rules) */
  document.getElementById("musicPlayer").src += "&autoplay=1";
.catch(() => {});
}

/* Hearts animation */
function startHearts() {
  setInterval(createHeart, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
