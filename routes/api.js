const router = require("express").Router();
const User = require("../models/User.js");

router.post("/api/User", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  console.log(req.body);
  User.create(req.body)
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    // if not, we can at least catch the errr
    res.json(err);
  });
});

// router.get("/api/Users", function(req, res) {
//   // find all Users where quantity is greater than zero
//   User.find({})
//   .then((docs) => {
//     console.log(docs);
//     res.json(docs);
//   });
// });

// router.put("/api/products/:id", function(req, res) {
//   Product.findOneAndUpdate({
//     upc: req.params.id
//   })
//   .then((docs) => {
//     res.json(docs);
//   })
//   .catch((err) => {
//     res.json(err);
//   });
// });






module.exports = router;