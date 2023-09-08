export const mostrarVentanaResultado = (estado, sexo) => {
  const $ventanaResultado = document.querySelector(".resultado__container");
  const $imcEstado = document.getElementById("imcEstatus");
  const $weight = document.getElementById("weight");
  const $height = document.getElementById("height");
  const edadActualizada = document.querySelector(".age-number").textContent;

  const imcTotal =
    $weight.value / ((($height.value / 100) * $height.value) / 100);

  const imcRedondeado = imcTotal.toFixed(1);
  let TMB;
  if (sexo === "hombre") {
    TMB = 10 * $weight.value + 6.25 * $height.value - 5 * edadActualizada + 5;
  } else if (sexo === "mujer") {
    TMB = 10 * $weight.value + 6.25 * $height.value - 5 * edadActualizada - 161;
  }
  const tmbRedondeado = TMB.toFixed(0);
  console.log(tmbRedondeado);

  if (estado === "Bajo peso") {
    $imcEstado.style.color = "rgba(253, 217, 81, 255)";
    $imcEstado.innerText = estado;
    document.querySelector('[data-valor="peso"] span').innerText =
      $weight.value + "kg";
    document.querySelector('[data-valor="imc"] span').innerText = imcRedondeado;

    document.querySelector('[data-valor="tasa"] span').innerText =
      tmbRedondeado + "kcal";
  } else if (estado === "Peso normal") {
    $imcEstado.style.color = "rgba(90, 220, 120, 255)";
    $imcEstado.innerText = estado;
    document.querySelector('[data-valor="peso"] span').innerText =
      $weight.value + "kg";
    document.querySelector('[data-valor="imc"] span').innerText = imcRedondeado;

    document.querySelector('[data-valor="tasa"] span').innerText =
      tmbRedondeado + "kcal";
  } else if (estado === "Sobrepeso") {
    $imcEstado.style.color = "rgba(245, 166, 35, 255)";
    $imcEstado.innerText = estado;
    document.querySelector('[data-valor="peso"] span').innerText =
      $weight.value + "kg";
    document.querySelector('[data-valor="imc"] span').innerText = imcRedondeado;

    document.querySelector('[data-valor="tasa"] span').innerText =
      tmbRedondeado + "kcal";
  } else if (estado === "Obesidad") {
    $imcEstado.style.color = "rgb(247, 100, 153)";
    $imcEstado.innerText = estado;
    document.querySelector('[data-valor="peso"] span').innerText =
      $weight.value + "kg";
    document.querySelector('[data-valor="imc"] span').innerText = imcRedondeado;

    document.querySelector('[data-valor="tasa"] span').innerText =
      tmbRedondeado + "kcal";
  }
  // $imcEstado.innerText = estado;
  $ventanaResultado.classList.add("resultado__container--active");
};
