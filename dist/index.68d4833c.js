$((function(){let t,e,o,l;function n(){void 0!==t&&void 0!==o&&(""!==e&&"0"!==e&&void 0!==e)&&($("#submit-btn").removeClass("disabled-btn"),$("#submit-btn").removeAttr("disabled"))}$(".error-message").hide(),$("#billAmount").on("input",(function(){t=$("#billAmount").val(),$("#billAmount").on("blur",(()=>{"0"===t?($("#billAmount").addClass("invalidValueError"),$("#bill-error").show()):($("#billAmount").removeClass("invalidValueError"),$("#bill-error").hide(),n())}))})),$("#numOfPeople").on("input",(function(){e=$("#numOfPeople").val(),$("#numOfPeople").on("blur",(()=>{"0"===e?($("#numOfPeople").addClass("invalidValueError"),$("#people-error").show()):($("#numOfPeople").removeClass("invalidValueError"),$("#people-error").hide(),n())}))})),$(".tip-percent").on("click","button",(function(){let t=this.textContent.trim().toLowerCase();"custom"!==t?(t=parseFloat(t.replace("%",""))/100,o=t):($(".custom-tip").hide(),$(".custom-tip-input").show(),$("#customPercentInput").trigger("focus"),$("#customPercentInput").on("input",(()=>{const e=$("#customPercentInput").val();t=parseFloat(e)/100,o=t})),$("#customPercentInput").on("blur",(()=>{0===o?($("#customPercentInput").addClass("invalidValueError"),$("#tip-error").show()):($("#customPercentInput").removeClass("invalidValueError"),$("#tip-error").hide())}))),n()})),$(".custom-tip").show(),$(".custom-tip-input").hide(),$(".percent-amt").on("click",(function(){$(".percent-amt").removeClass("selected"),$(this).addClass("selected")})),$("#submit-btn").on("click",(()=>{"Calculate"===$("#submit-btn").text().trim()?function(){let n=t*o,i=(t/e).toFixed(2);l=(n/e).toFixed(2),$("#final-tip-total").text("$"+l),$("#final-cost-total").text("$"+i),$("#submit-btn").text("Reset")}():(t="",e="",o="",$("#billAmount").val(""),$("#numOfPeople").val(""),$(".percent-amt").removeClass("selected"),$(".custom-tip").show(),$(".custom-tip-input").val(""),$("#final-tip-total").text("$0.00"),$("#final-cost-total").text("$0.00"),$("#submit-btn").text("Calculate"))}))}));
//# sourceMappingURL=index.68d4833c.js.map
