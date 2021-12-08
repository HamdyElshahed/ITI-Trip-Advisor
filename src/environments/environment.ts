// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,

  // Your web app's Firebase configuration
   // Your web app's Firebase configuration
   firebase:{
    apiKey: "AIzaSyDh_ZXzbC-zsDUQ3ty-KsYPiH0qwAfJrCQ",
    authDomain: "iti-trip-advisor.firebaseapp.com",
    projectId: "iti-trip-advisor",
    storageBucket: "iti-trip-advisor.appspot.com",
    messagingSenderId: "519761318248",
    appId: "1:519761318248:web:4335666868b0d9b836c6dd"
  },
  location:{

    address1: "",
    address2: "",
    address3: "",
    city: "New York",
    zip_code: "",
    country: "US",
    state: "",
    display_address: [
      "",
      ""
    ]

}
};

var location:Location;

export function setLocation(loction:Location) {
  location=loction;
}

export function getLocation(){
  return location==undefined?environment.location:location;
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
