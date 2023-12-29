const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleScema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  text: {
    type: Object,
    require: true,
  },
  comments: [
    {
      name: {
        type: String,
        required: false,
      },
      date: {
        type: String,
        required: false,
      },
      comment: {
        type: String,
        required: false,
      },
    },
  ],
});

const Article = mongoose.model("Cards", articleScema, "articles");
module.exports = Article;
