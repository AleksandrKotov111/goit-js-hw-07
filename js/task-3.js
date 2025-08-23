const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

console.log(inputEl);
console.log(outputEl);


inputEl.classList.add("input-name")
outputEl.classList.add("output-name")

inputEl.addEventListener("input", targetInput);



function targetInput(event) {
    return outputEl.innerText = event.target.value.trim() ? event.target.value.trim() : outputEl.innerHTML = "Anonymous";
}

