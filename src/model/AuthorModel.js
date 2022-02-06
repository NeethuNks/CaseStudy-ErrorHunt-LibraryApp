const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Arjun:Norka123@cluster0.s5tyz.mongodb.net/Library?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;