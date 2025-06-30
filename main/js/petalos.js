let styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);

function createUniquePetal() {
  const petal = document.createElement("div");
  petal.classList.add("real-petal");

  // Posición horizontal inicial aleatoria
  const left = Math.random() * 100;
  petal.style.left = left + "vw";

  // Escala aleatoria
  const scale = 0.6 + Math.random() * 0.6;
  petal.style.transform = `scale(${scale})`;

  // Opacidad aleatoria
  petal.style.opacity = 0.6 + Math.random() * 0.4;

  // Duración aleatoria
  const duration = 6 + Math.random() * 4;
  petal.style.animationDuration = duration + "s";

  // Generar nombre único para animación
  const animName = `fall-petal-${Date.now()}-${Math.floor(Math.random()*1000)}`;

  // Valores aleatorios para la animación
  const x1 = Math.floor(Math.random() * 30) - 15;  // desplazamiento X en px (entre -15 y +15)
  const x2 = Math.floor(Math.random() * 30) - 15;
  const r1 = Math.floor(Math.random() * 360);      // rotación en grados
  const r2 = Math.floor(Math.random() * 360);
  const r3 = Math.floor(Math.random() * 360);

  // Crear animación CSS única para este pétalo
  const keyframes = `
    @keyframes ${animName} {
      0% {
        transform: translateX(0) rotate(0deg) scale(${scale});
        opacity: 0.9;
      }
      25% {
        transform: translateX(${x1}px) rotate(${r1}deg) scale(${scale});
        opacity: 0.8;
      }
      50% {
        transform: translateX(${x2}px) rotate(${r2}deg) scale(${scale});
        opacity: 0.6;
      }
      75% {
        transform: translateX(${x1}px) rotate(${r3}deg) scale(${scale});
        opacity: 0.4;
      }
      100% {
        transform: translateY(100vh) rotate(${r3 + 100}deg) scale(${scale});
        opacity: 0;
      }
    }
  `;

  styleSheet.sheet.insertRule(keyframes, styleSheet.sheet.cssRules.length);

  petal.style.animationName = animName;
  petal.style.animationTimingFunction = 'linear';
  petal.style.animationFillMode = 'forwards';

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

setInterval(createUniquePetal, 250);
