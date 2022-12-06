const router = require("express").Router()
const {FindDataEachYear,FindDataEachYearById,FindDataEachYearByDate,DeleteDataDate,DeleteDataYear,CreateDataYear,CreateDataName,CreateDate,CreateData,UpdateData,DeleteData,DeleteDataRecordDate} = require("../controller/DataEachYear.controller");

const upload = require('../middleware/upload')

router.get('/api/FindDataEachYear',FindDataEachYear)
router.get('/api/FindDataEachYearById/:id',FindDataEachYearById)
router.get('/api/FindDataEachYearByDate/:param1/:param2',FindDataEachYearByDate)


router.post('/api/CreateDataYear',CreateDataYear)
router.post('/api/CreateDataName/:param',CreateDataName)
router.post('/api/CreateDate/:param/:param2',CreateDate)
router.post('/api/CreateData/:param/:param2/:param3/',upload.single('image'),CreateData)

router.put('/api/UpdateData/:param/:param2/:param3/',upload.single('image'),UpdateData)

router.delete('/api/DeleteData/:param1/:param2/:param3/:id',DeleteData)
router.delete('/api/DeleteDataDate/:param1/:id',DeleteDataDate)
router.delete('/api/DeleteDataYear/:id',DeleteDataYear)
router.delete('/api/DeleteDataRecordDate/:param1/:id',DeleteDataRecordDate)




module.exports = router
