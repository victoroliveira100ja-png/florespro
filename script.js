// Night sky
const sky = document.getElementById('sky');
const starCount = window.innerWidth < 500 ? 40 : 70;
for (let i = 0; i < starCount; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 100 + '%';
  s.style.animationDelay = (Math.random() * 3.5) + 's';
  sky.appendChild(s);
}

// Envelope open -> reveal letter
const envelope = document.getElementById('envelope');
const scene = document.getElementById('scene');
const letter = document.getElementById('letter');
const letterBody = document.getElementById('letterBody');
let opened = false;

function staggerParagraphs() {
  const paragraphs = letterBody.querySelectorAll('p');
  paragraphs.forEach((p, i) => {
    p.style.transitionDelay = (i * 0.35) + 's';
  });
  requestAnimationFrame(() => {
    letterBody.classList.add('revealed');
  });
}

function openEnvelope() {
  if (opened) return;
  opened = true;
  envelope.classList.add('open');
  setTimeout(() => {
    scene.classList.add('hidden');
    letter.classList.add('visible');
    staggerParagraphs();
  }, 750);
}

envelope.addEventListener('click', openEnvelope);
envelope.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openEnvelope();
  }
});

// Heart burst on "our joke" button
const jokeBtn = document.getElementById('jokeBtn');
const heartsBurst = document.getElementById('heartsBurst');

jokeBtn.addEventListener('click', () => {
  const rect = jokeBtn.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  for (let i = 0; i < 14; i++) {
    const h = document.createElement('div');
    h.className = 'burst-heart';
    h.textContent = '❤';
    const spread = (Math.random() - 0.5) * 160;
    h.style.left = (originX + spread) + 'px';
    h.style.setProperty('--rot', (Math.random() * 60 - 30) + 'deg');
    h.style.animationDelay = (Math.random() * 0.3) + 's';
    h.style.fontSize = (1 + Math.random() * 0.8) + 'rem';
    heartsBurst.appendChild(h);
    setTimeout(() => h.remove(), 3200);
  }
});
