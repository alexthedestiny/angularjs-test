'use strict';

angular.
  module('user')
  .directive('columnCard', function () {
    return {
      restrict: 'E',
      template: require('./column-card.template.html'),
      scope: {
        object: '='
      },
      controller: ['$scope', '$rootScope', '$timeout',
        function($scope, $rootScope, $timeout) {

        }]
    };
  });
