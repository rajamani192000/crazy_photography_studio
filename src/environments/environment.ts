/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  firebase: {
    projectId: 'crazy-photography-studio',
    appId: '1:63941217708:web:f42b938fe194b8d0187e09',
    storageBucket: 'crazy-photography-studio.appspot.com',
    apiKey: 'AIzaSyCwYqoyqo8XphdZRnV_QdPdcEhH9UTx7bw',
    authDomain: 'crazy-photography-studio.firebaseapp.com',
    messagingSenderId: '63941217708',
    measurementId: 'G-TVNVR691CE',
  },
  production: false,
};
