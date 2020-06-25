//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    name: String,
    email: String,
    mobile: String,
    username: String,
    pswd: String,
    cpswd: String
});

//Model creation
var signupData = mongoose.model('signupData',signupSchema)

module.exports = signupData;