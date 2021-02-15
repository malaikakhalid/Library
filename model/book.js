const mongoose = require('mongoose');


var bookSchema = new mongoose.Schema({
  book_title: {
    type: String,
    required: "This field is required",
  },
  
  book_author: {
    type: String,
    required: "This field is required",
  },

  book_desc: {
    type: String,
    required: "Fill mobile field",
  },

  book_genre: {
    type: String,
    required: "Fill city field",
  },
});


var book = mongoose.model("Book", bookSchema);
