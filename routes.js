var exphbs  = require('express-handlebars');
var process_store = require('./utils/processStore');
var users = require('./models/model');

module.exports = function(app) { 
	/**
	* intializing default layout for handlebars
	* can initialize other props like extname
	* by default layouts directory structure is set to views/layouts (layoutsDir)
	**/
	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set('view engine', 'handlebars');
	/**
	* exports all records to a csv
	**/
	app.get("/exportData",function(req,res){
		var status = process_store.exportData();
		status.then(function(doc){
			process_store.writeToCSV(doc);
			res.json(doc);
		})
	});
	/**
	* returns all records of a particular user
	**/
	app.post("/walkers",function(req,res){
		var results = process_store.walkers(req);
		results.then(function(doc){
			res.send(doc);
		});
	});
	/**
	* following three functions recieve data from client
	* in three cases walking, running and on foot
	* can be combined into one function also, but divided into
	* three to support any business logic
	**/
	app.post("/walking",function(req,res){
		console.log("found walking");
		res.send(process_store.processStore(req));
	});

	app.post("/running",function(req,res){
		console.log("found running");
		res.send(process_store.processStore(req));
	});

	app.post("/onfoot",function(req,res){
		console.log("found onfoot");
		res.send(process_store.processStore(req));
	});

	/**
	* renders the charts page (using handlebars)
	* res.render renders chart.handlebars using default layout
	* main.handlebars, both are searched in views/layouts
	**/
	app.get("/",function(req,res){
		res.render("chart");
	});

}