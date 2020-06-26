const express = require("express");
const loginRouter = express.Router();
const signupData = require('../model/signupData');

function router(navNew) {
  // loginRouter.post("/new",(req,res)=>{

  //   console.log(req.body.Uname);
  //   res.write("Data is adding");
  //   res.end();
  // });
  // loginRouter.get("/new",(req,res)=>{

  //   console.log(req.body.Uname);
  //   res.write("Data is adding");
  //   res.end();
  // });


  loginRouter.post("/check", function(req,res){
  let Uname=req.body.name;
  let password= req.body.pswd;
  signupData.findOne({username:Uname,pswd:password})
  .then(function(data){
    if(data===null){res.redirect('/login')}
    else{res.redirect('/books')}
  })


  })
  loginRouter.get("/", function (req, res) {
    res.render("login", {
      navNew,
      title: "Books:Library",
    });
  });
 
  return loginRouter;
}

module.exports = router;
