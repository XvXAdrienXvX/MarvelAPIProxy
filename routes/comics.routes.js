const express = require('express');
const router = express.Router();
const {GetAllComicBooks} = require("../controllers/comics.controller");

router.get('/', GetAllComicBooks);

module.exports = router;