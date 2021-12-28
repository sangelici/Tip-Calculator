$(function () {
  let bill;
  let numOfPeople;
  let tipPercentage;
  let tipTotal;

  function updateBillAmount() {
    bill = $("#billAmount").val();
  }

  function updateNumOfPeople() {
    numOfPeople = $("#numOfPeople").val();
  }

  function handleTipPercentage() {
    let value = this.textContent.trim().toLowerCase();

    if (value !== "custom") {
      value = parseFloat(value.replace("%", "")) / 100;
    }

    tipPercentage = value;
  }

  function calculateTotals() {
    const billNotNil = bill !== 0 && bill !== undefined;
    const numOfPeopleNotNil = numOfPeople !== 0 && numOfPeople !== undefined;
    const tipPercentageNotNil =
      tipPercentage !== 0 && tipPercentage !== undefined;

    if (billNotNil && numOfPeopleNotNil && tipPercentageNotNil) {
      let x = bill * tipPercentage;
      let y = (bill / numOfPeople).toFixed(2);

      tipTotal = (x / numOfPeople).toFixed(2);

      $("#final-tip-total").text("$" + tipTotal);
      $("#final-cost-total").text("$" + y);
      $("#submit-btn").text("Reset");
    }
  }

  function handleReset() {
    bill = "";
    numOfPeople = "";
    tipPercentage = undefined;
    $("#billAmount").val(0);
    $("#numOfPeople").val(0);
    $("#final-tip-total").text("$0.00");
    $("#final-cost-total").text("$0.00");
    $("#submit-btn").text("Calculate");
  }

  $("#billAmount").on("input", updateBillAmount);
  $("#numOfPeople").on("input", updateNumOfPeople);
  $(".tip-percent").on("click", "button", handleTipPercentage);
  console.log($("#submit-btn").text().trim() === "Calculate");
  $("#submit-btn").on("click", () => {
    $("#submit-btn").text().trim() === "Calculate"
      ? calculateTotals()
      : handleReset();
  });
});
