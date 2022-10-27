const messagesController = require('./messages.controllers') ;

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

module.exports = {
    createMessages
}
