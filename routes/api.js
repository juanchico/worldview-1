const router = require("express").Router();
const User = require("../models/User.js");

// creates new user document
router.post("/api/User", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  User.create(req.body)
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    // if not, we can at least catch the errr
    res.json(err);
  });
});

// populates followers for documents
router.get("/api/Users", function(req, res) {
  // find all Users where quantity is greater than zero
  User.find({}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});


// find users with specific country 
router.get("/Country/:name", function(req, res) {
  // find all Users where quantity is greater than zero
  User.find({country: req.params.name}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});

// find user with id
router.get("/api/User/:id", function(req, res) {
  // find all Users where quantity is greater than zero
  console.log("working");
  User.findOne({_id: req.params.id}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});

// find one profile by id
router.get("/fprofile/:id", function(req, res) {
  User.findOne({
    _id: req.params.id
  })
  .then((docs) => {
    res.json(docs)
  });
});


// to follow user 
router.put("/api/User/:id/:following", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  User.findByIdAndUpdate(
    {_id: req.params.id},
    {$push: { following: req.params.following}})
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    // if not, we can at least catch the errr
    res.json(err);
  });
});

// for finding all docs in following array 
router.get("/Feed/:id", function(req, res) {
  User.find({
    _id: req.params.id
  }).populate("following")
  .then((docs) => {
    res.json(docs);
  });
});






module.exports = router;