const express = require("express");
const adminRouter = express.Router();
const Bookdata = require("../model/Bookdata",{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const authorData = require("../model/authorData",{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

function router(nav) {
  adminRouter.get("/", function (req, res) {
    res.render("addBook", {
      nav,
      title: "Library",
    });
  });

  adminRouter.post("/add", function (req, res) {
    var item = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      image: req.body.image,
    };

    var book = Bookdata(item);
    book.save(); //saving to database
    res.redirect("/books");
  });

  //to edit a book data
  adminRouter.get('/editBook/:id', (req,res)=>
  
  {
    const id = req.params.id;
  Bookdata.findOne({_id:id})
  .then(function(book){
    res.render('editBook', {
      nav,
      title: "Single Book",
      book
  });
})

   
  });
  
  adminRouter.post('/update/:id',(req,res)=>
  
  {
    const id = req.params.id;

 if(req.body.image=="")
    {
    Bookdata.updateOne({_id:id},{$set:{title:req.body.title, author:req.body.author,genre:req.body.genre}})
      .then((books)=>{
        res.redirect('/books');
      })
    }
    else{
    Bookdata.updateOne({_id:id},{$set:{title:req.body.title, author:req.body.author,genre:req.body.genre}})
      .then((books)=>
      {
        res.redirect('/books');
      }) 
    }
  })
  
//to delete a book
adminRouter.get('/deleteBook/:id',(req,res)=>{
  const id=req.params.id;
  Bookdata.deleteOne({_id:id})
  .then((books)=>
  {
    res.redirect('/books');
  }  )
})


//Author addAuthor/add/edit/delete
//Author addAuthor/add/edit/delete

adminRouter.get("/a", function (req, res) {
  res.render("addAuthor", {
    nav,
    title: "Library"
  });
});

adminRouter.post("/a/aadd", function (req, res) {
  var item = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image,
  };

  var author = authorData(item);
  author.save(); //saving to database
  res.redirect("/authors");
});

//to edit a author data
adminRouter.get('/editAuthor/:id', (req,res)=>

{
  const id = req.params.id;
authorData.findOne({_id:id})
.then(function(author){
  res.render('editAuthor', {
    nav,
    title: "Single Author",
    author
});
})

 
});

adminRouter.post('/updateAuthor/:id',(req,res)=>

{
  const id = req.params.id;

if(req.body.image=="")
  {
  authorData.updateOne({_id:id},{$set:{title:req.body.title, author:req.body.author,genre:req.body.genre}})
    .then((authors)=>{
      res.redirect('/authors');
    })
  }
  else{
  authorData.updateOne({_id:id},{$set:{title:req.body.title, author:req.body.author,genre:req.body.genre}})
    .then((authors)=>
    {
      res.redirect('/authors');
    }) 
  }
})

//to delete an author
adminRouter.get('/deleteAuthor/:id',(req,res)=>{
const id=req.params.id;
authorData.deleteOne({_id:id})
.then((authors)=>
{
  res.redirect('/authors');
}  )
})

  return adminRouter;
}

module.exports = router;
