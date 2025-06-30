function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("floating-petal");
  petal.textContent = "🌸";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  petal.style.opacity = Math.random();
  petal.style.fontSize = 10 + Math.random() * 20 + "px";

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 300);
