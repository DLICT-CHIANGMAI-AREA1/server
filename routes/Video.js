const router = require("express").Router()
const {AddVideo,FindVideo,DeleteVideo} = require("../controller/video.controller");

router.get('/api/FindVideo',FindVideo)
router.post('/api/AddVideo',AddVideo)
router.delete('/api/DeleteVideo/:id',DeleteVideo)




module.exports = router
