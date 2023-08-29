var button = document.getElementById("button");
var input = document.getElementById("input");
var resultDiv = document.getElementById("result");
button.addEventListener("click", onClick);
function onClick() {
    resultDiv.innerHTML = input.value;
}