const form = document.getElementById("exercise");
const numberInput = document.getElementById("number");
const result = document.getElementById("result");
const table = document.getElementById("timesTable");
const rows = document.getElementById("tableRows");

function generateTable() {
  const number = numberInput.valueAsNumber;
  rows.replaceChildren();
  table.hidden = true;

  if (!Number.isFinite(number) || !Number.isFinite(number * 10)) {
    result.textContent = "Enter a valid number that can be multiplied by 10.";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const product = number * i;
    rows.insertRow().insertCell().textContent = number + " × " + i + " = " + product;
  }

  table.hidden = false;
  result.textContent = "Multiplication table for " + number;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  generateTable();
});
