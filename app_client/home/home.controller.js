
  
angular.module('loc8rApp')
.controller('homeCtrl', ['$scope', "$rootScope",function ($scope, $rootScope) {
 var vm = this;
    $rootScope.bg = "backgroundImage";
    vm.hovered = function(buttonClass, buttonFlag){
      var button = buttonClass.replace(".", "");
      if(buttonFlag){
        button = button.replace("Button", "Animated.gif");
      }else{
        button = button.replace("Button", ".png");
      }
        var url = "images/Buttons/" + button;
       $(buttonClass).attr("src", url);
    };
    vm.carname = "Volvo";
     {/**/}

  }])