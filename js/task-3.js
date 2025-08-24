const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.classList.add("input-name")
outputEl.classList.add("output-name")

inputEl.addEventListener("input", targetInput);



function targetInput(event) {  
    outputEl.innerHTML = event.target.value.trim() ? event.target.value.trim() : outputEl.innerHTML = "Anonymous";
}

