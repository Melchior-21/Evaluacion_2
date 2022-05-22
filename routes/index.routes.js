const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const {home}=require('../controllers/controller')

router.get('/',home)
router.get('/,Melchior',SaintPreux)




module.exports= router