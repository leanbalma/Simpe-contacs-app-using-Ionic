'use strict';

describe('Controller: NeweditcontactCtrl', function () {

  // load the controller's module
  beforeEach(module('simpleContacsAppUsingIonicApp'));

  var NeweditcontactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NeweditcontactCtrl = $controller('NeweditcontactCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
