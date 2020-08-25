module.exports = {
    ' onload From-Picker should be "KILO" and To-Picker should be "GRAM"':function(browser){
        browser
            .url(browser.launch_url)
            .verify.elementPresent(".picker-From")
            .verify.elementPresent(".picker-To")
            .verify.value('.picker-From','KILO')
            .verify.value('.picker-To','GRAM')
            .end()
    },
    'Both From and to should not be same': function (browser) {
        browser
            .url(browser.launch_url)
            .verify.elementPresent(".picker-From")
            .verify.elementPresent(".picker-To")
            .verify.value('.picker-From','KILO')
            .verify.value('.picker-To','GRAM')
             .click(`.picker-From option[value="GRAM"]`)
             .verify.value('.picker-From','GRAM')
             .verify.value('.picker-To','KILO')
             .click(`.picker-To option[value="GRAM"]`)
             .verify.value('.picker-From','KILO')
             .verify.value('.picker-To','GRAM')
             .end()
    },
    'Conversions should be correct': function(browser){
        browser
            .url(browser.launch_url)
            .verify.elementPresent(".input-weight")
            .verify.elementPresent(".output-weight")
            .setValue('.input-weight', '1')
            .verify.value('.output-weight','1000')
            .end()
    },
    'conversions should be done for any pattern': function(browser){
        browser 
            .url(browser.launch_url)
            .verify.elementPresent(".picker-From")
            .verify.elementPresent(".picker-To")
            .verify.elementPresent(".input-weight")
            .verify.elementPresent(".output-weight")
            .click(`.picker-From option[value="POUND"]`)
            .setValue('.input-weight', '2')
            .verify.value('.output-weight','906')
            .click(`.picker-From option[value="GRAM"]`)
            .verify.value('.picker-To','POUND')
            .verify.value('.output-weight','0.004')
            .end()
    }
}