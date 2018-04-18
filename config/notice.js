const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cms");

var notice = mongoose.Schema;
var noticedb = notice({
    title:String,
    date:String,
    time:String,
    subHeading:String,
    notice:String,
    noticePostedBy:String,
    noticeUrl:String
});

 const noticeDB = mongoose.model('noticedb', userdb);
 module.exports =noticeDB;