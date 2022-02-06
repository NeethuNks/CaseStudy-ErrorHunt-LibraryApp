const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Arjun:Norka123@cluster0.s5tyz.mongodb.net/Library?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;