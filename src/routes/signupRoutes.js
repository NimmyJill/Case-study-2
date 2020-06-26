const express = require("express");
const signupRouter = express.Router();
const signupData = require("../model/signupData")


function router(navNew) {
  signupRouter.get("/", function (req, res) {
    res.render("signup", {
      navNew,
      title: "Books:Library",
    });
  });

  signupRouter.post("/userDetailsSubmit", function (req, res) {
    // res.render("login", {
      var item = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        username: req.body.username,
        pswd: req.body.pswd,
        cpswd: req.body.cpswd
        
      };
  console.log(item);
  
      var detail = signupData(item);
      detail.save(); //saving to database
      res.redirect("/login");
    });
 
  return signupRouter;
}

module.exports = router;
