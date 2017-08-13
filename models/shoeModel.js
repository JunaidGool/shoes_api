const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Shoe Schema and Model
const ShoeSchema = new Schema({
    brand:{
        type: String,
         required:[true, 'Brand Field Is Required']
    },
    color:{
        type: String,
         required:[true, 'Color Field Is Required']
    },
    size:{
        type: Number,
         required:[true, 'Size Field Is Required']
    },
    price:{
        type: Number,
         required:[true, 'Price Field Is Required']
    },
    in_stock:{
        type: Number
    }
});

const Shoe = mongoose.model('shoe', ShoeSchema);

module.exports = Shoe;
