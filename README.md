# **WebdriverIO Mobile Automation Framework with Cucumber**

This project is a WebdriverIO test automation framework using Cucumber, designed for mobile application testing on both Android and iOS platforms.

## **Table of Contents**
- **Installation**
- **Configuration**
- **Running Tests**
- **Mobile Capabilities**
- **Test Reports**

## **Installation**

### **Prerequisites:**
- Node.js (v12 or higher)
- npm
- Appium (Ensure Appium is installed locally)
- Android Studio (for Android testing)
- Xcode (for iOS testing)

### **Clone the repository:**
```bash
git clone https://github.com/shady10494/WebdriverIO-cucumber.git
cd WebdriverIO-cucumber
```

### **Install the dependencies:**
Run the following command to install all necessary dependencies:

```bash
npm install
```

### **Ensure you have Appium installed:**
If Appium is not installed globally, you can install it using the following command:

```bash
npm install-g appium
```
### **Configuration**
The wdio.conf.ts file contains the configuration for running tests on both Android and iOS. The following sections are of particular importance:
#### **Android configuration:**
 The following capabilities are used for running tests on Android devices:

```typescript
capabilities: [{
    platformName: 'Android',
    'appium:platformVersion': '10.0',   // Change this to match your Android version
    'appium:deviceName': 'Your Android Device', // Device name for Android testing
    'appium:app': './app/android/test.apk', // Path to the Android app APK file
    'appium:automationName': 'UIAutomator2', // Automation framework for Android
    'appium:udid': 'your-android-device-udid', // Device ID for the Android device
}]
```

### **iOS Configuration:**
The following capabilities are used for running tests on iOS devices:
```typescript
capabilities: [{
    platformName: 'iOS',
    'appium:platformVersion': '14.0',   // Change this to match your iOS version
    'appium:deviceName': 'iPhone Simulator',  // Device name for iOS testing
    'appium:app': './app/ios/test.app', // Path to the iOS app .app file
    'appium:automationName': 'XCUITest', // Automation framework for iOS
    'appium:udid': 'your-ios-device-udid', // Device ID for iOS testing
}]
```

## **Running Tests**
### **Running Tests on Android**
By default, the tests will run on Android when using the following command:
```bash
npm run test-android
```

### **Running Tests on iOS**
To run the tests on iOS, use the following command:
```bash
npm run test-ios
```

## **Mobile Capabilities**
### **Android Capabilities**

- platformName: 'Android': Specifies that the platform is Android.
- Defines the version of the Android OS being tested.
- Provides the name of the Android device.
- Path to the Android app's .apk file.
- The automation framework used for Android (UIAutomator2).
- The unique device identifier for the Android device.

### **iOS Capabilities**
platformName: 'iOS': Specifies that the platform is iOS.
- Defines the version of the iOS platform being tested.
- Provides the name of the iOS device or simulator.
- Path to the iOS app's .app file.
- The automation framework used for iOS (XCUITest).
- The unique device identifier (UDID) for real devices, used if testing on physical iOS devices.

## **Test Report**
Test results are displayed in the console using the **Spec reporter.** The Spec reporter provides detailed feedback for each test step, showing passed and failed steps directly in the terminal at the end of the test run.