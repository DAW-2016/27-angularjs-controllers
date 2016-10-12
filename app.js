var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };


  this.celsiusToFahrenheit = function(celsius){
  	answer = celsius*1.8+32;
  	if(isNaN(answer)){
  		return 0;
  	}
  	else{
  		return answer;
  	}
  }

});

app.controller('impostoController', ['$scope', function($scope) {

    $scope.salario = 2000;


    $scope.calculaImposto = function() {

        if($scope.salario < 2000){
            return $scope.salario * 0.1;
        }
        else if($scope.salario >= 2000 && $scope.salario <= 3500){
            return $scope.salario * 0.2;
        }

        return $scope.salario * 0.3;

    };

}]);

app.controller('reviewController', ['$scope', function($scope) {

    $scope.numeroEstrelas = 1;
    $scope.comentarioAtual = "";
    $scope.comentarios = [];

    $scope.envia = function(){

        $scope.comentarios.push($scope.comentarioAtual);
        $scope.comentarioAtual = "";
        console.log($scope.comentarios);
    }
}]);

app.controller('contactController', ['$scope', function($scope) {

    $scope.contatos = [];

    $scope.contato = {};
    $scope.contato.nome = "";
    $scope.contato.telefone = "";
    $scope.contato.email = "";
    $scope.contato.idn = -1;

    $scope.numeroContatos = 0;

    $scope.deleta = function (deleteId) {

        var index = $scope.contatos.indexOf(deleteId);

        $scope.contatos[index] = null;
    };


    $scope.carregaFormulario = function (alteraId) {

        var index = $scope.contatos.indexOf(alteraId);
        var alterando = $scope.contatos[index];

        $scope.contato.nome = alterando.nome;
        $scope.contato.telefone = alterando.telefone;
        $scope.contato.email = alterando.email;
        $scope.contato.idn = alterando.idn;
    }

    $scope.altera = function (){

        console.log($scope.contato.idn);

        if(($scope.contato.idn != -1)){

            var copy = Object.assign({}, $scope.contato);

            $scope.contatos[$scope.contato.idn].nome = copy.nome;
            $scope.contatos[$scope.contato.idn].telefone = copy.telefone;
            $scope.contatos[$scope.contato.idn].email = copy.email;

            $scope.contato.nome = "";
            $scope.contato.telefone = "";
            $scope.contato.email = "";
            $scope.contato.idn = -1;
        }
    }

    $scope.envia = function(){

        $scope.contato.idn = $scope.numeroContatos;
        var copy = Object.assign({}, $scope.contato);

        $scope.numeroContatos++;
        $scope.contato.nome = "";
        $scope.contato.telefone = "";
        $scope.contato.email = "";
        $scope.contato.idn = -1;
        $scope.contatos.push(copy);

        //console.log($scope.contato);
    }
}]);
