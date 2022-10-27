const conversationsController = require('../conversation/conversations.controller')

const getAllConversations = (req, res) => {
    
    const userId = req.user.id ;

    conversationsController.getAllConversations(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(400).json({message: err.message})
        } )
    
} ;

const createConversations = (req, res) => {
    const userId = req.user.id ;
    const {title, imageUrl} = req.body ;

    if (title && imageUrl) {
        conversationsController.createConversations({title, imageUrl, userId })
            .then( data  => {
                res.status(201).json(data)
            } )
            .catch(err  => {
                res.status(400).json(err.message)
            })
    }else{
        res.status(400).json({
            message: "Mising data",
            fields: {
                title: "string",
                imageUrl: 'string',
                userId: 'uuid'
            }
        })
    }
} ;

// 3.b 

const getConversationById = (req, res) => {
    const id = req.params.conversations_id
    
    conversationsController.getConversationsById(id)
        .then( data => {
            res.status(200).json(data)
        }  )
        .catch( err => {
            res.status(404).json({message: err.message})
        } )
} ;

const deleteConversation = (req, res) => {
    const id = req.params.conversations_id

    conversationsController.deleteConversationsById(id)
        .then( data => {
            if (data) {
                res.status(204).json()
            }else{
                res.status(404).json({err: 'invalid Id'})
            }
        } )
        .catch( err => {
            res.status(400).json({message: err.message})
        } )
    
} ;

const patchConversations = (req, res) => {
    const id = req.params.conversations_id ;
    const { title, imageUrl  } = req.body  ;

    conversationsController.patchConversationsById(id, {title, imageUrl})
        .then( () => {
            res.status(200).json({message: 'Conversation was update'})
        } )
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    
} ;

const getMessagesById = (req, res) => {
    const conversationId = req.params.conversations_id ;
        conversationsController.getMessagesById(conversationId)
        .then( data => {
            res.status(200).json(data)
        } )
        .catch( err => {
            res.status(400).json({
                message: err.message
            })
        } )
    
}  ;

module.exports = {
    getAllConversations,
    createConversations,
    getConversationById,
    deleteConversation,
    patchConversations,
    getMessagesById
}
