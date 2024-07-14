const mongoose = require("mongoose");

const issuedBySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  issueDate: { type: Date, default: Date.now },
});

const returnedSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  returnDate: { type: Date },
});

const bookSchema = new mongoose.Schema({
  isbn: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  quantity: { type: Number, required: true },
  libraryQuantity: { type: Number, required: true },
  issuedBy: [issuedBySchema],
  returnedBy: [returnedSchema]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
