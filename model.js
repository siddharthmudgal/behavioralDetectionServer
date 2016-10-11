var mongoose = require('mongoose');  

var Schema = mongoose.Schema;  

var userSchema = mongoose.Schema({    
     	name : String,     
     	acc_x : Schema.Types.Mixed,
		acc_y : Schema.Types.Mixed,
		acc_z : Schema.Types.Mixed,
		mag_x : Schema.Types.Mixed,
		mag_y : Schema.Types.Mixed,
		mag_z : Schema.Types.Mixed,
		acc_xy : Schema.Types.Mixed,
		acc_yz : Schema.Types.Mixed,
		acc_zx : Schema.Types.Mixed,
		mag_xy : Schema.Types.Mixed,
		mag_yz : Schema.Types.Mixed,
		mag_zx : Schema.Types.Mixed
});  

mongoose.connect('mongodb://localhost:27017/behav'); 
module.exports = mongoose.model('users', userSchema);