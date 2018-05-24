(function (_) {

    angular.module('pokedex.controllers', [])
        .controller("PokedexController", function ($scope, $http) {

            $http({
                method : "GET",
                url : "https://pokeapi.co/api/v1/pokemon/?limit=12"
            }).then(function mySuccess(response) {
                $scope.pokemons = response.data.objects;
                // console.log($scope.pokemons);
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
            });

            // $scope.GETIMG = function (id) {
            //     $http({
            //         method : "GET",
            //         url : `http://pokeapi.co/media/img/${id}.png`
            //     }).then(function mySuccess(response) {
            //         return data;
            //     }, function myError(response) {
            //         $scope.myWelcome = response.statusText;
            //     });
            // };

            $scope.getImage = function () {
                return this.$http.get(`http://pokeapi.co/media/img/23.png`, {responseType: "blob"});
            };

            $scope.myFunction = function(id) {
                return `https://pokeapi.co/media/img/${id}.png`;
            }
        })

})(_);
