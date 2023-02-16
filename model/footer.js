const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const footer = new Schema({
    text:String 
});

const Footer = mongoose.model(" footer", footer);

module.exports = Footer;
