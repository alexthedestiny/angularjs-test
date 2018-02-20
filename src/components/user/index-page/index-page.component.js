'use strict';

angular.
  module('indexPage')
  .component('indexPage', {
    template: require('./index-page.template.html'),
    controller: ['$scope', '$rootScope', '$filter',
      function IndexPageController($scope, $rootScope, $filter) {
        $scope.previewData = [];
        $scope.previewPaginationData = [];
        $scope.currentPage = 1;
        $scope.filterPages = function(data, count, currentPage) {
          angular.forEach(data, function(value,key) {
            if(key < currentPage*count && key >= (currentPage*count)-count) {
              $scope.previewPaginationData.push(value);
            }
            return;
          });
        };
        $scope.pageChanged = function() {
          $scope.previewPaginationData = [];
          $scope.filterPages($scope.previewData, 6, $scope.currentPage);
        }
        $scope.changeSearchingPictures = function(sp) {
          $scope.searchPictures = sp;
        };
        reddit.top("aww").t("day").limit(24).fetch(function(res) {
          $scope.receivedData = res.data.children;
          for(let i = 0; i < $scope.receivedData.length; i++) {
            $scope.previewData.push($scope.receivedData[i].data);
          }
          $scope.filterPages($scope.previewData, 6, $scope.currentPage);
          $scope.$apply();
        });
      }]
  });
