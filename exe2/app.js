var app = angular.module('myApp', []);

app.controller('SalarioController', function() {

  this.salario = 100;

  this.calculaImposto = function(salario) {
	if(salario < 2000){
		return 0.1*salario;
	} else if(salario >= 2000 && salario <= 3500){
		return 0.2*salario;
	} else if(salario > 3500){
		return 0.3*salario;
	}
  };

});
