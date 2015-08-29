'use strict';

/**
 * @ngdoc overview
 * @name simpleContacsAppUsingIonicApp
 * @description
 * # simpleContacsAppUsingIonicApp
 *
 * Main module of the application.
 */
angular
  .module('simpleContacsAppUsingIonicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ionic'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('newEditContact', {
      url: '/newEditContact', 
      templateUrl: 'views/neweditcontact.html',
      controller: 'NeweditcontactCtrl'
    })
    .state('callContact', {
      url: '/callcontact',
      templateUrl: 'views/callcontact.html',
      controller: 'CallcontactCtrl'
    });

  });
