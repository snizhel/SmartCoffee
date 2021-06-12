// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: 'http://127.0.0.1:8080/',
  firebase: {
    apiKey: 'AIzaSyC_1LGV9jt4opsMMxr2kReCddFKK_5-GvQ',
    authDomain: 'smartcoffee-3fc65.firebaseapp.com',
    databaseURL:
      'https://smartcoffee-3fc65-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'smartcoffee-3fc65',
    storageBucket: 'smartcoffee-3fc65.appspot.com',
    messagingSenderId: '724721160170',
    appId: '1:724721160170:web:f20e0f75c3f258858a6c93',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
