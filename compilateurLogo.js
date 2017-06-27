
function CompilateurLogo(code_logo) {
	var separateur = /\n+/;
	lignesLogo = code_logo.split(separateur);
	var instructions = [];
	for(var i = 0;  i < lignesLogo.length; i++){
		motsLogo = lignesLogo[i].split(" ");
		mot = motsLogo[0];
		pas = motsLogo[1];
		instructions.push(mot + "(" + pas + ");");
	}
	return instructions;
}

module.exports = {
	CompilateurLogo
};