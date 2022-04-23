const mongoose = require('mongoose');
const {String} = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const CatSchema = new Schema(
  {
    photo: {type: String},
    createdAt: {type: Date, default: Date.now}
  },
  {timestamps: true}
);

module.exports = mongoose.model('Cat', CatSchema);
