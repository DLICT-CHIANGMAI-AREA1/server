const mongoose = require("../config/database");
const Schema = mongoose.Schema;
const person = require("../model/JSON/person.json");

const Person = new Schema({
    First_name: String,
    Last_name:String,
    Gender: String,
    Job_title: String,
    Department: String,
    Email: String,
    Phone: String,
    Operating_Manual: String,
    Profile: String

});

const DataPerson = mongoose.model(" Person", Person);

const SaveDataPerson= async () => {
    if (0 == (await DataPerson.find())) await DataPerson.insertMany(person);
};
SaveDataPerson();

module.exports = DataPerson;
