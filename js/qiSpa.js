angular.module('myApp',[])
.controller('dropDownController',['$scope','$rootScope',function($scope,$rootScope){
    var self = this;
    self.values = [{
        "driver":{
            "title":"DRIVER",
            "name":"Li Nanxing",
            "phone":"+6594457422"
        },
        "car":{
            "title":"VEHICLE",
            "vehicle_number" :"SGD1234F",
            "vehicle_class":"Lamborghini Aventador"
        }
        },
        {
            "driver":{
                "title":"DRIVER",
                "name":"Li Yinzhu",
                "phone":"+6594457422"
            },
            "car" :{
    
            }
        },{
          "driver" :{
    
          },
          "car":{
            "title":"VEHICLE",
            "vehicle_number" :"LKK1200F",
            "vehicle_class":"Jaguar"
        }
        }];
    console.log('Loading Controller...');
    self.greetings = 'Hello world';
    }])