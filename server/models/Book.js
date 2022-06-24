const { Schema } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: String,
    },
  ],
  bookID: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = bookSchema;
