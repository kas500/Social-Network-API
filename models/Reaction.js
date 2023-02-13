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
        virtuals: true,
        getters: true
      },
      id: false,
    }
  );

  function formatedDate(createdAt) {
    return createdAt.toLocaleString(DateTime.DATE_MED);
  }
  //adding virtual field reactionCount
  reactionSchema
    .virtual('reactionCount')
    .get(function () {
      return this.reactions.length;
    });


const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;