'use strict';

angular.module('App.controllers')
    .controller('AboutController', ['$scope', function($scope) {
            var contacts = [{
                type: 'gmail',
                icon: 'fa-envelope',
                url: 'mailto:jigneshhk1992@gmail.com'
            },{
                type: 'github',
                icon: 'fa-github-alt',
                url: 'https://github.com/bitshadow'
            },{
                type: 'twitter',
                icon: 'fa-twitter',
                url: 'https://twitter.com/bitshadow'
            },{
                type: 'linkedin',
                icon: 'fa-linkedin',
                url: 'https://in.linkedin.com/pub/jignesh-kakadiya/3a/170/523'
            }];

            var work = {
                name: 'InMobi',
                url: 'https://www.inmobi.com'
            }

            $scope.work = work;
            $scope.contacts = contacts;
        }]);
