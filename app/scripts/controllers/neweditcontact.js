'use strict';

/**
 * @ngdoc function
 * @name simpleContacsAppUsingIonicApp.controller:NeweditcontactCtrl
 * @description
 * # NeweditcontactCtrl
 * Controller of the simpleContacsAppUsingIonicApp
 */
angular.module('simpleContacsAppUsingIonicApp')
  .controller('NeweditcontactCtrl', function ($scope, $state, ContactsManager) {

    $scope.contact = ContactsManager.getSharedContact();

    $scope.submit = function() {
      ContactsManager.addContact( $scope.contact );
      $state.go('main');
    };

  });
