function RadioBill() {
  var callsTotal = 0;
  var smsTotal = 0;
  var billTotal = 0;

  function callIncrement() {
    callsTotal += 2.75;

  }
  function callMade() {
    return callsTotal.toFixed(2);


  }
  function smsIncrement() {
    smsTotal += 0.75;


  }
  function smsMade() {
    return smsTotal.toFixed(2);

  }
  function finalTotal() {
    return (callsTotal + smsTotal).toFixed(2);

  }
  function totalClassName() {
    if (finalTotal() >= 50) {
      return 'danger'
    }

    else if(finalTotal() >= 30) {
      
      // (finalTotal() >= 50) {
      return 'warning'
    }

  }
  return {
   callIncrement,
   callMade,
   smsIncrement,
   smsMade,
   finalTotal,
   totalClassName


  }



}














// function RadioBill() {
//     //var theCallTotal = 0;
//     var callsTotal = 0.00;
//   var smsTotal = 0.00;
//   var billTotal = 0;

//     function setCallTotal(billString) {
//       var billItems = billString.split(",");
//       //var billTotal = 0;
//       for (var i = 0; i < billItems.length; i++) {
//           var billItem = billItems[i].trim();
//           if (billItem === "call") {
//               billTotal += 2.75;
//               callsTotal += 2.75;
//           }
//           else if (billItem === "sms") {
//               billTotal += 0.75;
//               smsTotal += 0.75;
//           }
//       }
//     }
//     function getCallTotal(){

//       return callsTotal

//     } 

//     // function setSMSTotal(billString) {
//     //   var billItems = billString.split(",");
//     //   //var billTotal = 0;
//     //   for (var i = 0; i < billItems.length; i++) {
//     //       var billItem = billItems[i].trim();
//     //       if (billItem === "call") {
//     //           billTotal += 0.75;
//     //           SMSTotal += 0.75;
//     //       }
//     //       else if (billItem === "sms") {
//     //           billTotal += 2.75;
//     //           CallTotal += 2.75;
//     //       }
//     //   }
//     // }
//     function getSMSTotal(){

//       return smsTotal

//     } 



//     function getTotal() { 

//       return billTotal;

//     }

//     function getWarningLevel(){
//       if (getTotal()>= 30) {
//         return "warning"
//       }

//     }
//     function getDangerLevel(){
//       if (getTotal()>= 50) {
//         return "danger"
//       }

//     }
//     return {

//       setCallTotal,
//       getCallTotal,
//       getTotal,
//       getSMSTotal,
//       getWarningLevel,
//       getDangerLevel



//     }

//   }




