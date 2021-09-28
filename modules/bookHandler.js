'use strict';

const { bookModel } = require("./book.js");

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
let createBookHandler = async  (req, res) => {

    let { title1, author1, description1, status1, email1} = req.body;
    await bookModel.create({
      title: title1,
      author: author1,
      description: description1,
      status: status1,
      email: email1
    })
    bookModel.find({email:email1}).then(data => {
        res.status(200).json(data);
    }).catch((error) => {
        res.status(500).send('error there is no recived data');
    });
}

//function to delete a specific data from db
let deleteBookHandler = (req, res) => {

    let id1 = req.query.bookID;
    console.log(id1);
    let email1 = req.query.email;
    console.log(email1);
    bookModel.findByIdAndDelete({_id:id1}).then(() => {
        bookModel.find({email:email1}).then(data => {
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