const router = require("express").Router()
const {CreatePDF,FindOP,UpdateOPM,DeleteOPM} = require("../controller/admin.controller");
const upload = require('../middleware/upload')

router.post('/api/CreatePDF',upload.single('file'),CreatePDF)
router.get('/api/FindPDF',FindOP)
router.put('/api/UpdatePDF_OPM/:id',upload.single('file'),UpdateOPM)
router.delete('/api/Delete/:id',DeleteOPM)



module.exports = router