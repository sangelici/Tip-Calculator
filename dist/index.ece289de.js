$((function(){let t,n,i,o;$("#billAmount").on("input",(function(){t=$("#billAmount").val()})),$("#numOfPeople").on("input",(function(){n=$("#numOfPeople").val()})),$(".tip-percent").on("click","button",(function(){let t=this.textContent.trim().toLowerCase();"custom"!==t&&(t=parseFloat(t.replace("%",""))/100),i=t})),$("#submit-btn").on("click",(()=>{"Calculate"===$("#submit-btn").text().trim()?function(){if(0!==t&&void 0!==t&&0!==n&&void 0!==n&&0!==i&&void 0!==i){let l=t*i,e=(t/n).toFixed(2);o=(l/n).toFixed(2),$("#final-tip-total").text("$"+o),$("#final-cost-total").text("$"+e),$("#submit-btn").text("Reset")}}():(t="",n="",i=void 0,$("#billAmount").val(0),$("#numOfPeople").val(0),$("#final-tip-total").text("$0.00"),$("#final-cost-total").text("$0.00"),$("#submit-btn").text("Calculate"))}))}));
//# sourceMappingURL=index.ece289de.js.map