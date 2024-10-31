const isAndroid = () => process.env.PLATFORM === 'android'

export const config = {
    runner: 'local',
    hostname: '127.0.0.1',
    port: 4723, 
    path: '/',
    specs: [
        './features/*.feature'
    ],

    capabilities: [
        {
            platformName: process.env.PLATFORM,
            'appium:platformVersion': isAndroid() ? '10.0' : '##.#',
            'appium:app':isAndroid() ? './app/android/test.apk' : './app/ios/test.app',
            'appium:automationName': isAndroid() ? 'UIAutomator2' : 'XCUITest',
            'appium:deviceName': isAndroid() ? 'Redmi note 5 pro' : 'iPhone ##',
            'appium:udid': isAndroid() ? '48da58a8' : 'ios-device-udid'
        },
    ],
    maxInstancesPerCapability: 1,
    logLevel: 'info',
    framework: 'cucumber',
    cucumberOpts: {
        require: [
            './cucumber/hooks/hooks.ts',
            './cucumber/step-definitions/steps.ts'
        ], 
        timeout: 60000,
    },
    services: ['appium'],
    appium: {
        command: 'appium',
    },
    tsConfigPath: './tsconfig.json',
    reporters: [
        [
          'spec',
          {
            showPreface: false,
          },
        ],
    ],
};