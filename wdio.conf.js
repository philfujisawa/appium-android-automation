export const config = {
    runner: 'local',
    port: 4723,
    specs: [
      './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
      platformName: 'Android',
      'appium:deviceName': 'Pixel 8 API 34',
      'appium:platformVersion': '14',
      'appium:app': 'C:\\Development\\study\\appium-android-automation\\app\\Android-MyDemoAppRN.1.3.0.build-244.apk',
      'appium:automationName': 'UiAutomator2',
      'appium:shouldTerminateApp': false
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: [
      ['appium', {
        command: 'appium',
        args: {
          address: '127.0.0.1',
          port: 4723
        }
      }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
};
  