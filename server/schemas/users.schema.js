const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const UsersSchema = new mongoose.Schema(
  {
  username: {type: String},
  password: {type: String},
  email: {type: String},
  address: {type: String},
  city: {type: String},
  postalCode: {type: String},
  country: {type: String,},
  isAdmin: {type: Boolean, default: false},
  createdAt: Date,
  isVisible: {type: Boolean, default: true}
})

UsersSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

const population = []
const Users = mongoose.model('Users', UsersSchema, 'Users')
module.exports = Users






// const mongoose = require('mongoose');
// const deepPopulate = require('mongoose-deep-populate')(mongoose);
// const UsersSchema = new mongoose.Schema(
//   {
//   username: {type: String},
//   password: {type: String},
//   email: {type: String},
//   address: {type: String},
//   city: {type: String},
//   postalCode: {type: String},
//   country: {type: String,},
//   isAdmin: {type: Boolean, default: false},
//   createdAt: Date,
//   isVisible: {type: Boolean, default: true}
// }
// )

// const population = []


// const Users = mongoose.model('Users', UsersSchema, 'Users')

// module.exports = Users