const messages = require("../messages");

function getMessages(req, res) {
    res.render("index", {title: "Mini Message Board", messages: messages});
}

function getNewMessageForm(req, res) {
    res.render("form");
}

function createMessage(req, res) {
    messages.push({
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    });
    res.redirect("/");
}

module.exports = { getMessages, getNewMessageForm, createMessage };