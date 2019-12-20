const express = require('express');
const Consoles = require('@retroemulator/core/src/enums/consoles');
const { generateError, Errors } = require('@retroemulator/core/src/errors');
const firestore = require('../../firestore');

const router = express.Router();

function generateSessionId() {
  return 'xxxxx'.replace(/[x]/g, c => {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16).toUpperCase();
  });
}

/**
 * POST /create-session
 *
 * @param consoleId
 *
 * Creates a session in Firestore, makes request to the EmulationService to
 * spin up a new Docker instance with the corresponding stream and socket URLs.
 */
router.post('/create-session', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { consoleId } = req.body;
  if (consoleId === undefined || !Consoles.get(consoleId)) {
    return res.status(400).send(generateError(
      Errors.Generic.INVALID_CONSOLE_ID.code,
      Errors.Generic.INVALID_CONSOLE_ID.message,
    ));
  }

  // Generate a 5 digit sessionId, note that there are only numbers and
  // uppercase letters
  const sessionId = generateSessionId();


  res.send({ shit: 1 });
});

module.exports = router;
