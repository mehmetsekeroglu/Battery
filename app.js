const divContainerElement = document.querySelector(".counter-item");

let counter = 0;

divContainerElement.addEventListener("click", function(){
    divContainerElement.innerHTML =  + counter++;
})