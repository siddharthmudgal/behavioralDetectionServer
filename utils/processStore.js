var users = require('../models/model');
var pcorr = require( '../utils/spearson');
var jsonWriter = require('json2csv');
var fs = require('fs');
/**
* exporting the following functions
**/
module.exports = {
	processStore: function(req,style){
		return process_store(req,style);
	},
	exportData: function(){
		return exportData();		
	},
	walkers: function(req){
		return walkers_data(req);	
	},
	writeToCSV: function(doc){
		writeToCSV(doc);
	}
};

/**
* returns selective data
**/
function walkers_data(req){
	var response = [];	
	var name = req.body;
	var results =  users.find({'name': { $in: [name.name1, name.name2]}}).exec(function(err, user){				
	  	if ( err ) throw err;
		return user;
	});	 
	return results;
}
/**
* exports data to csv
**/

function exportData(){
	return users.find().lean().exec(function(err,users){
		if (err) throw err;
		var user_results = JSON.stringify(users);
	});	
}

/**
* helper function for data writing to CSV file
**/
function writeToCSV(users){	
	var sample_data = [{"_id":"1","name":"bob",
						"acc_x":[1,2],"acc_y":"1","acc_z":"1",
						"mag_x":"1","mag_y":"1","mag_z":"1"},
						{"name":"bob2",
						"acc_x":1,"acc_y":"1","acc_z":"1",
						"mag_x":"1","mag_y":"1","mag_z":"1"}];


	var sample2 = [{"_id":"580ea44d6aded9902059aa30","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"580ea491949a4cec2021312a","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"580ea618fb3ed7f81d9516bd","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bc0135bb8148201da282","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bc139df5563c236088e3","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bcfe0541ad3412644410","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bd20afcb71e80ca449ee","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818be1e1827686821ab3246","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818be340911a8301ef4b0f4","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818be501a31e73012eea30f","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818be622ac9fe681fad4fe8","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818be622ac9fe681fad4fe9","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818be632ac9fe681fad4fea","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf1656a865ec1eb42cf8","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf1656a865ec1eb42cf9","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf1756a865ec1eb42cfa","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf1756a865ec1eb42cfb","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf1756a865ec1eb42cfc","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf1756a865ec1eb42cfd","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf865ef2db7c1fbbd18e","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf875ef2db7c1fbbd18f","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf875ef2db7c1fbbd190","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf875ef2db7c1fbbd191","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf875ef2db7c1fbbd192","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bf875ef2db7c1fbbd193","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bfaaff3e268822d0e8ed","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bfd69f87cd64225c21fd","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bfd69f87cd64225c21fe","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bfd69f87cd64225c21ff","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bfd79f87cd64225c2200","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bfd79f87cd64225c2201","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818bfd79f87cd64225c2202","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818c05b7acf686421acbf2a","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818c05c7acf686421acbf2b","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818c05c7acf686421acbf2c","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818c05c7acf686421acbf2d","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818c05d7acf686421acbf2e","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818c0ef96c0a9041282a955","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0},{"_id":"5818c0f096c0a9041282a956","name":"bobby","acc_x":[[1,2,3,4,5,6,7,8,9]],"acc_y":[[1,2,3,4,5,6,7,8,9]],"acc_z":[[1,2,3,4,5,6,7,8,9]],"mag_x":[[11,22,33,44,55,66,77,88,99]],"mag_y":[[11,22,33,44,55,66,77,88,99]],"mag_z":[[11,22,33,44,55,66,77,88,99]],"acc_xy":[null],"acc_yz":[null],"acc_zx":[null],"mag_xy":[null],"mag_yz":[null],"mag_zx":[null],"__v":0}];

	var headers = ["name","style","acc_x","acc_y","acc_z","mag_x","mag_y","mag_z","acc_xy","acc_yz","acc_zx"
	,"mag_xy","mag_yz","mag_zx"];
	
	var status = jsonWriter({data: users,fields: headers});
	fs.writeFile('out.csv',status,function(err){
		if (err) throw err;
		console.log('file saved');
	});
}
/**
* following function takes in a request parameter with 
* x,y and z axis values for both accelerometer and magnetometer
* and transforms them into mongoose model and store them in DB
**/

function process_store(req,style){
	console.log(style);
	var name = req.body.name;
	var body = req.body;

	acc_xy = (pcorr.correlation.pearson(body.acc_x,body.acc_y));
	acc_yz = (pcorr.correlation.pearson(body.acc_y,body.acc_z));
	acc_zx = (pcorr.correlation.pearson(body.acc_z,body.acc_x));
	mag_xy = (pcorr.correlation.pearson(body.mag_x,body.mag_y));
	mag_yz = (pcorr.correlation.pearson(body.mag_y,body.mag_z));
	mag_zx = (pcorr.correlation.pearson(body.mag_z,body.mag_x));


	var nuser = new users({
		name : name,
		style : style,
		acc_x : body.acc_x,
		acc_y : body.acc_y,
		acc_z : body.acc_z,
		mag_x : body.mag_x,
		mag_y : body.mag_y,
		mag_z : body.mag_z,
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