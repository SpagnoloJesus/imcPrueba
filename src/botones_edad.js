// Obtén los elementos de los botones y el número
const $edadNumero = document.querySelector(".age-number");
const $incrementButton = document.getElementById("button-increment");
const $decrementButton = document.getElementById("button-decrement");

const $containerAge = document.querySelector(".parameters__contain-age");

// export const botonesEdad = () => {
//   let edad = 18;

//   const actualizarEdad = () => {
//     $edadNumero.textContent = edad;
//   };

//   $containerAge.addEventListener("click", (e) => {
//     if (e.target === $incrementButton) {
//       edad++;
//       actualizarEdad();
//     } else if (e.target === $decrementButton) {
//       edad--;
//       actualizarEdad();
//     }
//   });
// };

let edad = 18;

export const aumentarEdad = () => {
  edad++;
  $edadNumero.textContent = edad;
  return edad; // Devuelve la edad actualizada
};

export const disminuirEdad = () => {
  if (edad > 18) {
    edad--;
    $edadNumero.textContent = edad;
    return edad; // Devuelve la edad actualizada
  }
};

$containerAge.addEventListener("click", (e) => {
  if (e.target === $incrementButton) {
    aumentarEdad();
  } else if (e.target === $decrementButton) {
    disminuirEdad();
  }
});
