// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  firebase: {
    projectId: 'demo-project',
    appId: '1:953698133289:web:408ee61e80b06972408338',
    storageBucket: 'football-teams-store.appspot.com',
    apiKey: 'AIzaSyA-eg8hT5q4AcqJjiDbQPkOW6lg2xr2GoE',
    authDomain: 'football-teams-store.firebaseapp.com',
    messagingSenderId: '953698133289',
  },
  production: false,
  useEmulators: true,
  apikey: '',
};
