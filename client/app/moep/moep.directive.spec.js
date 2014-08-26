'use strict';

describe('Directive: moep', function () {

  // load the directive's module
  beforeEach(module('megaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<moep></moep>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the moep directive');
  }));
});