const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const time = new Date(`September 01 ${currentYear} 00:00:00`);


// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = time - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);



const audio = document.querySelector('#audio');

function playSong() {
  audio.play();
}
// to play the audio 
window.addEventListener('click', playSong);
window.addEventListener('scroll', playSong);
window.addEventListener('mouseout', playSong);
window.addEventListener('mousedown', playSong);
window.addEventListener('mousemove', playSong);
window.addEventListener('mouseup', playSong);
window.addEventListener('mouseleave', playSong);
window.addEventListener('touchstart', playSong);
window.addEventListener('touchmove', playSong);
window.addEventListener('touchend', playSong);