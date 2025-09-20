const { Schema, model } = require("mongoose");

// Message Schema
const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    receiver: { type: Schema.Types.ObjectId, ref: "User" },
    text: String
}, { timestamps: true });

const Message = model("Message", messageSchema);

module.exports = Message;