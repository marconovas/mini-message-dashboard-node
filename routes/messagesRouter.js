const {Router} = require("express");

const messageRouter = Router();
const MessageController = require("../Controllers/messageController");

messageRouter.get("/", MessageController.getMessages);

messageRouter.get("/new", MessageController.getNewMessageForm);

messageRouter.get("/details/:messageId", MessageController.getMessageDetails);

messageRouter.post("/new", MessageController.createMessage);

module.exports = messageRouter;