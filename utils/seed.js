const connection = require('../config/connection');
const {Thought, User } = require('../models');
const Reaction = require('../models/Reaction');
const {getRandomEmail, getRandomUserName, getRandomThought, getRandomReaction } = require('./data');
const { DateTime } = require("luxon");

console.log(DateTime.now().toLocaleString(DateTime.DATE_MED))

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});
  
  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing thoughts
  await Reaction.deleteMany({});
  
  const users = [];

  for (let i = 0; i < 10; i++) {
    const newUser = {
      username: getRandomUserName(),
      email: getRandomEmail()
    };
    users.push(newUser);
  }

  const reactions = [];
  for (let i = 0; i < 5; i++) {
    const newReaction = {
      reactionBody: getRandomReaction(),
      username: users[Math.floor(Math.random() * users.length)].username,
    };
    reactions.push(newReaction);
  }

  const thougths = [];
  
  for (let i = 0; i < 10; i++) {
    const newThought = {
      thoughtText: getRandomThought(),
      username: users[Math.floor(Math.random() * users.length)].username,
      reactions: [...reactions]
    };
    thougths.push(newThought);
  }



  // Wait for the users to be inserted into the database
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thougths);
  await Reaction.collection.insertMany(reactions);


  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
