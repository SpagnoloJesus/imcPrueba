export const menBox = document.querySelector(`[data-genero="hombre"]`);
export const girlBox = document.querySelector("#girlSelect");
const $genBox = document.getElementById("gen");

export let generoSeleccionado = "";
export function colorGenero() {
  $genBox.addEventListener("click", (e) => {
    if (e.target.closest(`[data-genero="hombre"]`)) {
      girlBox.style.backgroundColor = "#F5F5F7";
      menBox.style.backgroundColor = "#e111a3";
      generoSeleccionado = "hombre";
      girlBox.classList.remove("parameters__subcontain--error");

      return true;
    } else if (e.target.closest(`[data-genero="mujer"]`)) {
      menBox.style.backgroundColor = "#F5F5F7";
      girlBox.style.backgroundColor = "#e111a3";
      generoSeleccionado = "mujer";

      menBox.classList.remove("parameters__subcontain--error");
      return true;
    }
  });
  return false;
}
