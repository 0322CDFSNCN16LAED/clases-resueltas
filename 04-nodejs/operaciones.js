function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  //si a == 0 o b == 0
  if (a == 0 || b == 0) {
    return "El resultado es 0";
  }

  //multiplicar a*b
  return a * b;
}

function dividir(a, b) {
  if (b == 0) {
    return "No se puede dividir por 0";
  }

  return a / b;
}

module.exports = {
  sumatoria: sumar,
  multiplicacion: multiplicar,
  dividir: dividir,
};
