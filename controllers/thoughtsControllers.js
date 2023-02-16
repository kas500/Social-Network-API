const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then(async (thoughts) => {
        const thoughtObj = {
          thoughts
        };
        return res.json(thoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single thought
  getSingleThought(req, res) {
    console.log(req.params.thougthId);
    Thought.findOne({ _id: req.params.thougthId })
      .select('-__v')
      .populate('reactions')
      .lean()
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new thougth
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thougth created, but found no user with that ID',
            })
          : res.json('Created the thought')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update thought by id
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thougthId }, {$set: req.body }, { new: true, runValidators: true })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thoughts found with that id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },
  // Delete a thought
    deleteThought(req, res) {
      Thought.findOneAndRemove({ _id: req.params.thougthId })
        .then((dbThoughtData) =>
          !dbThoughtData
            ? res.status(404).json({ message: 'No thought with this id!' })
            : User.findOneAndUpdate(
                { thoughts: req.params.thougthId },
                { $pull: { thoughts: req.params.thougthId } },
                { new: true }
              )
        )
        .then((user) =>
          !user
            ? res.status(404).json({
                message: 'Thought deleted but no user with this id!',
              })
            : res.json({ message: 'Thought successfully deleted!' })
        )
        .catch((err) => res.status(500).json(err));
    },
  //create reaction
    createReaction(req, res) {
      Thought.findOneAndUpdate(
        {_id: req.params.thoughtId}, 
        {$addToSet: {reactions: req.body}}, 
        {new: true})
      .populate({path: 'reactions', select: '-__v'})
      .select('-__v')
      .then(dbThoughtData => {
          if (!dbThoughtData) {
              res.status(404).json({message: 'No thoughts with this ID.'});
              return;
          }
          res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
      
  },
  //delete reaction
    deleteReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { new: true }
      )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: "Not found" });
        }
        res.json({message: 'Reaction successfully deleted!'});
      })
      .catch((err) => res.json(err));
    }
}