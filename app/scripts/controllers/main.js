'use strict';

/**
 * @ngdoc function
 * @name simpleContacsAppUsingIonicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleContacsAppUsingIonicApp
 */
angular.module('simpleContacsAppUsingIonicApp')
  .controller('MainCtrl', function ($scope, $state, ContactsManager) {

    $scope.contacts = ContactsManager.getContactsList();

    $scope.editContact = function() {
      $state.go('newEditContact');
    };

    $scope.deleteContact = function(contact) {
      $scope.contacts = ContactsManager.removeContact(contact);
    };

  });
