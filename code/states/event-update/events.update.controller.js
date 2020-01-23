(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('eventsUpdateCtrl', control);

    control.$inject = [
        '$q',
        '$state',
        'eventsSrvc'
        ];
    
    function control(
        $q,
        $state,
        eventsSrvc
    ) {
        var vm = angular.extend(this, {
            
         });
        

      

        // TODO: Error Handling
        eventsSrvc.updateEvents().then(
            function success (response){
                $state.go('events_list');
                console.log(response.$state);
            },function failure (error){
                alert("Hello! I am an error, would you be so kind to fix me :)");
                console.log(error);
            }
        );
        
        const fakeHttpCall = function(isSuccessful){
            let deferred = $q.defer();

            if(isSuccessful === true){
                deferred.resolve("Great, you successfully resolved the fake $http call");
            }else {
                deferred.reject("Oh no! Something went terribly wrong in your fake $http call");
            }

            return deferred.promise;
        }

        fakeHttpCall(true).then(
            function success(response) {
                alert(`${response}`);
                console.log(response);
            },
            function failure(error){
                alert(`${error}`)
                console.log(error)
            }
        )
    }
})();
