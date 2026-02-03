// === OPTIONAL: You can update these with your image paths ===
const SANS_CLOSED = 'download.png'; // Sans ojos cerrados
const SANS_POWER = 'images.jpg';    // Sans ojos abiertos (hover)

const sansBox = document.getElementById('sans-box');
const sansImg = document.getElementById('sans-img');
const notification = document.getElementById('notification');
let movementTimer = null;
const NOTIFY_AFTER = 20000; // 20 segundos
let notified = false;

// Hover effect: cambio y animación
sansBox.addEventListener('mouseenter', () => {
  sansBox.classList.add('hovered');
  sansImg.src = SANS_POWER;
});

sansBox.addEventListener('mouseleave', () => {
  sansBox.classList.remove('hovered');
  sansImg.src = SANS_CLOSED;
});

function showNotification() {
  notification.classList.add('visible');
  notified = true;
}

function resetMovementTimer() {
  if (notified) return;
  clearTimeout(movementTimer);
  movementTimer = setTimeout(showNotification, NOTIFY_AFTER);
}

['mousemove', 'mousedown', 'keydown', 'touchstart'].forEach(evt => {
  window.addEventListener(evt, resetMovementTimer);
});

resetMovementTimer();
