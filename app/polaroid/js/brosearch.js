'use strict';

/* App Module */

angular.module('brosearch', ['brosearchFilters', 'brosearchServices']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/brothers', {templateUrl: 'bro-search/app/partials/brother-list.html',   controller: BrotherListCtrl}).
        when('/brothers/:brotherId', {templateUrl: 'bro-search/app/partials/brother-detail.html', controller: BrotherDetailCtrl}).
        otherwise({redirectTo: '/brothers'});
}]);
