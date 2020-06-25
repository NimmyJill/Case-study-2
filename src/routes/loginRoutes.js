const express = require("express");
const loginRouter = express.Router();

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
  loginRouter.get("/", function (req, res) {
    res.render("login", {
      navNew,
      title: "Books:Library",
    });
  });
 
  return loginRouter;
}

module.exports = router;
