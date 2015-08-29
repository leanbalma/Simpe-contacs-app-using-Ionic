'use strict';

describe('Controller: CallcontactCtrl', function () {

  // load the controller's module
  beforeEach(module('simpleContacsAppUsingIonicApp'));

  var CallcontactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CallcontactCtrl = $controller('CallcontactCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
