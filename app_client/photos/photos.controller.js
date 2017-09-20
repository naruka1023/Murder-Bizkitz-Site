
  
angular.module('loc8rApp')
.controller('photosCtrl', ['$scope', "$rootScope", "$http",function ($scope, $rootScope, $http) {
  var vm = this;
  vm.images = [];
	vm.photosImages = [];
	$rootScope.bg = "photosImage";
   $http({
        method : "GET",
        url : "/photoList"
    }).then(function mySuccess(response, err) {
				vm.photosImage = response.data;
				var id = 1;
				vm.photosImage.forEach(function(element) {
					vm.images.push({
						id : id,
						url : "images/photos/" + element
					});
					id++;
				}, this);
				id = 0;
				console.log(vm.photosImage);
    }, function myError(response) {
		
    });

 vm.ima2ges = [
	{
		id : 1,
		title : 'This is <b>amazing photo</b> of <i>nature</i>',
		alt : 'amazing nature photo',
		url : 'images/background/guest.png',
	},
	{
		id : 2,
		url : 'images/background/contacts.png',
		deletable : true,
	},
	{
		id : 3,
		url : 'images/background/infopage.png'
	},
	{
		id : 4,
		url : 'images/background/links.png',
		deletable : true,
	},
	{
		id : 5,
		url : 'images/background/photos.png'
	},
	{
		id : 6,
		url : 'images/background/tour.png',
		deletable : true,
	}
];


  }]);

 