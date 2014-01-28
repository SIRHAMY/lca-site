'use strict';

/* App Module */

angular.module('lca-site', ['brosearch']).
  config(function($routeProvider) {
  $routeProvider
      .when('/',
      {
          controller: 'PageCtrl',
          templateUrl: 'partials/home.html'

      })
      .when('/aboutus',
      {
          controller: 'PageCtrl',
          templateUrl: 'partials/aboutus.html'
      })
      .when('/brothers',
      {
          templateUrl: 'bro-search/app/partials/brother-list.html',
          controller: BrotherListCtrl
      })
      .when('/brothers/:brotherId',
      {
          templateUrl: 'bro-search/app/partials/brother-detail.html',
          controller: BrotherDetailCtrl
      })
      .when('/media',
      {
          templateUrl: 'polaroid/fullscreen.html',
          controller: 'PageCtrl'
      })

      .otherwise({redirectTo: '/' });
    });
