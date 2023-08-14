function playSound(event) {
  const key = document.querySelector(`div[data-key= "${event.keyCode}"`);
  const audio = document.querySelector(`audio[data-key= "${event.keyCode}"`);

  if (!audio) return;

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
