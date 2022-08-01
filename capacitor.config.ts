import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kepcheapp.tr',
  appName: 'Kepche App',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      orientation: 'portrait',
      ScrollEnabled: 'false',
      'android-minSdkVersion': '24',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      ShowSplashScreenSpinner: 'false',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      ParseAppId: 'HesQzHYmUZ7pQkzubYfcS4gaMo6xIhZObbCvmN8o',
      ParseServerUrl: 'https://parseapi.back4app.com/',
      ParseMultiNotifications: 'true',
      ParseNotificationIcon: 'androidnotificationicon'
    }
  }
};

export default config;
