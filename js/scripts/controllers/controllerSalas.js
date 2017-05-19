pokerApp.controller("controllerSalas", function($scope, $rootScope) {

    $scope.salas = [
        { id: 1, nome: "Sala 1", privacidade: "Público", qtd: "0/10", select: "false" },
        { id: 2, nome: "Sala 2", privacidade: "Privado", qtd: "0/10", select: "false" },
        { id: 3, nome: "Sala 3", privacidade: "Privado", qtd: "0/10", select: "false" },
        { id: 4, nome: "Sala 4", privacidade: "Público", qtd: "0/10", select: "false" }
    ];

    $scope.SelecionaSala = function(id) {
        $scope.salas.forEach(function(element, id) {
            element.select = element.id == id ? 'true' : 'false';
        }, this, id);
    }

});