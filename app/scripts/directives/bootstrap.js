'use strict';
var app = angular.module('mookApp');

app.directive('tab', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
			element.on('click', function(event){
    		event.preventDefault();
    		showTab(this);
    	});
    	scope.$watch(attrs.tabDefault, function(value){
    		if(value) { showTab(element); }
    	});
    	scope.$watch(attrs.tabActive, function(value){
    		if(value) { showTab(element); }
    	});
    	function showTab(tabEl){
    		$(tabEl).tab('show');
    	}
    }
  };
});

app.directive('tooltip', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			scope.$watch(attrs, function(){
				var options = attrs.tooltip || {};
				$(element).tooltip(options);
			});
		}
	};
});

app.directive('popover', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var options = attrs.popover || {};
			$(element).popover(options);
		}
	};
});

app.directive('modal', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			
		}
	}
})
