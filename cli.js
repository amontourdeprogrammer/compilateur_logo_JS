var compilateur = require('./compilateurLogo.js');
var fs = require('fs');
var content = require('./template.js');
var prompt = require('prompt');
var outputFile = process.argv[2];
var userInput = [];

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
		i= i+1;

		if (i<2){
			nextPrompt();

		} else {
				var instructions = compilateur.CompilateurLogo(userInput);
				fs.writeFile(outputFile, content(instructions), function(err){
					if (err) throw err;
					console.log('File written');
				});
		};
});
};

prompt.start();
prompt.get(schema, function (err, result){
	userInput.push(result.mot+' '+ result.pas);
	nextPrompt();
	});
