const router = require("express").Router()
const {FindService,CreateService,DeleteService,EditService,EditTiServiceTitleFind,ServiceTitleFind} = require("../controller/service.controller");

const upload = require('../middleware/upload')

router.get('/api/FindService',FindService)

router.post('/api/CreateService',upload.single('image'),CreateService)

router.delete('/api/DeleteService/:id',DeleteService)

router.put('/api/EditService/:id',upload.single('image'),EditService)

router.put('/api/ServiceTitle/:id',EditTiServiceTitleFind)
router.get('/api/ServiceTitleFind',ServiceTitleFind)





module.exports = router
