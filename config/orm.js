//orm

var connection = require("./connection.js");

connection.connect(function(err){
	if (err) {
	console.error("error connectiong: " + err.stack);
	return;
	};
});

var orm = {
	selectAll: function(callback) {
		connection.query("SELECT * FROM burgers", function (err, result) {
			if (err) throw err;
			callback(result);
		})
	}

	}


module.exports = orm;