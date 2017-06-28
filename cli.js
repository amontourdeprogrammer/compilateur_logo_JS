var compilateur = require('./compilateurLogo.js');
var fs = require('fs');
var content = require('./template.js');

var inputFile = process.argv[2];
var outputFile = process.argv[3];

fs.readFile(inputFile, 'utf8', function(err, codeLogo) {
	var instructions = compilateur.CompilateurLogo(codeLogo);

	fs.writeFile(outputFile, content(instructions), function(err){
		if (err) throw err;
		console.log('File written');
	});
});
