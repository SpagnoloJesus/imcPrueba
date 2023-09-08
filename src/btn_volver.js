const btnCerrar = document.querySelectorAll(`[data-cerrar="cerrar"]`);
const ventanaResultado = document.querySelector(".resultado__container");

btnCerrar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    ventanaResultado.classList.remove("resultado__container--active");
  });
});
