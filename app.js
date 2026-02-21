const logoEl = document.getElementById('logoText');
const logoTitle = document.querySelector('.logo');

const WORD = 'Bubble';
const CHAR_DELAY = 320;

function typewriterLogo() {
  if (!logoEl || !logoTitle) return;
  let i = 0;
  logoEl.textContent = '';

  function type() {
    if (i < WORD.length) {
      logoEl.textContent += WORD[i];
      i++;
      setTimeout(type, CHAR_DELAY);
    } else {
      logoTitle.classList.add('logo-done');
    }
  }
  setTimeout(type, 800);
}

typewriterLogo();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
