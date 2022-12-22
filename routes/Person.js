const router = require("express").Router();
const {
    DataPerson,
    DeletePerson,
    DataPersonById,
    UpdatePerson,
    CreatePerson,
} = require("../controller/peron.controller");

router.get("/api/DataPerson", DataPerson);
router.get("/api/DataPersonById/:id", DataPersonById);
router.delete("/api/DeletePerson/:id", DeletePerson);
router.put("/api/UpdatePerson/:id", UpdatePerson);
router.post("/api/CreatePerson/", CreatePerson);

module.exports = router;
