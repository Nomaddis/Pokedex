'use strict';

let app = angular.module('pokedex', []);

app.controller("PokedexController", function ($scope, $http) {
    //TODO loader for deatils
    //TODO ajax spinner for "Load more"

    /**
     * load pokemons from API
     */
    $http({
        method : "GET",
        url : "https://pokeapi.co/api/v1/pokemon/?limit=12"
    }).then(function mySuccess(response) {
        $scope.pokemons = response.data.objects;
        // console.log(response.data);
    }, function myError(response) {
        $scope.error = response.statusText;
    });
    /**
     * load more stats about selected pokemon
     *
     */
    $scope.isDetail = false;
    $scope.showMoreStats = function (id) {
        $scope.isDetail = true;
        $http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(function (response) {
                $scope.poke = response.data;
                // console.log($scope.poke);
            });
    };

    $scope.addImg = function(id) {
        // return `https://pokeapi.co/media/img/${id}.png`; don`t work before loading in browser/problems with HEADER maybe
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    };

    /**
     * load more pokemons when click button
     */
    let ajax = {};
    ajax.pokemonsStok = function(paginationNo) {
        return $http({
            method: 'GET',
            url: 'https://pokeapi.co/api/v1/pokemon/?limit=12' + '&offset=' + paginationNo
        }).then(function(response) {
            return response;
        });
    };
    $scope.paginationNo = 0;
    $scope.loadMorePokemons = function() {
        $scope.paginationNo += 12;
        ajax.pokemonsStok($scope.paginationNo).then(function(res) {
            console.log(res);
            $scope.pokemons = (typeof $scope.pokemons !== 'undefined') ? $scope.pokemons.concat(res.data.objects) : res.data.objects;
        });
    };

});