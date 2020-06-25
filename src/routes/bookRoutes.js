const express = require("express");

const booksRouter = express.Router();

const Bookdata = require('../model/Bookdata')

function router(nav) {
 

  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    Bookdata.findOne({_id: id})
    .then(function(book){
    res.render('book', {
      nav,
      title: "Single Book",
      book
    });
  });

  });

  booksRouter.get("/", function (req, res) {
    Bookdata.find()
    .then(function(books){
      res.render("books", {
        nav,
        title: "Books:Library",
        books
        // books2,
      });
    })
   
  });

  return booksRouter;
}

module.exports = router;

 // var books = [
  //   {
  //     title: "Robinson Crusoe",
  //     author: "Daniel Defoe",
  //     genre: "Novel",
  //     img: "1.jpg",
  //   },
  //   {
  //     title: "MACBETH",
  //     author: "William Shakespeare",
  //     genre: "Drama",
  //     img: "2.jpg",
  //   },
  //   {
  //     title: "The Color Purple",
  //     author: "Alice Walker",
  //     genre: "Novel",
  //     img: "3.jpg",
  //   },
  //   {
  //     title: "Wings of Fire",
  //     author: "A. P. J. Abdul Kalam",
  //     genre: "Autobiography",
  //     img: "4.jpg",
  //   },
  // ];

  // var books2 = [
  //   {
  //     title: "Alice's Adventures in Wonderland",
  //     author: "Lewis Carroll",
  //     genre: "Fantasy",
  //     img: "5.png",
  //   },
  //   {
  //     title: "The Adventures of Huckleberry Finn",
  //     author: "Mark Twain",
  //     genre: "Children's literatur",
  //     img: "6.jpg",
  //   },
  //   {
  //     title: "Gulliver's Travels",
  //     author: "Jonathan Swift",
  //     genre: "Satire",
  //     img: "7.png",
  //   },
  //   {
  //     title: "The Pilgrim's Progress",
  //     author: "John Bunyan",
  //     genre: "=",
  //     img: "8.jpg",
  //   },
  // ];
  // booksRouter.get("/nmy/:id", function (req, res) {
  //   const id = req.params.id;
  //   res.render("book", {
  //     nav,
  //     title: "Single Book",

  //     book1: books2[id],
  //   });
  // });