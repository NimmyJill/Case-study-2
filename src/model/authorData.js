//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Model creation
var authorData = mongoose.model('authorData',AuthorSchema)

module.exports = authorData;