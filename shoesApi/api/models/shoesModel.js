    'use strict'
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    
    var ShoeSchema = new Schema({
        brandName: {
            type: String
        },
        size: {
            type: Number
        },
        color: {
            type: String
        },
        price: {
            type: Number
        },
        in_stock: {
            type: Number
        }
    }); 

module.exports = mongoose.model('Shoes', ShoeSchema);