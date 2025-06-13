const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { v4: uuidv4 } = require('uuid');

// User Routes
const userData={};
const sessions = {};
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;

    if(!userName || !userPassword){
       return res.status(400).send("Invalid userName and Password");
    }

    if(userData[userName]){
       return res.status(200).send("Already created Username");
    }

    userData[userName]= {userPassword, todos:[]};
    res.status(200).send("siginUp Sucessfully!!");
});

router.post('/login', (req, res) => {
     // Implement user login logic
     const{userName, userPassword} = req.body;
     if(!userData[userName]){
       return res.status(409).send("UserName Invalid");
     }

     if(userData[userName].userPassword!==userPassword){
        return res.status(409).send("Passoword Invalid");
     }

     const id  = uuidv4();
     sessions[id]={userName};
     return res.status(200).send("siginIn Sucessfully!!");
});

router.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
    const userName = req.body.userName;
    if(userData[userName]){
       return res.status(200).json(userData[userName].todos);
    }

    return res.status(409).send("username Invalid");
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    const token = req.body.token;
    delete sessions[token];

     return res.status(200).send("logout Sucessfully!!");

});

module.exports = router