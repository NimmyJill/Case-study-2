const express = require("express");
const authorsRouter = express.Router();

function router(nav) {
  var authors = [
    {
      title: "Daniel Defoe",
      author: "Famous Work: Robinson Crusoe",
      genre: "Novel",
      img: "a1.jpg",
    },
    {
      title: "Lewis Carroll",
      author: "Famous Work: Alice's Adventures in Wonderland",
      genre: "Fantasy",
      img: "a2.jpg",
    },
    {
      title: "Jonathan Swift",
      author: "Famous Work: Gulliver's Travels",
      genre: "Satire",
      img: "a3.jpg",
    },
    {
      title: "John Bunyan",
      author: "Famous Work: The Pilgrim's Progress",
      genre: "Allegory",
      img: "John Bunyan.jpg",
    },
  ];
  authorsRouter.get("/", function (req, res) {
    res.render("authors", {
      nav,
      title: "Authors:Library",
      authors,
    });
  });

  authorsRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("author", {
      nav,
      title: "Single Author",
      author: authors[id],
    });
  });

  return authorsRouter;
}

module.exports = router;
