
const express = require('express');
const { adminController } = require('../../controllers/adminController');
const adminRoute = express.Router();

 
adminRoute.get('/get_friends',adminController)


module.exports={adminRoute}