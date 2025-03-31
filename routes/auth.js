const express = require('express');
const router = express.Router();
const collection = require("../models/users"); 
const bcrypt = require('bcrypt');  //

router.get('/', (req, res) => { 
    try {
      res.render('login', { docTitle: 'Login Page' });
    } catch (error) {
      console.error('Error rendering login page:', error);
      res.status(500).send('Internal Server Error');
    } same
  }); 
router.get('/signup', (req, res) => {
    res.render('signup', { docTitle: 'SignUp Page' });
  }); 
  
router.post("/signup", async (req, res) => { // post submit ke liye // async simultaneous execution ke liye hota hai taki kisi ki execution ko na roke
  
      const data = {
          name: req.body.name,
          username:req.body.username,
          email:req.body.email,
          password: req.body.password
      } 
      const existingUser = await collection.findOne({ username: data.username });
    
      if (existingUser) {
          res.send('User already exists. Please choose a different username.'); 
      } else {
          const saltRounds = 10; 
          const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    
          data.password = hashedPassword; 
    
          const userdata = await collection.insertMany(data); 
          console.log(userdata);
      }
      res.render("login",{docTitle:"Login Page"});
    }); 
  
router.post("/login", async (req, res) => {
      try {
        const check = await collection.findOne({ username: req.body.username });
        if (!check) {
          return res.send("User not found");
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
          return res.send("Wrong password");
        }
        res.render("home",{docTitle:"Yum Yums"});
      } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
      }
    });
  
module.exports = router; 
