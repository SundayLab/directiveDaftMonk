'use strict';

angular.module('megaApp')
  .directive('force', function () {
    return {
      templateUrl: 'app/force/force.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });