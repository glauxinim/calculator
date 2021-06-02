var savedNumber = 0;
var operator;

function insert(clickedNumber) {
  document.getElementById("result").innerHTML += clickedNumber;
}

function reset() {
  document.getElementById("result").innerHTML = "";
  savedNumber = 0;
}

function sum() {
  savedNumber = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = "";
  operator = "+";
}

function subtract() {
  savedNumber = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = "";
  operator = "-";
}

function multiply() {
  savedNumber = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = "";
  operator = "*";
}

function division() {
  savedNumber = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = "";
  operator = "/";
}

function calculate() {
  if (operator == "+") {
    var visorNumber = document.getElementById("result").innerHTML;
    var queijo = Number(visorNumber) + Number(savedNumber);
    document.getElementById("result").innerHTML = queijo;
  }

  if (operator == "-") {
    var visorNumber = document.getElementById("result").innerHTML;
    var queijo = Number(savedNumber) - Number(visorNumber);
    document.getElementById("result").innerHTML = queijo;
  }

  if (operator == "*") {
    var visorNumber = document.getElementById("result").innerHTML;
    var queijo = Number(savedNumber) * Number(visorNumber);
    document.getElementById("result").innerHTML = queijo;
  }

  if (operator == "/") {
    var visorNumber = document.getElementById("result").innerHTML;
    var queijo = Number(savedNumber) / Number(visorNumber);
    document.getElementById("result").innerHTML = queijo;
  }
}
