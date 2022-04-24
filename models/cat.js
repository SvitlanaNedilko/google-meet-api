const mongoose = require('mongoose');
const {String} = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const CatSchema = new Schema(
  {
    photo: {type: String}
  },
  {timestamps: true}
);

CatSchema.virtual('id').get(function () {
  return this._id;
});

CatSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Cat', CatSchema);
