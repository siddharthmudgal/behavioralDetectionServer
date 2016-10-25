var users = require('../models/model');
var pcorr = require( '../utils/spearson');
/**
* exporting the following functions
**/
module.exports = {
	processStore: function(req){
		return process_store(req);
	}
};

/**
* following function takes in a request parameter with 
* x,y and z axis values for both accelerometer and magnetometer
* and transforms them into mongoose model and store them in DB
**/

function process_store(req){
	var name = req.body.name;

	var acc_x = [];	
	acc_x.push(((((req.body.acc_x1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	
	var acc_y = [];
	acc_y.push(((((req.body.acc_y1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);})); 


	var acc_z = [];
	acc_z.push(((((req.body.acc_z1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));

	var mag_x = [];
	mag_x.push(((((req.body.mag_x1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	
	var mag_y = [];
	mag_y.push(((((req.body.mag_y1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	
	var mag_z = [];
	mag_z.push(((((req.body.mag_z1).toString()).replace(/[\[\]]+/g,"")).split(",")).map(function(val) {return Number(val);}));
	 

	var acc_xy = [], acc_yz = [], acc_zx = [];
	var mag_xy = [], mag_yz = [], mag_zx = [];

	acc_xy.push(pcorr.correlation.pearson(acc_x,acc_y));
	acc_yz.push(pcorr.correlation.pearson(acc_y,acc_z));
	acc_zx.push(pcorr.correlation.pearson(acc_z,acc_x));
	mag_xy.push(pcorr.correlation.pearson(mag_x,mag_y));
	mag_yz.push(pcorr.correlation.pearson(mag_y,mag_z));
	mag_zx.push(pcorr.correlation.pearson(mag_z,mag_x));


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

	return nuser;
}