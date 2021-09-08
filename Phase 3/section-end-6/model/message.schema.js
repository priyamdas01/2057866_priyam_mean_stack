const mongoose = require('mongoose');
mongoose.pluralize(null);

let messageSchema = mongoose.Schema({
    _id: Number,
    name: String,
    message: String,
    time: String
})

let messageModel = mongoose.model("messages", messageSchema);
module.exports = messageModel;