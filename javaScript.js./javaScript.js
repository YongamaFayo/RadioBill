var textTotalAddBtn = document.querySelector(".radioBillAddBtn");
var billTypeText = document.querySelector(".billItemTypeRadio");
var callTotal = document.querySelector(".callTotalTwo");
var smsTotal = document.querySelector(".smsTotalTwo");
var totalCost = document.querySelector(".totalTwo");

// var billTotal = 0;
// var callsTotal = 0;
// var SMS = 0;

var instance = RadioBill()

function textTotalAddBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItem = checkedRadioBtn.value;
        //var billItem = billItemType.trim ();
        if (billItem === "call") {
            instance.callIncrement()
        }
        else if (billItem === "sms") {
            instance.smsIncrement()
        }
        callTotal.innerHTML = instance.callMade();
        smsTotal.innerHTML = instance.smsMade();
        totalCost.classList.add(instance.totalClassName())

        totalCost.innerHTML = instance.finalTotal();
    }
}

textTotalAddBtn.addEventListener("click", textTotalAddBtnClicked);