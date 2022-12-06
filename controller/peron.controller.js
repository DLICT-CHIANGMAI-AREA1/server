const Person = require("../model/DataPerson");
module.exports = {
    DataPerson: async (req, res, next) => {
        try {
            res.status(200).json(await Person.find());
        } catch (error) {
            res.status(500).json(error);
        }
    },
    DataPersonById: async (req, res, next) => {
        try {
            const { id } = req.params;
            res.status(200).json(await Person.findById(id));
        } catch (error) {
            res.status(500).json(error);
        }
    },

    DeletePerson: async (req, res, next) => {
        try {
            const { id } = req.params;
            return res.status(200).json(await Person.findByIdAndDelete(id));
        } catch (error) {
            res.status(500).json(error);
        }
    },
    UpdatePerson: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { First_name, Last_name, Gender, JobTitle, Department, Email, Phone } = req.body;

            const data = {
                First_name: First_name,
                Last_name: Last_name,
                Gender: Gender,
                Job_title: JobTitle,
                Department: Department,
                Email: Email,
                Phone: Phone,
                Operating_Manual: req.files.Operating_Manual[0].path,
                Profile: req.files.Profile[0].path,
            };
            let update = await Person.findByIdAndUpdate(id, data, { new: true });
            return res.status(200).json(update);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    CreatePerson: async (req, res, next) => {
        try {
            const { First_name, Last_name, Gender, JobTitle, Department, Email, Phone } = req.body;
            const data = {
                First_name: First_name,
                Last_name: Last_name,
                Gender: Gender,
                Job_title: JobTitle,
                Department: Department,
                Email: Email,
                Phone: Phone,
                Operating_Manual: req.files.Operating_Manual[0].path,
                Profile: req.files.Profile[0].path,
            };
            console.log(data)
            let person = new Person(data);
           await person.save(async (err, data) => {
                if (err) return res.status(400).json("Bad Request");
                return res.status(200).json(data);
            });
    
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};
