const counterPlus = document.querySelector("#counter-plus");
const counterMinus = document.querySelector("#counter-minus");
const lowestRow = document.querySelector("li:last-child");
const lowRow = document.querySelector("li:nth-child(3)");
const highRow = document.querySelector("li:nth-child(2)");
const highestRow = document.querySelector("li:first-child");
const counterItem = document.querySelector(".counter-item");
let counter = 0;

counterPlus.addEventListener("click", (e) => {
    controlCounterIncrease();
    color();
    fullControl();
})

counterMinus.addEventListener("click", (e) => {
    controlCounterDecrease();
    color();
    emptyControl();
})