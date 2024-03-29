'use strict';

describe('Directive: force', function () {

  // load the directive's module and view
  beforeEach(module('megaApp'));
  beforeEach(module('app/force/force.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<force></force>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the force directive');
  }));
});