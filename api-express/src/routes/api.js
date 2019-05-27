// Import dependencies
import { connect, Schema, model } from 'mongoose';
import {database} from '../config';
import express  from 'express';
var router = express.Router();

// MongoDB URL from the docker-compose file
//const dbHost = 'mongodb://database/mean-docker';
const dbhost= 'mongodb://guesttuser:guestuserpassword@my-api-mongodb:27017/meanDB';
// Connect to mongodb
console.log ("trying to connect to mongodb .." +  dbhost.toString())

//connect(database.url);
connect(dbhost,{ useNewUrlParser: true });
console.log ("successfully connected  to mongodb .." +  dbhost.toString())
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
