/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'command-parlour',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase:{
      apiKey: "AIzaSyDN1aU8GKfj88NikN6_W4Fq6l0VQF9JoL4",
      authDomain: "commands-666a2.firebaseapp.com",
      databaseURL: "https://commands-666a2.firebaseio.com",
      storageBucket: "commands-666a2.appspot.com",
      messagingSenderId: "176624601759"

    //  apiKey: "AIzaSyCy0LzlToqLauMj6AwVRzWbMRMBqHu1Q4U",
    //  authDomain: "commands-15dbc.firebaseapp.com",
    //  databaseURL: "https://commands-15dbc.firebaseio.com",
    //  storageBucket: "commands-15dbc.appspot.com",
    //  messagingSenderId: "876159590362"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
