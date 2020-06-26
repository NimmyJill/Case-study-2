const express = require("express");
const signupData = require('../model/signupData');
const app= new express();
const loginRouter = express.Router();
var loginStatus;

function router(navNew) {
 loginRouter.get('/',function(req,res){
   if(loginStatus=="Invalid Credentials!!"){
     res.render('login',{
       navNew,
       status:loginStatus
     });
   }
   else{
     res.render('login',{
       navNew,
       status:"Enter Username and Password"

     })
   }
 })


  loginRouter.post("/check", function(req,res){
  let Uname=req.body.name;
  let password= req.body.pswd;
  signupData.findOne({username:Uname,pswd:password})
  .then(function(data){
    if(data===null)
    {
      loginStatus= "Invalid Credentials!!";
      res.redirect('/login');
    }
    else
    {
    loginStatus="Login Successful..!"
      res.redirect('/books');
    }
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
