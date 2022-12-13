const Service = require("../model/Service");
const ServiceTitle = require("../model/ServiceTitle");
module.exports = {
    FindService: async (req, res, next) => {
        try {
            res.status(200).json(await Service.find());
        } catch (error) {
            res.json({ message: error.message });
        }
    },
    CreateService: async (req, res, next) => {
        try {
            const { name, url } = req.body;
            const data = {
                name: name,
                url: url,
                image: req.file.path,
            };
            let service = new Service(data);
            await service.save(async (err, data) => {
                if (err) return res.status(400).json("Bad Request");
                return res.status(200).json(data);
            });
        } catch (error) {}
    },
    DeleteService: async (req, res, next) => {
        try {
            const { id } = req.params;
            return res.status(200).json(await Service.findByIdAndDelete(id));
        } catch (error) {
            res.json({ message: error.message });
        }
    },
    EditService: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, url } = req.body;
            const data = {
                name: name,
                url: url,
                image: req.file.path,
            };
            let update = await Service.findByIdAndUpdate(id, data, { new: true });
            return res.status(200).json(update);
        } catch (error) {
            res.json({ message: error.message });
        }
    },
    EditTiServiceTitleFind: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { Title, subTitle } = req.body;
            const data = {
                title: Title,
                subtitle: subTitle,
            };
            let update = await ServiceTitle.findByIdAndUpdate(id, data, { new: true });
            return res.status(200).json(update);
        } catch (error) {}
    },
    ServiceTitleFind: async (req, res, next) => {
        try {
            res.status(200).json(await ServiceTitle.find());
        } catch (error) {}
    },
};
