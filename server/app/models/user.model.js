const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 10;

function transformValue(_, ret) {
  delete ret._id;
  delete ret.password;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name can't be blank"],
    },
    email: {
      type: String,
      required: [true, "User email can't be blank"],
      unique: true,
      match: [
        // eslint-disable-next-line max-len
        /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email",
      ],
    },
    password: {
      type: String,
      required: [true, "User password can't be blank"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
  },
  {
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
  }
);

UserSchema.methods.getEncryptedPassword = (password) => {
  return bcrypt.hash(String(password), SALT_ROUNDS);
};

UserSchema.methods.compareEncryptedPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await this.getEncryptedPassword(this.password);
  next();
});

module.exports = mongoose.model("User", UserSchema);
