const express = require("express");
const authorsRouter = express.Router();
const authorData = require('../model/authorData')

function router(nav) {
  // var authors = [
  //   {
  //     title: "Daniel Defoe",
  //     author: "Famous Work: Robinson Crusoe",
  //     genre: "Novel",
  //     img: "a1.jpg",
  //   },
  //   {
  //     title: "Lewis Carroll",
  //     author: "Famous Work: Alice's Adventures in Wonderland",
  //     genre: "Fantasy",
  //     img: "a2.jpg",
  //   },
  //   {
  //     title: "Jonathan Swift",
  //     author: "Famous Work: Gulliver's Travels",
  //     genre: "Satire",
  //     img: "a3.jpg",
  //   },
  //   {
  //     title: "John Bunyan",
  //     author: "Famous Work: The Pilgrim's Progress",
  //     genre: "Allegory",
  //     img: "John Bunyan.jpg",
  //   },
  // ];
  
// });

authorsRouter.get("/:id", function (req, res) {
  const id = req.params.id;
  authorData.findOne({_id: id})
  .then(function(author){
    res.render("author", {
      nav,
      title: "Single Author",
      author
    });
  })
  
});

authorsRouter.get("/", function (req, res) {
  
  authorData.find()
  .then(function(authors){
    res.render("authors", {
      nav,
      title: "Authors:Library",
      authors
    });
  });

});
  return authorsRouter;
}

module.exports = router;
