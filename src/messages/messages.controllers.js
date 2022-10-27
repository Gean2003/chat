const Messages = require('../models/message.models') ;
const uuid = require('uuid');

//NOTE: crear mensajes

const createMessages = async (data) => {
    const messages = await Messages.create({
        id: uuid.v4(),
        userId: data.userId,
        conversationId: data.conversationId,
        message: data.message
    }) ;
    return messages
} ;

module.exports = {
    createMessages
}
