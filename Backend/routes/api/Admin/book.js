const express = require("express");
const {
  addBook,
  updateBook,
  deleteBook,
  getBook,
  searchBooks,
  fetchBookDetailsByGoogleAPI,
} = require("../../../controllers/Admin/book.controller");

const { protect, librarian } = require("../../../middleware/authentication");
const router = express.Router();

router.post(
  "/getbookdetailsfromapi",
  protect,
  librarian,
  fetchBookDetailsByGoogleAPI
);
router.post("/addbook", protect, librarian, addBook);
router.put("/updatebook/:id", protect, librarian, updateBook);
router.delete("/deletebook/:id", protect, librarian, deleteBook);
router.get("/getbook/:id", protect, librarian, getBook);
router.get("/getsearchbook", protect, librarian, searchBooks);

module.exports = router;
