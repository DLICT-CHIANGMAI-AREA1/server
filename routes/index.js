const router = require("express").Router();

const opm = require("./opm");
const DataEachYear = require("./DataEacahYear")
const Person = require("./Person");
const Video = require("./Video")
const Mission = require("./Mission")


router.use("/admin", opm);
router.use("/admin", DataEachYear);
router.use("/admin", Person);
router.use("/admin", Video);
router.use("/admin", Mission);



module.exports = router;