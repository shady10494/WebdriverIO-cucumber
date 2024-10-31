import { Before, After } from '@cucumber/cucumber';

// Launches the app if it is not running
Before(async () => {    
        // Querying the app state
        const appState = await browser.execute('mobile: queryAppState', { appId: 'com.saucelabs.mydemoapp.rn' });
        // appState, 4 means app is in foreground
        if (appState !== 4) {
            await browser.execute('mobile: activateApp', { appId: 'com.saucelabs.mydemoapp.rn' });
        }
    }
);

// Terminate the app after each test
After(async () => {
    await browser.execute('mobile: terminateApp', { appId: 'com.saucelabs.mydemoapp.rn' });
});