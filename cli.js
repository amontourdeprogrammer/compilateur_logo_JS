var compilateur = require('./compilateurLogo.js');
var fs = require('fs');
var content = require('./template.js');
var prompt = require('prompt');
var userInput = [];
// var inputFile = process.argv[2];
//
// fs.readFile(inputFile, 'utf8', function(err, codeLogo) {
// 	var instructions = compilateur.CompilateurLogo(codeLogo);
// 	console.log(content(instructions));
// });

	var schema = {
		properties : {
			mot: {
				pattern: /^[a-z]/,
				message: "must be 'av' or 'td'",
				required: true
			},
			pas: {
				pattern: /^[1-9]/,
				message: "must be a number between 1 and 200 ",
				required: true
			},
		}
	};
var i = 0;
function nextPrompt(){
	prompt.get(schema, function (err, result){
		userInput.push(result.mot+' '+ result.pas);
		console.log(userInput);
		i= i+1;
		if (i<4){
			nextPrompt();
		} else {
			return userInput
		};
});
};

prompt.start();
prompt.get(schema, function (err, result){
	userInput.push(result.mot+' '+ result.pas);
	console.log(userInput);
	nextPrompt();
	});
