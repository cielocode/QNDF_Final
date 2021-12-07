const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//encrypt user password
usuarioSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// compare password with received password
usuarioSchema.methods.comparePassword = async function (receivedPassword) {
  return await bcrypt.compare(receivedPassword, this.password);
};

module.exports = model('User', usuarioSchema);
