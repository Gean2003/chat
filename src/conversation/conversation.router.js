const router = require('express').Router() ;
const passport = require('passport') ;
const { createMessages } = require('../messages/messages.services');

const conversationServices = require('./conversation.services') ;
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(passport.authenticate('jwt', {session: false}),
        conversationServices.getAllConversations)

    .post(passport.authenticate('jwt', {session: false}),
        conversationServices.createConversations)

router.route('/:conversations_id')
        .get(passport.authenticate('jwt', {session: false}),
        conversationServices.getConversationById)

        .delete(passport.authenticate('jwt', {session: false}),
            conversationServices.deleteConversation)
            
        .patch(passport.authenticate('jwt', {session: false}),
            conversationServices.patchConversations)

router.route('/:conversations_id/messages')
            .get(passport.authenticate('jwt', {session: false}),
            conversationServices.getMessagesById)

            .post(passport.authenticate('jwt', {session: false}),
            createMessages)

module.exports = router

