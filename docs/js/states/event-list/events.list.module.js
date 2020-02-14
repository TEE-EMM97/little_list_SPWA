(function () {
  'use strict';

  angular
    .module('eventsListState', [
      'ui.router',
      'ngAnimate'
    ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('events_list', {
          cache: false,
          url: '/events_list',
          templateUrl: 'js/states/event-list/events.list.html',
          controller: 'eventsListCtrl as vm'
        })
    });
})();
