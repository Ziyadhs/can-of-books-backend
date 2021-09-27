"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author:String,
    description: String,
    status: String,
    email: String
});

const bookModel = mongoose.model('book', bookSchema);

let seedBook = () => {
    let newBook = [
        new bookModel(
        {
            title: "Since",
            author:"Ziyad",
            description: "since",
            status: 'intresting',
            email: 'ziyadhs2001@gmail.com'
        }),
        new bookModel({
            title: "zhs",
            author:"Math",
            description: "math",
            status: 'intresting',
            email: 'zicohs2001@gmail.com'
        }),
        new bookModel({
            title: "English",
            author:"zsh",
            description: "english",
            status: 'intresting',
            email: 'zicosh2001@gmail.com'
        })
    ]

    for(let i=0; i<newBook.length;i++){
        newBook[i].save();
    }
    return newBook;
}

// to add data to the db
// seedBook();

module.exports = {
    seedBook,
    bookModel
}