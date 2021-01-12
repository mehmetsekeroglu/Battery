const counterPlus = document.querySelector("#counter-plus");
const counterMinus = document.querySelector("#counter-minus");
const lowestRow = document.querySelector("#lowest-row");
const lowRow = document.querySelector("#low-row");
const highRow = document.querySelector("#high-row");
const highestRow = document.querySelector("#highest-row");
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