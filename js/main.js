let inputValues = document.querySelector(".input-values");
let inputResult = document.querySelector(".input-result");

let btns = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let abs = document.querySelector(".abs");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    inputValues.value += btn.textContent;
  });
  equal.addEventListener("click", () => {
    console.log(eval(inputValues.value));
    inputResult.textContent = eval(inputValues.value);
  });
  clear.addEventListener("click", () => {
    inputValues.value = "";
    inputResult.textContent = 0;
  });
  abs.addEventListener("click", () => {
    inputResult.textContent = -inputResult.textContent;
    inputValues.value = inputResult.textContent;
  });
});
