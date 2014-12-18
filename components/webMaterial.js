var webMaterial = angular.module("webMaterial",[]);

webMaterial.directive("headWebMaterial",function(){
	var directive = {};
	directive.restrict="E";
	directive.templateUrl = "components/partial/_head.html";
	return directive;
});
/*webMaterial.service("serviceMaterial",function(){
	return {
		digaOla: function(){
			alert("Ola");
		}
	}
});*/