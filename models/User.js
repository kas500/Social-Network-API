const { Schema, model } = require('mongoose');
//crearing User schema
const userSchema = new Schema(
  {
    username: {String, unique : true, trim: true, required: true},
    email: {String, unique : true, required: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
      },
      message: props => `${props.value} is not a valid email!`
    }},
    thoughts:[
      {
        type: Schema.Types.ObjectId ,
        ref: 'thought',
      },
    ],
    friends:[
      {
        type: Schema.Types.ObjectId ,
        ref: 'friend',
      },
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//adding virtual fiehld '' friendsCount
userSchema
  .virtual('friendsCount')
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
