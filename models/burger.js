var orm = require("../config/orm.js");
var burger = {

	selectAll: function(callback){
		orm.selectAll(function(res){
			callback(res);
		});
	},

	insertBurger: function(callback){
		orm.insertBurger(function(res){
			callback(res);
		});
	}
}

module.exports = burger;