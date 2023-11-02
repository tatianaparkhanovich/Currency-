const input = document.getElementById("input");
const currensySelector = document.querySelector(".currensy-selector");
console.log(currensySelector);
const myResult = document.querySelector(".my-result");

const convert = async () => {
  const response = await fetch(`https://open.er-api.com/v6/latest/RUB`);
  const data = await response.json();
  console.log(data);
  currensySelector.addEventListener("change", () => currencyResultUpdate(data));
  input.addEventListener("keyup", () => currencyResultUpdate(data));
};
const currencyResultUpdate = (data) => {
  if (input.value) {
    myResult.textContent = (
      input.value * data.rates[currensySelector.value]
    ).toFixed(2);
  } else {
    myResult.textContent = "";
  }
};
convert();
