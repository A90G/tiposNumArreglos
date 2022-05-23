//almacene arreglo de dimensión N y muestre cuántos son + y cuántos -
let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo")
);
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;
let contadorCero: number = 0;
let contadorPositivos: number = 0;
let contadorNegativos: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt(`Ingrese el número que va en la posición ${indice}`)
  );
  console.log(
    `El número ingresado en la posición ${indice} es: ${arreglo[indice]}`
  );

  if (arreglo[indice] === 0) {
    contadorCero++;
  }
  if (arreglo[indice] > 0) {
    contadorPositivos++;
  }
  if (arreglo[indice] < 0) {
    contadorNegativos++;
  }
  console.log(`Se ingreso ${contadorCero} ceros`);
  console.log(`Se ingreso ${contadorPositivos} positivos`);
  console.log(`Se ingreso ${contadorNegativos} negativos`);
}
