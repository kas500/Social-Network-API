const { Schema, model } = require('mongoose');
const { DateTime } = require("luxon");
const reactionSchema = require('./Reaction');
//crearing Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: DateTime.now().toLocaleString(DateTime.DATE_MED)},
    username: {type: String, required: true},
    reactions: [reactionSchema.schema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//adding virtual field reactionCount
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
