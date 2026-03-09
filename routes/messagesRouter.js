const {Router} = require("express");

const messageRouter = Router();
const MessageController = require("../Controllers/messageController");

messageRouter.get("/", MessageController.getMessages);

messageRouter.get("/new", MessageController.getNewMessageForm);

messageRouter.post("/new", MessageController.createMessage);

module.exports = messageRouter;