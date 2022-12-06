const router = require("express").Router();
const { DataPerson, DeletePerson, DataPersonById, UpdatePerson,CreatePerson } = require("../controller/peron.controller");

const upload = require("../middleware/upload");
const MultipleUpload = upload.fields([{ name: "Operating_Manual" }, { name: "Profile" }]);
router.get("/api/DataPerson", DataPerson);
router.get("/api/DataPersonById/:id", DataPersonById);
router.delete("/api/DeletePerson/:id", DeletePerson);
router.put("/api/UpdatePerson/:id", MultipleUpload, UpdatePerson);
router.post("/api/CreatePerson/", MultipleUpload, CreatePerson);

module.exports = router;
