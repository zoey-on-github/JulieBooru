"use strict";
const express = require("express");
var router = express.Router();
//import pgp = require('pg-promise');
// const db = pgp('postgres://postgres:admin@localhost:5432/julieBooru')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(300).send('respond with a resource');
});
module.exports = router;
