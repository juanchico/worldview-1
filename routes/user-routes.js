const router = require("express").Router();
const User = require("../models/User.js");

var loggedIn = false;
router.get("/auth", function (req, res) {
  // send back "session" status
  res.json(req.session.user);
});

router.get("/profile", function (req, res) {
  // only users with set session can see this route
  if (req.session.user) {
    // console.log("hit");
    let { email, name } = req.session.user,
      payload = { email, name };
    res.json(payload);
  }
  else {
    res.redirect("/");
  }
});

router.get("/logout", function (req, res) {
  console.log(req.session);// clear cookie and session
  res.clearCookie("token");
  req.session.destroy();
  res.json(loggedIn);
   
});

router.post("/login", function (req, res) {
  let { email, password } = req.body,
      payload = { email, password };
  // look for user that matches the posted email and password
  User.findOne(payload).then((user) => {
    //console.log(user);
    if (user) {
      var token = "t" + Math.random();
      user.token = token;

      res.cookie("token", token, { expires: new Date(Date.now() + 999999999) });
      req.session.user = user;
      console.log(req.session)
      let { email, name } = user,
      payload = { email, name };
      res.json(payload);
    }
    else {
      res.send(null);
    }
  });
});





module.exports = router;