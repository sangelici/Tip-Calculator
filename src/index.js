$(function () {
  let bill;
  let numOfPeople;
  let tipPercentage;
  let tipTotal;
  let total;

  function handleCalcBtnEnabled() {
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

  function handleBillAmount() {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    bill = formatter.format($("#billAmount").val()).replace("$", "");

    $("#billAmount").on("blur", () => {
      $("#billAmount").val(bill);
      bill == "0"
        ? ($("#billAmount").addClass("invalidValueError"),
          $("#bill-error").show())
        : ($("#billAmount").removeClass("invalidValueError"),
          $("#bill-error").hide());
    });

    handleCalcBtnEnabled();
  }

  function handleTipPercentage() {
    let value = this.textContent.trim().toLowerCase();

    if (value !== "custom") {
      value = parseFloat(value.replace("%", "")) / 100;
      tipPercentage = value;

      $(".custom-tip-btn").show();
      $(".custom-tip-input").hide();
    } else {
      $(".custom-tip-btn").hide();
      $(".custom-tip-input").show();
      $("#customTipInput").trigger("focus");

      $("#customTipInput").on("input", () => {
        value = parseFloat($("#customTipInput").val()) / 100;
        tipPercentage = value;
      });

      $("#customTipInput").on("blur", () => {
        tipPercentage == "0"
          ? ($("#customTipInput").addClass("invalidValueError"),
            $("#tip-error").show())
          : ($("#customTipInput").removeClass("invalidValueError"),
            $("#tip-error").hide());
      });
    }

    handleCalcBtnEnabled();
  }

  function handleNumOfPeople() {
    numOfPeople = $("#numOfPeople").val();

    $("#numOfPeople").on("blur", () => {
      numOfPeople == "0"
        ? ($("#numOfPeople").addClass("invalidValueError"),
          $("#people-error").show())
        : ($("#numOfPeople").removeClass("invalidValueError"),
          $("#people-error").hide());
    });

    handleCalcBtnEnabled();
  }

  function calculateTotals() {
    let calculateSplitTipAmt = bill * tipPercentage;
    let calculateSplitBillAmt = bill / numOfPeople;

    tipTotal = calculateSplitTipAmt / numOfPeople;
    total = calculateSplitBillAmt + tipTotal;

    $("input").attr("disabled", true);
    $("input").addClass("disabled-input");
    $("#total-split").text("$" + total.toFixed(2));
    $("#total-tip-split").text("$" + tipTotal.toFixed(2));
    $("#total-bill-split").text("$" + calculateSplitBillAmt.toFixed(2));
    $("#submit-btn").text("Reset");
  }

  function handleSelect() {
    $(".percent-amt").removeClass("selected");
    $(this).addClass("selected");
  }

  function handleSubmit() {
    $("#submit-btn").text().trim() === "Calculate"
      ? calculateTotals()
      : handleReset();
  }

  function handleReset() {
    bill = "";
    numOfPeople = "";
    tipPercentage = "";
    $("input").removeAttr("disabled");
    $("input").removeClass("disabled-input");
    $("#billAmount").val("");
    $("#numOfPeople").val("");
    $(".percent-amt").removeClass("selected");
    $(".custom-tip-btn").show();
    $(".custom-tip-input").hide();
    $(".custom-tip-input").val("");
    $("#total-split").text("$0.00");
    $("#total-tip-split").text("$0.00");
    $("#total-bill-split").text("$0.00");
    $("#submit-btn").text("Calculate");
  }

  // Jquery Listeners
  $(".error-message").hide();
  $("#billAmount").on("input", handleBillAmount);
  $(".tip-percent").on("click", "button", handleTipPercentage);
  $("#numOfPeople").on("input", handleNumOfPeople);
  $(".custom-tip-btn").show();
  $(".custom-tip-input").hide();
  $(".percent-amt").on("click", handleSelect);
  $("#submit-btn").on("click", handleSubmit);
});
