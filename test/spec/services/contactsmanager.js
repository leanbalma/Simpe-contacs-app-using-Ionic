'use strict';

describe('Service: ContactsManager', function () {

  // load the service's module
  beforeEach(module('simpleContacsAppUsingIonicApp'));

  // instantiate service
  var ContactsManager;
  beforeEach(inject(function (_ContactsManager_) {
    ContactsManager = _ContactsManager_;
  }));

  it('should do something', function () {
    expect(!!ContactsManager).toBe(true);
  });

});
