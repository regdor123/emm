const areaJuego = document.getElementById('area-juego');
const puntajeEl = document.getElementById('puntaje');
const botonReiniciar = document.getElementById('boton-reiniciar');

let puntaje = 0;
let circuloActual = null;
let intervaloJuego = null;

function crearCirculo() {
  if (circuloActual) {
    circuloActual.remove();
  }
  const circulo = document.createElement('div');
  circulo.classList.add('circulo');

  const maxX = areaJuego.clientWidth - 60;
  const maxY = areaJuego.clientHeight - 60;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  circulo.style.left = x + 'px';
  circulo.style.top = y + 'px';

  circulo.addEventListener('click', () => {
    puntaje++;
    puntajeEl.textContent = puntaje;
    crearCirculo();
  });

  areaJuego.appendChild(circulo);
  circuloActual = circulo;
}

function iniciarJuego() {
  puntaje = 0;
  puntajeEl.textContent = puntaje;
  crearCirculo();

  if (intervaloJuego) clearInterval(intervaloJuego);
  intervaloJuego = setInterval(() => {
    crearCirculo();
  }, 1500);
}

botonReiniciar.addEventListener('click', iniciarJuego);

iniciarJuego();
