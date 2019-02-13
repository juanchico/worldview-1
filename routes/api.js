const router = require("express").Router();
const User = require("../models/User.js");

router.post("/api/User", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  
  User.create(req.body)
  .then((user) => {
    if (user) {
      var token = "t" + Math.random();
      user.token = token;

      res.cookie("token", token, { expires: new Date(Date.now() + 999999999) });
      req.session.user = user;
      console.log(req.session)
     
      res.json(req.session);
    }
    else {
      res.send(null);
    }
  });
});

router.get("/api/Users", function(req, res) {
  // find all Users where quantity is greater than zero
  User.find({}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});

router.get("/api/Country/:name", function(req, res) {
  // find all Users where quantity is greater than zero
  // console.log("working");
  // console.log(req.params.name);
  User.find({country: req.params.name}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});


router.get("/api/User/:id", function(req, res) {
  // find all Users where quantity is greater than zero
  // console.log("working");
  User.findOne({_id: req.params.id}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});




module.exports = router;