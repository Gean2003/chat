const Messages = require('../models/message.models') ;
const uuid = require('uuid');

//NOTE: buscar messages por id
const getMessageById = async (id) => {
    const messages = await Messages.findOne({
        where: {
            id
        }
    }) ;
    return messages
};

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

//NOTE: editar mensajes
const patchMessagesById = async (id, data) => {
    const messages = await Messages.update(data, {
        where: {
            id
        }
    }) ;
    return messages
}

module.exports = {
    createMessages,
    getMessageById,
    patchMessagesById
}
