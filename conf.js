exports.config = {
    framework: 'jasmine',
    specs: ['src/test/BBCRegistrationTest.js'],
    directConnect: true,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        isVerbose: true
    },

    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');

        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return Buffer.from(png, 'base64')
                },'image/png')();
                done();
            })
        });
    }


}