const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const bookSchema = require('./Book');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unqiue: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [
        5,
        "Must be at least 5 characters. Current character count: {VALUE}",
      ],
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
      unique: true,
    },
    booksRead: [bookSchema],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//compare the input password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//virtual for friend count
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

//Export User model
module.exports = User;
