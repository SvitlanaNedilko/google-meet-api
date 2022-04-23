const mongoose = require('mongoose');
const {String} = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      minlength: 4,
      maxlength: 50,
      required: [true, 'FirstName is required']
    },
    lastName: {
      type: String,
      minlength: 3,
      maxlength: 60,
      required: [true, 'LirstName is required']
    },
    photo: {type: String},
    createdAt: {type: Date, default: Date.now}
  },
  {timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);
