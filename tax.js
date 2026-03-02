const income = document.querySelector(".income-input");
const results = document.querySelector(".results-input");
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");
const category = document.querySelector(".category");

// Reset
reset.addEventListener("click", () => {
  income.value = "";
  results.value = "";
});

// Calculate
calculate.addEventListener("click", () => {

  const incomeValue = parseFloat(income.value);

  if (isNaN(incomeValue) || incomeValue <= 0) {
    results.value = "Enter valid income";
    return;
  }

  let tax = 0;

  // ==========================
  // Individual (Indian New Regime)
  // ==========================
  if (category.value === "individual") {

    if (incomeValue > 300000) {
      tax += Math.min(incomeValue - 300000, 300000) * 0.05;
    }

    if (incomeValue > 600000) {
      tax += Math.min(incomeValue - 600000, 300000) * 0.10;
    }

    if (incomeValue > 900000) {
      tax += Math.min(incomeValue - 900000, 300000) * 0.15;
    }

    if (incomeValue > 1200000) {
      tax += Math.min(incomeValue - 1200000, 300000) * 0.20;
    }

    if (incomeValue > 1500000) {
      tax += (incomeValue - 1500000) * 0.30;
    }

    // Rebate benefit (income up to 7L)
    if (incomeValue <= 700000) {
      tax = 0;
    }
  }

  // ==========================
  // Business (Example Corporate Tax)
  // ==========================
  if (category.value === "business") {
    tax = incomeValue * 0.25;
  }

  // Add 4% Cess (real Indian rule)
  tax = tax + (tax * 0.04);

  results.value = "₹ " + tax.toFixed(2);

});