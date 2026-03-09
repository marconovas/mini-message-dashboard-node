const messages = [
    {id: 1, text: "Hello!", user:"Juan", added:new Date()},
    {id: 2, text: "Hello world!", user:"Pedro", added:new Date()},
    {id: 3, text: "Hi there!", user:"María", added:new Date()},
    {id: 4, text: "Goodbye!", user:"Ignacio", added:new Date()},
];

const getMessageById = (id) => {
    return messages.find(message => message.id === id);
}

module.exports = { messages, getMessageById };