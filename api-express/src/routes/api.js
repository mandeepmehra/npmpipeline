// Import dependencies
import { connect, connection,Schema, model } from 'mongoose';
import {database} from '../config';
import express  from 'express';
var router = express.Router();

// MongoDB URL from the docker-compose file
//const dbHost = 'mongodb://database/mean-docker';
//var mongoHost = process.env.HOSTNAME || 'mongoservice';
var mongoPort= process.env.MONGODB_PORT || '27017';
var mongoUsername='priyanku';
var mongoPassword='admin123';
var mongoservicename=process.env.MONGODB_HOST ||process.env.DOCKER_COMPOSE_DB_SERVICE ||'localhost';
var mongoDBName='sample';
const dbUrl = 'mongodb://' + mongoservicename +':' +mongoPort+ '/' + mongoDBName;
//const dbUrl = 'mongodb://' + mongoservicename + '/sample';
//const dbUrl= 'mongodb://'+mongoUsername+ ':' + mongoPassword + '@' + mongoservicename +':' +mongoPort+ '/' + mongoDBName;

// Connect to mongodb
console.log ("trying to connect to mongodb .." +  dbUrl.toString())

//connect(database.url);
connect(dbUrl,{ useNewUrlParser: true });
connection.on('connected', function () {  
	console.log('Mongoose default connection open to ' + dbUrl);
  }); 
  
  // If the connection throws an error
  connection.on('error',function (err) {  
	console.log('Mongoose default connection error: ' + err);
  }); 
  
  // When the connection is disconnected
  connection.on('disconnected', function () {  
	console.log('Mongoose default connection disconnected'); 
  });

// create mongoose schema
const userSchema = new Schema({
  name: String,
  age: Number
});

// create mongoose model
const User = model('User', userSchema);
router.get('/', (req, res) => {
	res.send("API is working ");
})


/* GET all Users */
router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err) res.status(500).send(error)
		res.status(200).json(users);
	});
});

/* GET one users. */
router.get('/users/:id', (req, res) => {
	User.findById(req.params.id, (err, users) => {
		if (err){} res.status(500).send(error)

		res.status(200).json(users);
	});
});

/* Create a user. */
router.post('/users', (req, res) => {
	let user = new User({
		name: req.body.name,
		age: req.body.age
	});

	user.save(error => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: 'User created successfully'
		});
	});
});

export default router;
