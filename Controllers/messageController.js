const { messages, getMessageById } = require("../messages");

function getMessages(req, res) {
    res.render("index", {title: "Mini Message Board", messages: messages});
}

function getNewMessageForm(req, res) {
    res.render("form");
}

async function getMessageDetails(req, res) {
    const { messageId } = req.params;
    const id = Number(messageId);

    try{
        const message = await getMessageById(id);

        if(!message){
            return res.status(404).send("Message not found");
        }
        
        res.render("details", { message });
    } catch(error) {
        console.error("Error retrieving data", error);
        res.status(500).send("Internal Server Error.")
    }
}

function createMessage(req, res) {
    messages.push({
        id: messages.length + 1,
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    });
    res.redirect("/");
}

module.exports = { getMessages, getNewMessageForm, createMessage, getMessageDetails };