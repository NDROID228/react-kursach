const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puzzleScema = new Schema({
  level: {
    type: String,
    required: true,    
  },
  boardConfig: {
    type: Object,
    required: true,
  },
  correctMovesArr: {
    type: Array,
    require: true,
  },
  modalMsg: {
    type: String,
    require: true,
  },
});

const Puzzle = mongoose.model("Puzzles", puzzleScema, "puzzles");
module.exports = Puzzle;
