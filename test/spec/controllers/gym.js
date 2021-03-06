'use strict';

describe('Controller: GymCtrl', function () {

  // load the controller's module
  beforeEach(module('projApp'));

  var GymCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GymCtrl = $controller('GymCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
