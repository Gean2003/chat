const messagesController = require('./messages.controllers') ;

const getMessageById = (req, res) => {
    const id = req.params.message_id ;
    messagesController.getMessageById(id)
        .then( response => {
            res.status(200).json(response)
        } )
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    
} ;

const createMessages = (req, res) => {
    const userId = req.user.id ;
    const conversationId = req.params.conversations_id ;
    const { message } = req.body ;

    if (message) {
        messagesController.createMessages({userId, conversationId, message})
            .then( data => {
                res.status(201).json(data)
            } )
            .catch( err => {
                res.status(400).json({message: err.message})
            } )
    }else{
        res.status(400).json({
            error: 'Mising messages',
            fields: {
                messages : 'string'
            }
        })
    }
} ;

const patchMessages = (req, res) => {
    const id = req.params.message_id ;
    const { message } = req.body  ;

    messagesController.patchMessagesById(id, {message})
        .then( () => {
            res.status(200).json({message: 'message was update'})
        } )
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    
} ;

module.exports = {
    createMessages,
    getMessageById,
    patchMessages
}
