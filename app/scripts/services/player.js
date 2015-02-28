'use strict';

/**
 * @ngdoc service
 * @name projApp.player
 * @description
 * # player
 * Factory in the projApp.
 */
angular.module('projApp')
  .factory('Players', function ($resource) {
        var Players = $resource('/players/:id', {id: '@id'}, {
            'save'  : {method: 'POST'},
            'query' : {method: 'GET', isArray: true},
            'update': {method: 'PUT'},
            'delete': {method: 'DELETE'}
        });
        Players.newInstance = function (data) {
            if (typeof data === 'undefined') data = {};

            var ins             = new this(data);
            ins.champion        = [];
            return ins;
        };
        angular.extend(Players.prototype, {
            'id'        : null,
            'champion'  : [],
            'name'      : '',
            'surname'   : '',
            //'errors'    : {},
            toggleCheck : function (organization) {
                var champion = this.champion;
                if (champion.indexOf(organization) === -1) {
                    champion.push(organization);
                } else {
                    champion.splice(champion.indexOf(organization), 1);
                }
                this.champion = champion;
            }

        });

        return Players
  });
