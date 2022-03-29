var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var resultado = "";

function Somar() {
  if (resultado == "") {
    resultado = valor1.valueAsNumber + valor2.valueAsNumber;
    listarNaTela(resultado);
  } else if (resultado != "") {
    resultado = resultado + valor2.valueAsNumber;
    listarNaTela(resultado);
  }
}

function Subtrair() {
  if (resultado == "") {
    resultado = valor1.valueAsNumber - valor2.valueAsNumber;
    listarNaTela(resultado);
  } else if (resultado != "") {
    resultado = resultado - valor2.valueAsNumber;
    listarNaTela(resultado);
  }
}

function Multiplicar() {
  if (resultado == "") {
    resultado = valor1.valueAsNumber * valor2.valueAsNumber;
    listarNaTela(resultado);
  } else if (resultado != "") {
    resultado = resultado * valor2.valueAsNumber;
    listarNaTela(resultado);
  }
}

function Dividir() {
  if (resultado == "") {
    resultado = valor1.valueAsNumber / valor2.valueAsNumber;
    listarNaTela(resultado);
  } else if (resultado != "") {
    resultado = resultado / valor2.valueAsNumber;
    listarNaTela(resultado);
  }
}

function Sair() {
  var message = "";

  message += "<p class='resultado'>Até a próxima!</p>";

  document.getElementById("resultado").innerHTML = message;
  var resultado = "";
  valor1.value = "";
  valor2.value = "";
}

function listarNaTela(resultado) {
  var message = "";

  message += "<p class='resultado'>Resultado: " + resultado + "</p>";

  document.getElementById("resultado").innerHTML = message;

  valor1.value = resultado;
  valor2.value = "";
}

function limparResultado() {
  document.getElementById("resultado").innerHTML = "";
  var resultado = "";
  valor1.value = "";
  valor2.value = "";
}