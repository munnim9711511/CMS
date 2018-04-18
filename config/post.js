const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cms");

var post = mongoose.Schema;
var postdb = post({
    title:String,
    date:String,
    time:String,
    subHeading:String,
    news:String,
    lang:String,
    postedBy:String,
    imagePath:String
});

 const postDB = mongoose.model('postdb', postdb);
 module.exports =postDB;