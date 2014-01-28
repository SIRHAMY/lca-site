'use strict';

/* Controllers */

function NavCtrl($scope, $location) {
        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'active' : '';
        };
    };

function PageCtrl($scope){

}

function BrotherListCtrl($scope, Brother) {
    $scope.brothers = Brother.query();
    $scope.orderProp = 'age';
}

//BrotherListCtrl.$inject = ['$scope', 'Brother'];


function BrotherDetailCtrl($scope, $routeParams, Brother) {
    $scope.brother = Brother.get({brotherId: $routeParams.brotherId}, function(brother) {
        $scope.mainImageUrl = brother.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}





