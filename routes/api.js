const express = require('express');
const router = express.Router();
const Shoe = require('../models/shoeModel')

// add a new shoe to stock
router.post('/shoes', function(req,res,next){
    Shoe.create(req.body).then(function(shoe){
        res.send('Succesfuly added   ' + shoe);
    }).catch(next);
});

//list all shoes in stock
router.get('/shoes', function(req,res,next){
    Shoe.find({}).then(function(shoes){
        res.json({
        stock: shoes});
    });
});

//list all shoes for a given brand
router.get('/shoes/brands/:brandname', function(req,res,next){
    var brandSelection = req.params.brandname;
    Shoe.find({brand: brandSelection}).then(function(brandSelect){
        res.json({
          stock: brandSelect
        });
    });
});

//list all shoes for a given size
router.get('/shoes/sizes/:size', function(req,res,next){
    var sizeSelection = req.params.size
    Shoe.find({size: sizeSelection}).then(function(sizeSelection){
        res.json({
          stock: sizeSelection
        });
    });
});

//list all shoes for a given brand and size
router.get('/shoes/brands/:brandname/sizes/:size', function(req,res,next){
    var brandSelection = req.params.brandname;
    var sizeSelection = req.params.size;
    Shoe.find({brand: brandSelection}).then(function(brandAndSize){
        res.json({
          stock: brandAndSize
        });
    });
});

//update the stock levels when a shoe is sold
router.post('/shoes/sold/:id/:qty', function(req,res,next){
    var shoeID = req.params.id;
    var qtySold = req.params.qty;
    var currentQty = req.body.in_stock;
    var newQty = currentQty - qtySold;

    console.log(currentQty)

   Shoe.findOneAndUpdate({_id: shoeID}, {in_stock: newQty}).then(function(result){
        res.send(result);
   });
});

module.exports = router;
