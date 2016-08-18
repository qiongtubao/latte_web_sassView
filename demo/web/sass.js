(function(){
	var sass = require("node-sass");
	this.get = function(req, res) {
		res.sendView("sass", "./sasss/demo.sass", {
			functions: {
			    'headings($from: 0, $to: 6)': function(from, to) {
			      var i, f = from.getValue(), t = to.getValue(),
			          list = new sass.types.List(t - f + 1);

			      for (i = f; i <= t; i++) {
			        list.setValue(i - f, new sass.types.String('h' + i));
			      }
			      return list;
			    }
			}
		});
	}
	this.path = "/sass";
}).call(module.exports);	