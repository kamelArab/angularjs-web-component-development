// menu item UI component

(function () {
    "use strict";

    var tpl = '';
    //@import "../../build/src/MenuItem/MenuItem.tpl.js";

    angular.module('uiComponents.menuItem', [])
        // a simple menu item component directive
        .directive('uicMenuItem', [function(){
            return {
                // replace custom element with html5 markup
                //template: '<li class="uic-menu-item" ng-class="disablable">' +
                    // note the use of ng-bind vs. {{}} to prevent any brief flash of the raw template
                //    '<a ng-href="{{ url }}" ng-bind="text" ng-click="selected($event, this)"></a>' +
                //    '</li>',
                template: tpl,
                replace: true,

                // restrict usage to element only
                restrict: 'E',

                // new isolate scope
                scope: {
                    // attibute API for menu item text
                    text: '@',
                    // attribute API for menu href URL
                    url: '@'
                },
                controller: ['$scope', function($scope, $element, $attrs){

                    // the default for the "disabled" API is enabled
                    $scope.disablable = '';

                    // called on ng-click
                    $scope.selected = function($event, scope){

                        // published API for selected event
                        $scope.$emit('menu-item-selected', scope);

                        // prevent the browser behavior for an anchor element click
                        $event.preventDefault();
                        $event.stopPropagation();

                        // optionally perform some other actions before navigation
                    };
                }],
                link: function(scope, iElement, iAttrs){

                    // add the Bootstrap "disabled" class if there is no url
                    if(!scope.url) scope.disablable = 'disabled';
                }
            };
        }]);
})();
