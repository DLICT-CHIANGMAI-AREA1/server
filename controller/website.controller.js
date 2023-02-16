const Footer = require("../model/footer");
module.exports = {
    AddFooter: async (req, res, next) => {
        try {
            const footer = req.body.map((text) => {
                return new Footer({ text });
            });
            Footer.insertMany(footer).then((data) => {
                console.log(data);
                return res.status(200).json(data);
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    editFooter: async (req, res, next) => {
        try {
            const footer = req.body.map((text) => {
                return new Footer({ text });
            });
            Footer.insertMany(footer).then((data) => {
                console.log(data);
                return res.status(200).json(data);
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    findFooter: async (req, res, next) => {
        try {
            res.status(200).json(await Footer.find());
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};
