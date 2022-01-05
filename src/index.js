$(function () {
  let bill;
  let numOfPeople;
  let tipPercentage;
  let tipTotal;

  function enabledButton() {
    const numOfPeopleNotNil =
      numOfPeople !== "" && numOfPeople !== "0" && numOfPeople !== undefined;

    if (
      bill !== undefined &&
      tipPercentage !== undefined &&
      numOfPeopleNotNil
    ) {
      $("#submit-btn").removeClass("disabled-btn");
      $("#submit-btn").removeAttr("disabled");
    }
  }

  function updateBillAmount() {
    bill = $("#billAmount").val();

    $("#billAmount").on("blur", () => {
      if (bill === "0") {
        $("#billAmount").addClass("invalidValueError");
        $("#bill-error").show();
      } else {
        $("#billAmount").removeClass("invalidValueError");
        $("#bill-error").hide();
        enabledButton();
      }
    });
  }

  function updateNumOfPeople() {
    numOfPeople = $("#numOfPeople").val();

    $("#numOfPeople").on("blur", () => {
      if (numOfPeople === "0") {
        $("#numOfPeople").addClass("invalidValueError");
        $("#people-error").show();
      } else {
        $("#numOfPeople").removeClass("invalidValueError");
        $("#people-error").hide();
        enabledButton();
      }
    });
  }

  function handleTipPercentage() {
    let value = this.textContent.trim().toLowerCase();

    if (value !== "custom") {
      value = parseFloat(value.replace("%", "")) / 100;
      tipPercentage = value;
    } else {
      $(".custom-tip").hide();
      $(".custom-tip-input").show();
      $("#customPercentInput").trigger("focus");

      $("#customPercentInput").on("input", () => {
        const customValue = $("#customPercentInput").val();

        value = parseFloat(customValue) / 100;

        tipPercentage = value;
      });

      $("#customPercentInput").on("blur", () => {
        if (tipPercentage === 0) {
          $("#customPercentInput").addClass("invalidValueError");
          $("#tip-error").show();
        } else {
          $("#customPercentInput").removeClass("invalidValueError");
          // $("#customPercentInput").addClass("selected");
          $("#tip-error").hide();
        }
      });
    }

    enabledButton();
  }

  function calculateTotals() {
    let calculateSplitTipAmt = bill * tipPercentage;
    let calculateBillSplitAmt = (bill / numOfPeople).toFixed(2);

    tipTotal = (calculateSplitTipAmt / numOfPeople).toFixed(2);

    $("#final-tip-total").text("$" + tipTotal);
    $("#final-cost-total").text("$" + calculateBillSplitAmt);
    $("#submit-btn").text("Reset");
  }

  function handleReset() {
    bill = "";
    numOfPeople = "";
    tipPercentage = "";
    $("#billAmount").val("");
    $("#numOfPeople").val("");
    $(".percent-amt").removeClass("selected");
    $(".custom-tip").show();
    $(".custom-tip-input").val("");
    $("#final-tip-total").text("$0.00");
    $("#final-cost-total").text("$0.00");
    $("#submit-btn").text("Calculate");
  }

  $(".error-message").hide();
  $("#billAmount").on("input", updateBillAmount);
  $("#numOfPeople").on("input", updateNumOfPeople);
  $(".tip-percent").on("click", "button", handleTipPercentage);
  $(".custom-tip").show();
  $(".custom-tip-input").hide();
  $(".percent-amt").on("click", function () {
    $(".percent-amt").removeClass("selected");
    $(this).addClass("selected");
  });
  $("#submit-btn").on("click", () => {
    $("#submit-btn").text().trim() === "Calculate"
      ? calculateTotals()
      : handleReset();
  });
});
