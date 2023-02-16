const router = require("express").Router();
const { AddFooter, editFooter, findFooter } = require("../controller/website.controller");

router.post("/api/website/AddFooter", AddFooter);

router.get("/api/website/findFooter", findFooter);

router.put("/api/website/editFooter", editFooter);

module.exports = router;
