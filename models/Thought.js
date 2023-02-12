const { Schema, model } = require('mongoose');
//crearing Thought schema
const thoughSchema = new Schema(
  {
    thoughtText: {String, required: true, minLength: 1, maxLength: 280},
    createdAt: {Date, default: () => new Date(+new Date() + 7*24*60*60*1000)},
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
