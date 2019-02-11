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

// // for updating profile
// router.put("/api/User", function(req, res) {
//   // as long as req.body matches what the model expects, this should insert into the database
//   User.findByIdAndUpdate(req.body._id, )
//   .then((result) => {
//     res.json(result);
//   })
//   .catch((err) => {
//     // if not, we can at least catch the errr
//     res.json(err);
//   });
// });

// for finding one and displaying 
// router.get("/api/Users", function(req, res) {
//   // find all Users where quantity is greater than zero
//   User.find({}).populate("followers")
//   .then((docs) => {
//     res.json(docs);
//   });
// });




module.exports = router;