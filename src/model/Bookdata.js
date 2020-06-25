//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Model creation
var Bookdata = mongoose.model('bookdata',BookSchema)

module.exports = Bookdata;



// var mongodb = require('mongodb');
// var mongoClient = mongodb.MongoClient;
// var fs = require('fs');
 
// var url = 'mongodb://localhost:27017/technicalkeeda';
 
// mongoClient.connect(url, function(err, db) {
//     if (err) {
//         console.log('Sorry unable to connect to MongoDB Error:', err);
//     } else {
 
//         var bucket = new mongodb.GridFSBucket(db, {
//             chunkSizeBytes: 1024,
//             bucketName: 'images'
//         });
 
//         fs.createReadStream('c:\\dog.jpg').pipe(
//             bucket.openUploadStream('dog.jpg')).on('error', function(error) {
//             console.log('Error:-', error);
//         }).on('finish', function() {
//             console.log('File Inserted!!');
//             process.exit(0);
//         });
//     }
// });