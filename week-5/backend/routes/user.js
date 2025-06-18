//  start writing your code from here
//  start writing your code from here
const { Router } = require("express");
const router = Router();

const { v4: uuidv4 } = require("uuid");


const user = [];


// just for devlopment show all user
router.get("/show", (req, res) => {
    if (user.length > 0) {
        res.status(200).json(user);
    }
    else {
        res.status(404).send("user empty");
    }
})

router.post("/registration", (req, res) => {
    const id = uuidv4();
    const { userName, userPassword } = req.body;

    const checkUser = user.find((e)=>e.userName===userName);
    if(checkUser){
       return res.status(406).send("user already regitered");
    }

    if (!userName || !userPassword) {
        res.status(409).send("user data missing!");
    } else {
        user.push({ id, userName, userPassword });
        res.status(201).send("user registered sucessfully");
    }
})


router.post("/login", (req, res) => {
    const { userName, userPassword } = req.body;
    const foundUser = user.find((e) => e.userName === userName);

    if (foundUser && foundUser.userPassword === userPassword) {
        res.status(200).send(foundUser.id);
    }
    else {
        res.status(404).send("Invalid user");
    }
})


module.exports = router;