/*
 *
	Fix the call of the function printTwoPeople in the row 24 and pass the parameter(s) correctly into its declaration to make it print out my and Evan data.

	Ps: don't change anything in the rows 16-17
			Don't invert any row of code
			Don't add or remove any rows of code at all
*/

var firstPerson = {firstName: 'dario', lastName: 'cipolla'};

var printTwoPeople = (function(){
  var firstPerson = {name: 'wrong data'};
  var anotherPerson = {name: 'wrong data'};
  return (function(){
    return function() {
     $('#first-person').html(JSON.stringify(firstPerson));
     $('#second-person').html(JSON.stringify(anotherPerson));
    }
  })();
});

(function(){
  var secondPerson = {firstName: 'evan', lastName: 'burbidge'};
  printTwoPeople();
  var firstPerson = {};
})();
