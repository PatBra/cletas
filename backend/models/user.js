const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ingrese su nombre."],
    maxLength: [30, "Su nombre no puede tener mas de 30 caracteres."],
  },
  email: {
    type: String,
    required: [true, "Ingrese su email"],
    unique: true,
    validate: [validator.isEmail, "Ingrese un email válido."],
  },
  password: {
    type: String,
    required: [true, "Ingrese su clave."],
    minlength: [6, "Su clave debe tener mas de 6 caracteres."],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: [true, 'Please enter your avatar'],
    },
    url: {
      type: String,
      required: [true, 'Please enter your avatar'],
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Encrypting password before saving to database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
      next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// compare user password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

// Return jwt token
userSchema.methods.getJwtToken = function(){
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_TIME
  });
}

// Generate password reset token
userSchema.methods.getResetPasswordToken = function(){
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex')

  // Hash and set to reset password token
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

  // Set token expire time
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return resetToken;

};

module.exports = mongoose.model('User',userSchema);