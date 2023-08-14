function playSound(event) {
  const key = document.querySelector(`div[data-key= "${event.keyCode}"`);
  const audio = document.querySelector(`audio[data-key= "${event.keyCode}"`);

  if (!audio) return;

  const root = document.querySelector(":root");
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  root.style.setProperty("--color", `rgb(${red}, ${green}, ${blue})`);

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeClass(event) {
  event.target.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeClass);
});

window.addEventListener("keydown", playSound);
