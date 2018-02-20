'use strict';


angular.
module('user').
  config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('user.index', {
            /* The Index State */
            url: '/',
            params : {
                openHeader: true
            },
            views: {
                'content': {
                    template: '<index-page></index-page>'
                }
            }
        })
      }
]);
