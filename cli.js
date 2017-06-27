var compilateur = require('./CompilateurLogo.js');
var fs = require('fs');

var fileName = process.argv[2];
var htmlFile = process.argv[3];

var linesBefore = [
	`<!DOCTYPE>
	<head>
	<script src="processing.js"></script>
	<script type="text/processing" data-processing-target="processing-canvas">
	float x, y, dir;
	void av(float pas) {
		float new_x = x + pas * cos(radians(dir)),
			  new_y = y + pas * sin(radians(dir));
		line(x, y, new_x, new_y);
		x = new_x; y = new_y;
	}
	void td(float angle) {
		dir += angle;
	}
	void setup() {
	  size(500, 500);
	  strokeWeight(5);
	  x = y = width/2;
	  dir = 0;
	  noLoop();
	}
	void draw() {`
	];

var lineAfter =  [
	`}
	</script>
	</head>
	<body>
	<canvas id="processing-canvas"></canvas>
	</body>
	</html>`
	];

fs.readFile(fileName, 'utf8', function(err, code_logo) {
    var instructions = compilateur.CompilateurLogo(code_logo); 


  var fileContent = linesBefore.join("\n")
  + instructions.join("\n") 
  + lineAfter.join("\n");
	fs.writeFile(htmlFile, fileContent, function(err){
		if (err) throw err;
		console.log('File writed');
	});

});