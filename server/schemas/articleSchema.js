const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleScema = new Schema({
    // img: {
    //     type: Image, ???
    //     require: true,
    // },
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
    }

})

const Article = mongoose.model("Cards", articleScema, 'articles');
module.exports = Article; 