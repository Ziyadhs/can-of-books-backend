'use strict';

const { bookModel } = require("./book");

//function to get all data inside db
let getBookHandler = (req, res) => {
    let email1 = req.query.email;
    bookModel.find({email:email1}).then(data => {
        res.json(data); 
    })
    .catch((error) => {
        res.statu(500).send('error there is no data to get');
    });
}

//function to create a new book
let createBookHandler = (req, res) => {

    let bookData = req.body;
    let newBook = new bookModel(bookData);
    newBook.save();
    bookModel.find().then(data => {
        res.status(200).json(data);
    }).catch((error) => {
        res.status(500).send('error there is no recived data');
    });
}

//function to delete a specific data from db
let deleteBookHandler = (req, res) => {

    let id = req.params.id;
    bookModel.findByIdAndDelete(id).then(() => {
        bookModel.find().then(data => {
            res.status(200).json(data);
        })
    }).catch((error) => {
        res.status(500).send('error there is no file');
    });
}

module.exports = {
    getBookHandler,
    createBookHandler,
    deleteBookHandler,
}