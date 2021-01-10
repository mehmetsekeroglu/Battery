const divContainerElement = document.querySelector("#counter");

let counter = 0;

divContainerElement.addEventListener("click", function(){
    divContainerElement.innerHTML =  + counter++;
    divContainerElement.style.color = "red";
})