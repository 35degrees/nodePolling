const express = require('express');

const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '468759',
  key: 'ab69c927cd7ed6923c4d',
  secret: '4e13c4f13fc38e21c68e',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req,res) => {
  res.send("POLL")
});

router.post('/', (req,res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });

  return res.json({success: true, message: "thank you for Voting!"})
})

module.exports = router;