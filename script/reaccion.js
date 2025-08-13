// Estado inicial de cada contador
let counters = {
  heart: 0,
  like: 0,
  dislike: 0,
  share: 0,

};

// Estado de activación por usuario (true/false)
let activeState = {
  heart: false,
  like: false,
  dislike: false,
  share: false,

};

// Evento para todos los iconos
document.querySelectorAll(".icon-btn").forEach(icon => {
  icon.addEventListener("click", function () {
    let type = this.dataset.type; // Tipo de acción (heart, like, etc.)
    let badge = this.nextElementSibling; // Badge asociado

    // Alternar estado
    activeState[type] = !activeState[type];

    // Si está activo → sumar, si no → restar
    if (activeState[type]) {
      counters[type]++;
      this.classList.remove("text-muted");
      this.classList.add(type === "heart" ? "text-danger" : "text-primary");
    } else {
      counters[type] = Math.max(0, counters[type] - 1);
      this.classList.remove("text-danger", "text-primary");
      this.classList.add("text-muted");
    }

    // Actualizar badge
    badge.textContent = counters[type];
  });
});