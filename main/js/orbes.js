const NUM_ORBS = 100; // cantidad de orbes
const container = document.getElementById('background-orbs');
const orbs = [];

const vw = window.innerWidth;
const vh = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

for(let i = 0; i < NUM_ORBS; i++) {
  const orb = document.createElement('div');
  orb.classList.add('orb');
  const size = random(4, 12); 
  orb.style.width = size + 'px';
  orb.style.height = size + 'px';
  orb.style.opacity = random(0.05, 0.15);
  orb.style.left = random(0, vw) + 'px';
  orb.style.top = random(0, vh) + 'px';
  container.appendChild(orb);

  orbs.push({
    el: orb,
    x: parseFloat(orb.style.left),
    y: parseFloat(orb.style.top),
    size: size,
    vx: random(-0.1, 0.1),
    vy: random(-0.1, 0.1),
  });
}

function animateOrbs() {
  orbs.forEach(orb => {
    orb.x += orb.vx;
    orb.y += orb.vy;

    if (orb.x < 0 || orb.x > vw - orb.size) orb.vx *= -1;
    if (orb.y < 0 || orb.y > vh - orb.size) orb.vy *= -1;

    orb.el.style.transform = `translate(${orb.x}px, ${orb.y}px)`;
  });

  requestAnimationFrame(animateOrbs);
}

animateOrbs();

window.addEventListener('resize', () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  orbs.forEach(orb => {
    if(orb.x > vw - orb.size) orb.x = vw - orb.size;
    if(orb.y > vh - orb.size) orb.y = vh - orb.size;
  });
});
