describe("CallTotal", function () {

    it("should be able to set call total", function () {
        let settingsTest = RadioBill();

        settingsTest.setCallTotal("call");
        assert.equal(2.75, settingsTest.getCallTotal());

    });

    it("should be able to set 2 calls total", function () {
        let settingsTest = RadioBill();

        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        assert.equal(5.50, settingsTest.getCallTotal());

    });


});

describe("SMS Total", function () {

    it("should be able to calculate smsTotal", function () {
        let settingsTest = RadioBill();

        settingsTest.setCallTotal("sms");
        assert.equal(0.75, settingsTest.getSMSTotal());


    }); 

    

});

describe("Total", function () {

    it("should be able to calculate Total", function () {
        let settingsTest = RadioBill();

        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        settingsTest.setCallTotal("call");
        assert.equal(11 ,settingsTest.getTotal());


    });


});   
