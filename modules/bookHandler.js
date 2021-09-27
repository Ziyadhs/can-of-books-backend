'use strict';

const { bookModel } = require("./book");

let getBookHandler = (req, res) => {
    bookModel.find().then(data => {
        res.json(data); 
    })
    .catch((error) => {
        res.statu(500).send('error there is no data to get');
    });
}


module.exports = {
    getBookHandler,
}