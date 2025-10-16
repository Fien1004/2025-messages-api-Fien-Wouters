const express = require("express");
const messagesController = require("../../controllers/v1/messages");
const router = express.Router();


let messages = [
    "Hello", 
    "Hi", 
    "Hi! I'm a message", 
    "Hi! I'm another message"
];

let users = [
    "john", 
    "jane", 
    "pikachu", 
    "pikachu"
];

router.get("/", messagesController.getAll);

router.get("/:id", messagesController.getOne);

router.post("/", messagesController.create);



module.exports = router;
