angular.module('myApp', [])
  .controller('dropDownController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope,$http) {
    var self = this;
    // demo server json data
    $http.get('./js/driver.json')
       .then((res)=>{
          self.values = res.data;                
        });
    //header msg
    self.greetings = 'Drop Down';
  }])
  //drop down simple directive
  .directive('dropdown', function () {
    return {
      restrict: 'E',
      scope: {
        list: '='
      },
      template: '<div class="dropdown">\
      <button class="dropbtn">Select Driver / Paird Vehicle</button>\
      <div class="dropdown-content">\
      <a data-ng-repeat="i in data track by $index" data-ng-mouseover="showModal(i)" >\
      {{i.driver.name}} / {{i.car.vehicle_number}}</a>\
      <div data-ng-class="{alpha: alpha}" class="popover__content">\
      <ul class="car-driver-ul"><li data-ng-if="selected.driver.id"><p class="popover__message">{{selected.driver.title}}</p>\
      <img class="prof-Image" data-ng-src="{{selected.driver.driver_image}}"><span class="popover__message">{{selected.driver.name}}</span><br><span class="popover__message">{{selected.driver.phone}}</span></li>\
      <li data-ng-if="selected.car.id"><p class="popover__message">{{selected.car.title}}</p>\
      <img class="prof-Image" data-ng-src="{{selected.car.vehicle_image}}"><span class="popover__message">{{selected.car.vehicle_number}}</span><br><span class="popover__message">{{selected.car.vehicle_class}}</span></li>\
      </div>\
      </div></div>',
      controller: function ($scope) {
        $scope.data = $scope.list;
        $scope.selected = '';
        $scope.alpha = false;
        // on hover getting the data from html
        $scope.showModal = function (hoverData) {
          $scope.alpha = true
          $scope.selected = hoverData;
          var myEl = angular.element(document.querySelector('#popC'));
          myEl.addClass('showPop');
        }
      }
    }
  });