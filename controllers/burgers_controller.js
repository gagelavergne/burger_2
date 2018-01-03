var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();


//Route for index
router.get("/", function(req,res) {
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
//Calling SelectAllBurger
	burger.all(function(burgers) {
		res.render("index", { burger_data: burgers });
	});
});

//Focus on the create function in burger.js
//Once Created this is going to used for the burger.update using ID  

router.post("/burgers/create", function(req, res) {
	burger.create(req.body.burger_name, function(result) {
		console.log(result);
		res.redirect("/");
		
	});
});

//Focus on the update function in burger.js 
//Take the create data and PUT it to "/" using ID

router.put("/burgers/update", function(req, res) {
	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		console.log("put is invoked HERE!")
		res.redirect("/");
		
	});
});

module.exports = router;