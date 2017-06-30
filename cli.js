var compilateur = require('./compilateurLogo.js');
var fs = require('fs');
var content = require('./template.js');

var inputFile = process.argv[2];

fs.readFile(inputFile, 'utf8', function(err, codeLogo) {
	var instructions = compilateur.CompilateurLogo(codeLogo);
	console.log(content(instructions));
});
