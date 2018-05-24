(function () {

    angular.module('pokedex.directives', [])
    .directive('pokemonImage', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-img.html'
        };
    })


})();