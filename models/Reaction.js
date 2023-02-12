const { Schema, model } = require('mongoose');
const { DateTime } = require("luxon");
//crearing Thought schema
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    reactionBody: {String, required: true, maxLength: 280},
    username: {String, required: true},
    reactions: [reactionSchema],
    createdAt: {
        Date, 
        default: () => DateTime.now()},
        get(){
            return this.createdAt.toLocaleString(DateTime.DATE_MED);
        }
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