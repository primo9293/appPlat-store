// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api : 'http://platzi-store.herokuapp.com/products/',
  firebase : {
    apiKey: 'AIzaSyA3AVq76A8SSaq8Y0uq5hVciYqflYjxa2A',
    authDomain: 'platz-store.firebaseapp.com',
    databaseURL: 'https://platz-store.firebaseio.com',
    projectId: 'platz-store',
    storageBucket: 'platz-store.appspot.com',
    messagingSenderId: '1014650095340',
    appId: '1:1014650095340:web:72937086ac1cf993e547c9'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
