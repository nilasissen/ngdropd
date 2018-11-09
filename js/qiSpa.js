angular.module('myApp', [])
  .controller('dropDownController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope,$http) {
    var self = this;
    // demo server json data where i have kept the driver and car json
    $http.get('./js/driver.json')
       .then((res)=>{
         if(res) {
          self.values = res.data;                
         }
        });
    //header msg
    self.greetings = 'Drop Down';
    // boradcasting an event to hide popover
    self.hide = function() {
      $rootScope.$broadcast('alphaFalse', false);
    }
  }])
  //drop down simple directive
  .directive('dropdown', function () {
    return {
      restrict: 'E',
      scope: {
        list: '='
      },
      template: '<div class="dropdown" >\
      <button class="dropbtn"> {{ selectedValue || "Select Driver / Paird Vehicle" }}</button>\
      <div class="dropdown-content">\
      <a data-ng-repeat="i in data track by $index" data-ng-click="selectValue(i)"  data-ng-mouseover="showModal(i)" >\
      {{i.driver.name}} / {{i.car.vehicle_number}}</a>\
      </div></div><div data-ng-class="{alpha: alpha}" class="popover__content">\
      <ul class="car-driver-ul"><li data-ng-if="selected.driver.id"><p class="popover__message">{{selected.driver.title}}</p>\
      <img class="prof-Image" data-ng-src="{{selected.driver.driver_image}}"><span class="popover__message">{{selected.driver.name}}</span><br><span class="popover__message">{{selected.driver.phone}}</span></li>\
      <li data-ng-if="selected.car.id"><p class="popover__message">{{selected.car.title}}</p>\
      <img class="prof-Image" data-ng-src="{{selected.car.vehicle_image}}"><span class="popover__message">{{selected.car.vehicle_number}}</span><br><span class="popover__message">{{selected.car.vehicle_class}}</span></li></ul>\
      </div>',
      controller:  ($scope) => {
        $scope.data = $scope.list;
        $scope.selected = '';
        $scope.selectedValue = '';
        // this variable will be used to show hide the popover
        $scope.alpha = false;
        // receiving event and hiding the popover
        $scope.$on('alphaFalse',(ev,v) => {
          $scope.alpha = false;
        })
        // on hover getting the data from html
        $scope.showModal = (hoverData) => {
          $scope.alpha = true
          $scope.selected = hoverData;
          var myEl = angular.element(document.querySelector('#popC'));
          myEl.addClass('showPop');
        }
        // to get selected value
        $scope.selectValue = (v) => {
          $scope.alpha = false;
          $scope.selectedValue = v.driver.id ? v.driver.name: '-' + '/' + v.car.id ?  v.car.vehicle_number : '-';
          
        }
      }
    }
  });