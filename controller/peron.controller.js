const Person = require("../model/DataPerson");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
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
            const { First_name, Last_name, Gender, JobTitle, Department, Email, Phone, Profile } = req.body;
            fetch("https://www.filestackapi.com/api/store/S3?key=AUvhS7551QwCvuwJ8LPpjz", {
                method: "POST",
                body: req.files.Operating_Manual.data,
            })
                .then((r) => r.json())
                .then(async (r) => {
                    const data = {
                        First_name: First_name,
                        Last_name: Last_name,
                        Gender: Gender,
                        Job_title: JobTitle,
                        Department: Department,
                        Email: Email,
                        Phone: Phone,
                        Operating_Manual: r,
                        Profile: Profile,
                    };
                    let update = await Person.findByIdAndUpdate(id, data, { new: true });
                    return res.status(200).json(update);
                });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    CreatePerson: async (req, res, next) => {
        try {
            const { First_name, Last_name, Gender, JobTitle, Department, Email, Phone, Profile } = req.body;
            fetch("https://www.filestackapi.com/api/store/S3?key=AUvhS7551QwCvuwJ8LPpjz", {
                method: "POST",
                body: req.files.Operating_Manual.data,
            })
                .then((r) => r.json())
                .then(async (r) => {
                    const data = {
                        First_name: First_name,
                        Last_name: Last_name,
                        Gender: Gender,
                        Job_title: JobTitle,
                        Department: Department,
                        Email: Email,
                        Phone: Phone,
                        Operating_Manual: r,
                        Profile: Profile,
                    };
                    let person = new Person(data);
                    await person.save(async (err, data) => {
                        if (err) return res.status(400).json("Bad Request");
                        return res.status(200).json(data);
                    });
                });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};
