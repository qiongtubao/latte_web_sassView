	var sass = require('node-sass');
	function CSSencode(code) { 
		code = code.replace(/\r\n/ig,''); 
		code = code.replace(/(\s){2,}/ig,'$1'); 
		code = code.replace(/\t/ig,''); 
		code = code.replace(/\n\}/ig,'\}'); 
		code = code.replace(/\n\{\s*/ig,'\{'); 
		code = code.replace(/(\S)\s*\}/ig,'$1\}'); 
		code = code.replace(/(\S)\s*\{/ig,'$1\{'); 
		code = code.replace(/\{\s*(\S)/ig,'\{$1'); 
		return code; 
	} 	
	module.exports = function(path, options) {
		var options = options || {};
		var data = require("fs").readFileSync(path).toString();
		options.data = CSSencode(data);
		var result = sass.renderSync(options);
		return result.css;
	}
