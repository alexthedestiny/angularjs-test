'use strict';

angular.
  module('user').
  component('user', {
    template: require('./user.template.html'),
    controller: ['$scope', '$rootScope', '$filter', '$state', '$stateParams',
      function UserComponentController($scope, $rootScope, $filter, $state, $stateParams) {

      }
    ]
  });
