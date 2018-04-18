const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cms");

var user = mongoose.Schema;
var userdb = user({
    userName:String,
    password:String,
    email:String
});

 const userDB = mongoose.model('user', userdb);
 module.exports =userDB;