const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const User = new Schema({
    account: {type: String, require: true,},
    passWord: {type: String, require:true,},
    level: { type: String},
  slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
    
  });
  mongoose.plugin(slug);
User.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all' }); 

module.exports = mongoose.model('User', User);