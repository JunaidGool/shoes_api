// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
//
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/tmp/uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
//
// var upload = multer({ storage: storage }).single('profileImage')
//
//
//
//
// router.post('/', function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//       // An error occurred when uploading
//
//     }
//
//     // Everything went fine
//   })
// });
//
// module.exports = router;
