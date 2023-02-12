const { Schema, model } = require('mongoose');
const { DateTime } = require("luxon");
//crearing Thought schema
const thoughSchema = new Schema(
  {
    thoughtText: {String, required: true, minLength: 1, maxLength: 280},
    createdAt: {Date, default: () => DateTime.now()},
    username: {String, required: true},
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//adding virtual field reactionCount
thoughSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('though', thoughSchema);

module.exports = Thought;
