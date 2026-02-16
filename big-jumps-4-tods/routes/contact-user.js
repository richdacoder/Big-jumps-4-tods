const express = require('express');
const router = express.Router();
const { send } = require("../services/contact-user.js");

router.post('/message', async (req, res) => {

/*
- req goes here
- then email and name sent to contact user



*/
try{

const { email, name } = req.body;
  console.log('contact user');
} catch(err){
  console.error('error')
}

}
)
