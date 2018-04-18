var express = require('express');
var router = express.Router();
var postDB = require("../config/post");

/* GET home page. */
router.get('/get-post', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/publish-post",(req,res,next)=>{
  
  const publicPost = new postDB({
    
    title:req.body.title,
    date:req.body.date,
    time:req.body.time,
    subHeading:req.body.subHeading,
    lang:req.body.lang,
    news:req.body.news,
    postedBy:req.body.postedBy,
    imagePath:req.body.imagePath
  });

  publicPost.save();
  res.send("saved");

});


module.exports = router;