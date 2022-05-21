//almacene arreglo de dimensión N y muestre cuántos son + y cuántos -
let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo")
);
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt(`Ingrese el número que va en la posición ${indice}`)
  );
  console.log(
    `El número ingresado en la posición ${indice} es: ${arreglo[indice]}`
  );
}
if (arreglo[indice] === 0) {
  let cero: number = 0;
  cero++;
  console.log(`La cantidad de ceros es: ${cero}`);
} else {
  if (arreglo[indice] > 0) {
    let positivo: number = 0;
    positivo++;
    console.log(`La cantidad de positivos es: ${positivo}`);
  } else {
    let negativo: number = 0;
    negativo++;
    console.log(`La cantidad de negativos es: ${negativo}`);
  }
}
