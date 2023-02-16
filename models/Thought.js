const { Schema, model } = require('mongoose');
const { DateTime } = require("luxon");

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    reactionBody: {type: String, required: true, maxLength: 280},
    username: {type: String, required: true}, 
    createdAt: {
        type: Date, 
        default: DateTime.now(),
        get: formatedDate,
      }
  },
  {
    toJSON: {
      getters: true
    },
  }
);

function formatedDate(createdAt) {
  return createdAt.toLocaleString(DateTime.DATE_MED);
}

//crearing Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, 
      default: DateTime.now(),
      get: formatedDate,
    },
    username: {type: String, required: true},
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);
//adding virtual field reactionCount
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return (this.reactions!==undefined)?this.reactions.length:0;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
