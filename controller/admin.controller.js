const OP = require("../model/Operating_Manual");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
    CreatePDF: async (req, res, next) => {
        try {
            fetch("https://www.filestackapi.com/api/store/S3?key=AUvhS7551QwCvuwJ8LPpjz", {
                method: "POST",
                body: req.files.file.data,
            })
                .then((r) => r.json())
                .then((r) => {
                    console.log(r);
                    let op = new OP(r);
                    console.log(op);
                    op.save()
                        .then((response) => {
                            return res.status(200).json(response);
                        })
                        .catch((error) => {
                            return res.status(500).json(error.message);
                        });
                });
        } catch (error) {
            res.json({ message: error.message });
        }
    },
    UpdateOPM: async (req, res, next) => {
        try {
            let { id } = req.params;
            fetch("https://www.filestackapi.com/api/store/S3?key=AUvhS7551QwCvuwJ8LPpjz", {
                method: "POST",
                body: req.files.file.data,
            })
                .then((r) => r.json())
                .then(async (r) => {
                    let update = await OP.findByIdAndUpdate(id, r, { new: true });
                    return res.status(200).json(update);
                });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    FindOP: async (req, res, next) => {
        try {
            res.status(200).json(await OP.find());
        } catch (error) {
            res.status(500).json(error);
        }
    },
    DeleteOPM: async (req, res, next) => {
        try {
            const { id } = req.params;
            await OP.findByIdAndDelete(id);
            return res.status(200).json(await OP.find());
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};
