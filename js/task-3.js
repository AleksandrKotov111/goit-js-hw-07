const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.classList.add("input-name");
outputEl.classList.add("output-name");

inputEl.addEventListener("input", targetInput);

function targetInput(event) {
    const value = event.target.value.trim();
    if(value === "") {
        outputEl.textContent = "Anonymous";
    } else {
        outputEl.textContent = value;
    }
}
