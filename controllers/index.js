var express = require('express')
  , router = express.Router()

router.use('/food', require('./food'));
// router.use('/photo', require('./photo'))
// router.use('/code', require('./code'))
// router.use('/travel', require('./travel'))
// router.use('/reverie', require('./reverie'))

router.get('/', function(req, res) {
  res.send('index')
  return true;
})

module.exports = router