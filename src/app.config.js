'use strict';

angular.
  module('angularTestTask').
    config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$qProvider',
      function config($locationProvider, $stateProvider, $urlRouterProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
        // $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise("/#/");
        $stateProvider
          .state('user', {
            /* The Root State */
            url: '',
            views: {
              '': {
                  abstract: true,
                  template: '<user></user>'
              },
              'header@root': {
              },
              'footer@root': {
              }
            }
          })
        }
      ]);
