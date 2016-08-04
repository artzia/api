var r = require('rethinkdbdash')();

// Create new food in your database and return its id
exports.create = async function (user, text, cb) {
  var obj = await r.db('test').table('authors').run();
  console.log(obj);
  return true
}

// Get a particular food
exports.get = async function(req, res, next) {
   var obj = await r.db('test').table('authors').run();
  console.log("Object is above");
  console.log(obj);

  res.sendStatus(200);
}

// Get all foods
exports.all = function(cb) {
  cb(null, [])
}

// Get all foods by a particular user
exports.allByUser = function(user, cb) {
  cb(null, [])
}

r.db('test').table('authors').run().then(function(result) {
    console.log(result);
    console.log('result');
  }).error(function(error) {console.log(error)})
