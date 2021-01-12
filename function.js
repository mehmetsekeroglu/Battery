/**
 * Pilin icini renklendirir
 */
function color() {
    if (counter === 0) {
        lowestRow.style.background = "white";
        lowRow.style.background = "white";
        highRow.style.background = "white";
        highestRow.style.background = "white";
    } else if (counter === 25) {
        lowestRow.style.background = "red";
        lowRow.style.background = "white";
        highRow.style.background = "white";
        highestRow.style.background = "white";
    } else if (counter === 50) {
        lowestRow.style.background = "orange";
        lowRow.style.background = "orange";
        highRow.style.background = "white";
        highestRow.style.background = "white";
    } else if (counter === 75) {
        lowestRow.style.background = "yellow";
        lowRow.style.background = "yellow";
        highRow.style.background = "yellow";
        highestRow.style.background = "white";
    } else if (counter === 100) {
        lowestRow.style.background = "green";
        lowRow.style.background = "green";
        highRow.style.background = "green";
        highestRow.style.background = "green";
    }
}
/**
 * Pil sayacini artirir
 */
function controlCounterIncrease() {
    if (counter < 100) {
        counterItem.innerHTML = counter = counter + 25;
        counterItem.innerHTML = "%" + counter;
    }
}
/**
 * Pil sayacini azaltir
 */
function controlCounterDecrease() {
    if (counter > 0) {
        counterItem.innerHTML = counter = counter - 25;
        counterItem.innerHTML = "%" + counter;
    }
}
/**
 * %100 dolulugu kontrol eder
 */
function fullControl() {
    if (counter === 100) {
        highRow.innerHTML = "Battery Full"
        highRow.style.color = "white"
    } else {
        highRow.innerHTML = " "
    }
}
/**
 * Bos pili kontrol eder
 */
function emptyControl() {
    if (counter === 0) {
        highRow.innerHTML = "Battery Empty"
        highRow.style.color = "black"
    } else {
        highRow.innerHTML = " "
    }
}