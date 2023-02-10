const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const User = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require:true,},
}, {
    timestamps: true,
    
  });

User.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', User);
