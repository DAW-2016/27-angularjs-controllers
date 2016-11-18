var app = angular.module('myApp', []);

app.controller('reviewController', function() {

  this.reviews = [];
  this.nota = 0;
  this.comment = "";

  this.adicionaReview = function() {
	this.reviews.push({
          nota: this.nota,
          comment: this.comment
     });
  };

});
