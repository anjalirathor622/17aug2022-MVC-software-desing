const express = require('express');
const app = express();

const { friends } = require("../models/friendsSchema");

//app.use(express.json());

//admin controller logic
let adminController=(req, res)=>{
    
    const friendsObj = new friends({ name: req.query.name });
    
    friendsObj.save()

    .then(() =>
       
        res.status(200).json({
            msg: 'ok',
            name:req.query.name
        }),
        console.log(req.query.name),
        console.log('ok')
        )
    .catch((err) => 
        //console.log('error',err),

        res.status(400).json({
            msg: 'error',
        })
        )  
}

exports.adminController=adminController