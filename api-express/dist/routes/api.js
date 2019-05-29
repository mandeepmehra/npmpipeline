"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _config = require("../config");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import dependencies
var router = _express["default"].Router(); // MongoDB URL from the docker-compose file
//const dbHost = 'mongodb://database/mean-docker';


var dbhost = 'mongodb://guesttuser:guestuserpassword@my-api-mongodb:27017/meanDB'; // Connect to mongodb

console.log("trying to connect to mongodb .." + dbhost.toString()); //connect(database.url);

(0, _mongoose.connect)(dbhost, {
  useNewUrlParser: true
});
console.log("successfully connected  to mongodb .." + dbhost.toString()); // create mongoose schema

var userSchema = new _mongoose.Schema({
  name: String,
  age: Number
}); // create mongoose model

var User = (0, _mongoose.model)('User', userSchema);
router.get('/', function (req, res) {
  res.send("API is working ");
});
/* GET all Users */

router.get('/users', function (req, res) {
  User.find({}, function (err, users) {
    if (err) res.status(500).send(error);
    res.status(200).json(users);
  });
});
/* GET one users. */

router.get('/users/:id', function (req, res) {
  User.findById(req.params.id, function (err, users) {
    if (err) {}

    res.status(500).send(error);
    res.status(200).json(users);
  });
});
/* Create a user. */

router.post('/users', function (req, res) {
  var user = new User({
    name: req.body.name,
    age: req.body.age
  });
  user.save(function (error) {
    if (error) res.status(500).send(error);
    res.status(201).json({
      message: 'User created successfully'
    });
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=api.js.map