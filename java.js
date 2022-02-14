let result;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operator = (func, a, b) => {
  result = func(a, b);
  return result;
};

const display = document.querySelector(".display");
display.style.color = "white";

let inputA;
let inputB;
let inputC;
let screen = "";

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    screen += number.innerHTML;
      
    if (testForDot !== undefined) {
      alertt.textContent = "";
    }
      
      if (result != null) {
        display.textContent = "";
        inputB = display.textContent;
      }
      if (test != undefined) {
        display.textContent += number.innerHTML;
        inputB = display.textContent;
        inputB = Number(inputB);
        console.log(inputB + "b");
        
      } else {
        display.textContent += number.innerHTML;
        inputA = display.textContent;
        inputA = Number(inputA);
        console.log(inputA + " a");
      }
  });
});

let test;
let otherTest;
let operatorInput;
let otherOperatorInput;
let fnc;
let fncc;

const functions = document.querySelectorAll(".func");
functions.forEach((fnction) => {
  fnction.addEventListener("click", () => {
    screen += fnction.innerHTML;
    testForDot = undefined;
    if (operatorInput != undefined) {
      otherOperatorInput = fnction.innerHTML;
      console.log(otherOperatorInput);
      if (operatorInput == "-") fnc = subtract;
      if (operatorInput == "+") fnc = add;
      if (operatorInput == "/") fnc = divide;
      if (operatorInput == "*") fnc = multiply;
      if (otherOperatorInput == "-") fncc = subtract;
      if (otherOperatorInput == "+") fncc = add;
      if (otherOperatorInput == "/") fncc = divide;
      if (otherOperatorInput == "*") fncc = multiply;
      otherTest = "defined";
      display.textContent = operator(fnc, inputA, inputB);
      inputC = result;
    } else {
      
      test = "on";
      display.textContent = "";
      operatorInput = fnction.innerHTML;
    };
  });
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (operatorInput == "/" && inputB === 0) {
    display.textContent = " DONT DIVIDE WITH 0";
  } else {
    if (operatorInput == "-") fnc = subtract;
    if (operatorInput == "+") fnc = add;
    if (operatorInput == "/") fnc = divide;
    if (operatorInput == "*") fnc = multiply;
    display.textContent = operator(fnc, inputA, inputB);
    if (otherTest != undefined) {
      display.textContent = operator(fncc, inputC, inputB);
    };
  };
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "";
  alertt.textContent = "";
  operatorInput = "";
  inputA = null;
  inputB = null;
  inputC = null;
  result = null;
  test = undefined;
  otherTest = undefined;
  otherOperatorInput = undefined;
  operatorInput = undefined;
  testForDot = undefined;
  
});

let testForDot;
const alertt = document.querySelector(".alert");
const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
  screen += dot.innerHTML;
  if (testForDot === undefined) {
    display.textContent += ".";
  } else if (testForDot !== undefined) {
    alert.textContent = "Can't add more than one decimal";
  }
  testForDot = "defined";
})

let array = [];
let newArr = [];
let bArr = [];
let index;

const del = document.querySelector(".backspace");
del.addEventListener("click", () => {
  console.log(screen);
  array = screen.split("");
  array.pop();
  newArr = array.join("");
  if (test != undefined) {
    inputB = `${inputB}`
    bArr = inputB.split("");
    bArr.pop();
    newArr = bArr.join("");
    display.textContent = newArr;
    inputB = newArr;
    
  } else {
    display.textContent = newArr;

  }
  
  screen = newArr;
 
});






