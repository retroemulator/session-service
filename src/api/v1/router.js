const express = require('express');

const router = express.Router();

router.post('/create-session', (req, res) => {
    console.log(req.body);
    // Validate against the req.body

    // Make API call to the emulation-service to spin up console with game

    // Responds with streamUrl, socketUrl

    // Update firebase
        // sessionId
        // emulation { streamUrl, socketUrl }
        // game { ... }
        // users { maxPlayerNumber }
});

router.get('/session/:sessionId', (req, res) => {
    console.log(req.params.sessionId);

    // Query for session by sessionId
});

router.post('/connect-session/:sessionId', (req, res) => {
    // Query for session by sessionId

    // Try to resolve the next user

    // If at max users return error code
});

module.exports = router;
