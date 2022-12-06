const mongoose = require("../config/database");
const Schema = mongoose.Schema


const operating_manual = new Schema({
    filename:String,
    file:String,
})

const OP = mongoose.model("operating_manuals", operating_manual)


module.exports = OP