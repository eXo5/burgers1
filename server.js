var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
	app.use(bodyParser.urlencoded({ extended: false}));

var exphbs = require("express-handlebars");
	app.use(express.static(process.cwd() + "/public"));
	app.engine("handlebars", exphbs({defaultLayout: "main"}));
	app.set("view engine", "handlebars");

var router = require("./controllers/burger_routes.js");
	app.use("/", router);

var port = process.env.PORT || 3000;

app.listen(port, console.log("Welcome"));