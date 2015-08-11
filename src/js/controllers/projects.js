'use strict';

angular.module('App.controllers')
    .controller('ProjectsController', ['$scope', function($scope) {
            var projects = [{
                key: 'iconate.js',
                url: 'http://bitshadow.github.io/iconate/'
            }, {
                key: 'Slate',
                url: 'http://bitshadow.github.io/slate/'
            }, {
                key: 'Organizations',
                url: 'http://openorgs.herokuapp.com/'
            }, {
                key: 'Scrollpad',
                url: 'https://github.com/bitshadow/ScrollPad'
            }, {
                key: 'PatchViewer',
                url: 'https://github.com/bitshadow/PatchViewer'
            }, {
                key: 'Chit-Chat',
                url: 'https://github.com/bitshadow/Chit-Chat'
            }, {
                key: 'Jemblem',
                url: 'https://github.com/bitshadow/Jemblem'
            }];

            var contributions = [{
                key: 'Mozilla Firefox',
                url: 'https://github.com/neonux/mozilla-all/commits/mozilla-central?author=bitshadow'
            }, {
                key: 'KDE',
                url: 'http://quickgit.kde.org/?p=kdelibs.git&a=search&h=6ae50bc428b8fa8a482c6322764378671b45bd8b&st=committer&s=Jignesh+kakadiya'
            }, {
                key: 'React JS',
                url: 'http://facebook.github.io/react/acknowledgements.html'
            }, {
                key: 'Yeoman',
                url: 'https://github.com/yeoman/yeoman-app/commits/master?author=bitshadow'
            }];

            $scope.projects = projects;
            $scope.contributions = contributions;
        }]);

