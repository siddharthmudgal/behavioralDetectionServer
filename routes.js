var users = require('./model');
var pcorr = require( './spearson');
var exphbs  = require('express-handlebars');

module.exports = function(app) { 
	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set('view engine', 'handlebars');

	app.post('/register',function(req,res){ 

	console.log(req.body.acc_x1);
	console.log(req.body.acc_x2);
	console.log(req.body.acc_x3);

	var name = req.body.name;
	var acc_x = [];	
	acc_x.push(((((req.body.acc_x1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	acc_x.push(((((req.body.acc_x2).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	acc_x.push(((((req.body.acc_x3).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	
	var acc_y = [];
	acc_y.push(((((req.body.acc_y1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);})); 
	acc_y.push(((((req.body.acc_y2).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);})); 
	acc_y.push(((((req.body.acc_y3).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);})); 

	var acc_z = [];
	acc_z.push(((((req.body.acc_z1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	acc_z.push(((((req.body.acc_z2).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	acc_z.push(((((req.body.acc_z3).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));

	var mag_x = [];
	mag_x.push(((((req.body.mag_x1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	mag_x.push(((((req.body.mag_x2).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	mag_x.push(((((req.body.mag_x3).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));

	var mag_y = [];
	mag_y.push(((((req.body.mag_y1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	mag_y.push(((((req.body.mag_y2).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	mag_y.push(((((req.body.mag_y3).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));

	var mag_z = [];
	mag_z.push(((((req.body.mag_z1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	mag_z.push(((((req.body.mag_z2).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	mag_z.push(((((req.body.mag_z3).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	 

	var acc_xy = [];
	var acc_yz = [];
	var acc_zx = [];
	var mag_xy = [];
	var mag_yz = [];
	var mag_zx = [];
	for (var i =0; i<3; i++){
		acc_xy.push(pcorr.correlation.pearson(acc_x[i],acc_y[i]));
		acc_yz.push(pcorr.correlation.pearson(acc_y[i],acc_z[i]));
		acc_zx.push(pcorr.correlation.pearson(acc_z[i],acc_x[i]));
		mag_xy.push(pcorr.correlation.pearson(mag_x[i],mag_y[i]));
		mag_yz.push(pcorr.correlation.pearson(mag_y[i],mag_z[i]));
		mag_zx.push(pcorr.correlation.pearson(mag_z[i],mag_x[i]));
	}

	var nuser = new users({
		name : name,
		acc_x : acc_x,
		acc_y : acc_y,
		acc_z : acc_z,
		mag_x : mag_x,
		mag_y : mag_y,
		mag_z : mag_z,
		acc_xy : acc_xy,
		acc_yz : acc_yz,
		acc_zx : acc_zx,
		mag_xy : mag_xy,
		mag_yz : mag_yz,
		mag_zx : mag_zx
	});
	nuser.save(function(err){
		if (err)
			throw(err);
	});

	res.send(nuser);
	});

	app.post("/walkers",function(req,res){
		var response = [];
		var name = req.body;
				users.find({'name': { $in: [name.name1, name.name2]}},function(err, user){				
				  if ( err ) throw err;
					  res.json(user);
			});	 
	});

	app.get("/",function(req,res){
	res.render("chart");
	});

}