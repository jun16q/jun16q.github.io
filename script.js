const img = document.getElementById("mainImage");
const audio = document.getElementById("audioPlayer");

img.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
});
