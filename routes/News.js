const router = require("express").Router()
const {FindNews,AddNews,DeleteNews,FindNewsById,UpdateNews} = require("../controller/news.controller");

router.get('/api/FindNews',FindNews)
router.get('/api/FindNewsById/:param',FindNewsById)
router.post('/api/AddNews',AddNews)
router.put('/api/UpdateNews/:Id',UpdateNews)
router.delete('/api/DeleteNews/:id',DeleteNews)


module.exports = router
