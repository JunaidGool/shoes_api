const express = require('express');
const router = express.Router();
const Shoe = require('../models/shoeModel')
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg' )
  }
});

var upload = multer({ storage: storage }).single('shoes');

// router.post('/test', function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//       // An error occurred when uploading
//
//     }
//
//     // Everything went fine
//
//     res.json({
//       success: true,
//       message: 'Image uploaded'
//     })
//   })
// });

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
    Shoe.find({brand: brandSelection , size: sizeSelection }).then(function(brand){
        res.json({
          stock: brand
        });
    }).catch(next);
});

//update the stock levels when a shoe is sold
router.post('/shoes/sold/:id/:in_stock/:sale', function(req,res,next){
    var shoeID = req.params.id;
    var currentStock = req.params.in_stock;
    var saleAmount = req.params.sale;

    var newAmount = currentStock - saleAmount;

    Shoe.findOneAndUpdate({_id: shoeID}, {in_stock: newAmount}).then(function(result){


      res.json({stock: result});
    }).catch(next);
});

module.exports = router;
