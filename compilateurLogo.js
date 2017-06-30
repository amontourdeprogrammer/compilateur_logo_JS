
function CompilateurLogo(codeLogo) {
	var instructions = [];
	for(var i = 0;  i < codeLogo.length; i++){
		motsLogo = codeLogo[i].split(" ");
		mot = motsLogo[0];
		pas = motsLogo[1];
		instructions.push(mot + "(" + pas + ");");
	}
	return instructions;
}

module.exports = {
	CompilateurLogo
};
