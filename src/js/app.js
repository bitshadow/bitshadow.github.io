'use strict';

angular.module('App', ['ui.router', 'ngMaterial', 'App.controllers'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');

        $stateProvider
            .state('projects', {
                url: '/projects',
                templateUrl: 'partials/projects.html',
                controller: 'ProjectsController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'partials/about.html',
                controller: 'AboutController'
            });
    });