var express = require('express')
  , router = express.Router()
  , food = require('../models/food')

router.get('/:id', function(req, res) {
  console.log('Hey')
  food.get(req.params.id, function (err, food) {
    // res.render('foods/food', {food: food})
  })
})

module.exports = router