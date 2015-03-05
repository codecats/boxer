'use strict';

/**
 * @ngdoc function
 * @name projApp.controller:PlayerviewCtrl
 * @description
 * # PlayerviewCtrl
 * Controller of the projApp
 */
angular.module('projApp')
    .controller('PlayerViewCtrl', function ($scope, $routeParams, Players, acl, $modal) {
        $scope.acl      = acl;
        $scope.template = {};
        $scope.player   = Players.newInstance();
        $scope.player.$get({id: $routeParams.id}, function () {
            $scope.$root.activeTab += ' ' + $scope.player.name + ' ' + $scope.player.surname;
        });
        $scope.editTemplate = function ($event, player, tplName) {
            if ($scope.template[tplName]) {
                $scope.template[tplName] = null;
            } else {
                $scope.template[tplName] = {url: 'views/fields/' + tplName + '.html'};
            }
        };
        $scope.deleteProfile = function ($event, player) {
            $scope.description = ''
            $modal({
                show: true, prefixEvent: "user.delete",
                scope: $scope, contentTemplate: 'views/confirm/modal.html'
            });
        };
        $scope.$on('user.delete.show',function(e, $modal){
            $modal.$scope.action = function () {
                $modal.$scope.$hide();
                $scope.player.$delete();
            }
        });

        //acl.afterInit = function () {
        //    if (acl.hasAccessResource('BOXERS')) {
        //
        //        $scope.template = {'url': 'views/forms/boxer.html'};
        //    }
        //};
    });
