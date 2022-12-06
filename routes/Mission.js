const router = require("express").Router()
const {FindMission,AddMission,DeleteMission} = require("../controller/mission.controller");


router.get('/api/FindMission',FindMission)
router.post('/api/AddMission',AddMission)
router.delete('/api/DeleteMission/:id',DeleteMission)


module.exports = router
