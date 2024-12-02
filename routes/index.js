var express = require('express');
const { paginaInicio } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', paginaInicio);

module.exports = router;
