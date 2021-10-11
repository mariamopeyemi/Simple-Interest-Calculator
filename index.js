const date = document.querySelector("#date");
const container = document.querySelector(".main-container");

const today = new Date();
date.textContent = today;
date.innerHTML = today.toDateString();

//   simple interest is capital * rate * time /100

container.addEventListener("input", () => {
  const duration = document.querySelector("#timing").value;
  const capital = document.getElementById("capital").value;
  const rate = document.querySelector("#range").value;
  const output = document.querySelector("#output");
  const selectedRange = document.querySelector("#percent");

  let simpleInterest = (capital * rate * duration) / 100;

  let value = simpleInterest.toFixed(2);
  output.innerHTML = value;

  selectedRange.innerHTML = rate + "%";
});