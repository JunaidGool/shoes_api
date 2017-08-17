const express = require('express');
const router = express.Router();
const Shoe = require('../models/shoeModel')

// add a new shoe to stock
router.post('/shoes', function(req,res,next){
    Shoe.create(req.body.stock).then(function(shoe){
        res.json({
          stock: shoe});
    }).catch(next);
});

//list all shoes in stock
router.get('/shoes', function(req,res,next){
    Shoe.find({}).then(function(shoes){
        res.json({
        stock: shoes});
    }).catch(next);
});

//list all shoes for a given brand
router.get('/shoes/brands/:brandname', function(req,res,next){
    var brandSelection = req.params.brandname;
    Shoe.find({brand: brandSelection}).then(function(brandSelect){
        res.json({
          stock: brandSelect
        });
    }).catch(next);
});

//list all shoes for a given size
router.get('/shoes/sizes/:size', function(req,res,next){
    var sizeSelection = req.params.size
    Shoe.find({size: sizeSelection}).then(function(sizeSelection){
        res.json({
          stock: sizeSelection
        });
    }).catch(next);
});

//list all shoes for a given brand and size
router.get('/shoes/brands/:brandname/sizes/:size', function(req,res,next){
    var brandSelection = req.params.brandname;
    var sizeSelection = req.params.size;
    Shoe.find({brand: brandSelection}).then(function(){
      Shoe.find({size: sizeSelection}).then(function(brandAndSize){
        res.json({
          stock: brandAndSize
        });
      });
    }).catch(next);
});

//update the stock levels when a shoe is sold
router.post('/shoes/sold/:id/:stock_sold', function(req,res,next){
    var shoeID = req.params.id;
    var stock_sold = req.params.id;

    Shoe.findOne({_id: shoeID}).then(function(result){
      console.log(result)
      res.json({stock: result});
    }).catch(next);
});

module.exports = router;
