describe(radioBill, function(){
    
    it("should charge R2.75 for each call made", function(){
        var radioButton = RadioBill();
        radioButton.callIncrement();
        assert.equal(2.75,radioButton.callMade())

    })
    it("should update calls total to R22 for 8 calls made",function(){
        var radioButton = RadioBill();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();    
        radioButton.callIncrement();
        
        assert.equal(22,radioButton.callMade())
        
    })

    it("should charge R0.75 for each sms made", function(){
     var radioButton = RadioBill();
     radioButton.smsIncrement();
     assert.equal(0.75, radioButton.smsIncrement())
 
    })
    it("should update sms total to R6 for 8 sms made",function(){
        var radioButton = RadioBill();
        radioButton.smsIncrement();
        radioButton.smsIncrement();
        radioButton.smsIncrement();
        radioButton.smsIncrement();
        radioButton.smsIncrement();
        radioButton.smsIncrement();
        radioButton.smsIncrement();
        radioButton.smsIncrement();
        
        assert.equal(8,radioButton.smsMade())


    })
    it("it should be able to add call and sms made", function(){
        var radioButton = RadioBill();
        radioButton.smsIncrement();
        radioButton.callIncrement();
        assert.equal(3.5,radioButton.finalTotal())

    })
    it("should show warning colour code when it reaches R30", function(){
        var radioButton = radioBill();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();
        radioButton.callIncrement();

        assert.equal("warning", radioButton.finalTotal())



    })



})


























// describe("CallTotal", function () {

//     it("should be able to set call total", function () {
//         let settingsTest = RadioBill();

//         settingsTest.setCallTotal("call");
//         assert.equal(2.75, settingsTest.getCallTotal());

//     });

//     it("should be able to set 2 calls total", function () {
//         let settingsTest = RadioBill();

//         settingsTest.setCallTotal("call");
//         settingsTest.setCallTotal("call");
//         assert.equal(5.50, settingsTest.getCallTotal());

//     });


// });

// describe("SMS Total", function () {

//     it("should be able to calculate smsTotal", function () {
//         let settingsTest = RadioBill();

//         settingsTest.setCallTotal("sms");
//         assert.equal(0.75, settingsTest.getSMSTotal());


//     }); 

    

// });

// describe("Total", function () {

//     it("should be able to calculate Total", function () {
//         let settingsTest = RadioBill();

//         settingsTest.setCallTotal("call");
//         settingsTest.setCallTotal("call");
//         settingsTest.setCallTotal("call");
//         settingsTest.setCallTotal("call");
//         assert.equal(11 ,settingsTest.getTotal());


//     });


// });   
