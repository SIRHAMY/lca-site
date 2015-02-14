'use strict';

/* Services */

angular.module('brosearchServices', ['ngResource']).
    factory('Brother', function($resource){
  return $resource('bro-search/app/activebrothers/:brotherId.json', {}, {
    query: {method:'GET', params:{brotherId:'brothers'}, isArray:true}
  });
});
