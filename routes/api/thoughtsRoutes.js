const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtsControllers');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/:thoughtId
router.route('/:thougthId').get(getSingleThought).put(updateThought).delete(deleteThought);
// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction)
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;