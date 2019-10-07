exports.config = {
  framework: 'jasmine2',
  directConnect:true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args : ["--no-sandbox"],
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
  },
}}

  
