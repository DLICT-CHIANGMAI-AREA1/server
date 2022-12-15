const router = require("express").Router()
const {FindService,CreateService,DeleteService,EditService,EditTiServiceTitleFind,ServiceTitleFind,FindServiceByType,CreateServiceTitle,ServiceTitleFindByType} = require("../controller/service.controller");

const upload = require('../middleware/upload')

router.get('/api/FindService',FindService)
router.get('/api/FindServiceByType/:id',FindServiceByType)

router.post('/api/CreateService',CreateService)

router.delete('/api/DeleteService/:id',DeleteService)

router.put('/api/EditService/:id',EditService)

router.put('/api/ServiceTitle/:id',EditTiServiceTitleFind)
router.post('/api/ServiceTitle',CreateServiceTitle)
router.get('/api/ServiceTitleFind',ServiceTitleFind)
router.get('/api/ServiceTitleFindByType/:id',ServiceTitleFindByType)





module.exports = router
