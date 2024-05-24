const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const UsersSchema = new mongoose.Schema(
  {
  username: {type: String},
  password: {type: String},
  // fullname: {type: String},
  email: {type: String},
  address: {type: String},
  city: {type: String},
  postalCode: {type: String},
  country: {type: String,},
  isAdmin: {type: Boolean, default: false},
  createdAt: Date,
  isVisible: {type: Boolean, default: true}
}
)

const population = []


const Users = mongoose.model('Users', UsersSchema, 'Users')

module.exports = Users