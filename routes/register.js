var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/cms");

var user = require("../config/user");

/* GET users listing. */
router.post('/register-user', function(req, res, next) {
  const User = new user({
    
      userName:req.body.name,
      password:req.body.password,
      email:req.body.email
    
  });


  User.save();
});

module.exports = router;