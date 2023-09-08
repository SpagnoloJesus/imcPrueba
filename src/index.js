import "./seleccionar_sexo.js";
import { aumentarEdad, disminuirEdad } from "./botones_edad.js";
import {
  colorGenero,
  generoSeleccionado,
  menBox,
  girlBox,
} from "./seleccionar_sexo.js";
import { mostrarVentanaResultado } from "./mostrar_resultado.js";
import "./btn_volver.js";

const $weight = document.getElementById("weight");
const $height = document.getElementById("height");
const $button = document.querySelector(".calculate__button");

aumentarEdad();
disminuirEdad();
colorGenero();

$button.addEventListener("click", (e) => {
  const edadActualizada = document.querySelector(".age-number").textContent;
  const colorSeleccionado = generoSeleccionado;

  const imcTotal =
    $weight.value / ((($height.value / 100) * $height.value) / 100);

  console.log($height.value);
  console.log($weight.value);
  console.log(edadActualizada);
  console.log(colorSeleccionado);

  if (colorSeleccionado) {
    girlBox.classList.remove("parameters__subcontain--error");
    menBox.classList.remove("parameters__subcontain--error");
    if (imcTotal < 18.5) {
      mostrarVentanaResultado("Bajo peso", colorSeleccionado);
    } else if (imcTotal >= 18.5 && imcTotal < 24.9) {
      mostrarVentanaResultado("Peso normal", colorSeleccionado);
    } else if (imcTotal >= 25 && imcTotal < 29.9) {
      mostrarVentanaResultado("Sobrepeso", colorSeleccionado);
    } else {
      mostrarVentanaResultado("Obesidad", colorSeleccionado);
    }
  } else {
    girlBox.classList.add("parameters__subcontain--error");
    menBox.classList.add("parameters__subcontain--error");
  }

  console.log(imcTotal);
});
