'use strict';

const { bookModel } = require("./book");


let getBookHandler = (req, res) => {
    let email1 = req.query.email;
    bookModel.find({email:email1}).then(data => {
        res.json(data); 
    })
    .catch((error) => {
        res.statu(500).send('error there is no data to get');
    });
}


module.exports = {
    getBookHandler,
}